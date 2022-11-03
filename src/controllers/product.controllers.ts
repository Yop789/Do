import { Request, Response } from "express";
import Products from "..//models/product";
import path from "path";
import fs from "fs-extra";

export async function createProduct(req: Request, res: Response) {
  console.log("Saving product");
  console.log(req.body);
  const {
    Name,
    Description,
    TotalProduct,
    TotalStock,
    TotalService,
    Type,
    Price,
  } = req.body;
  const newProduct = {
    Name: Name,
    Description: Description,
    TotalProduct: TotalProduct,
    TotalStock: TotalStock,
    TotalService: TotalService,
    Type: Type,
    Price: Price,
    imagePath: req.file?.path,
  };
  const product = new Products(newProduct);
  await product.save();
  console.log(product);

  return res.json({
    message: "Product succesfully saved",
  });
}
export async function getType(req: Request, res: Response): Promise<Response> {
  const { Type } = req.body;
  if (req.body != null) {
    const tipo = await Products.find({ Type: req.body.Type }, {}).limit(4);
    return res.json(tipo);
  } else {
    return res.json("A type of product is necessary");
  }
}

export async function getProducts(
  req: Request,
  res: Response
): Promise<Response> {
  const { Type } = req.body;
  if (req.body != null) {
    const product = await Products.find({ Type: req.body.Type }, {});
    return res.json(product);
  } else {
    return res.json("A type of product is necessary");
  }
}

export async function getProduct(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const product = await Products.findById(id);
  console.log(req.params.id);
  return res.json({ product });
}

export async function deleteProduct(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const product = await Products.findByIdAndRemove(id);
  if (product) {
    await fs.unlink(path.resolve(product.imagePath));
  }
  return res.json({
    message: "Product Delete",
    product,
  });
}

export async function updateProduct(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const {
    Name,
    Description,
    TotalProduct,
    TotalStock,
    TotalService,
    Type,
    Price,
  } = req.body;
  const updateProduct = await Products.findByIdAndUpdate(
    id,
    {
      Name,
      Description,
      TotalProduct,
      TotalStock,
      TotalService,
      Type,
      Price,
    },
    { new: true }
  );
  return res.json({
    message: "Succesfullu Update",
    updateProduct,
  });
}
