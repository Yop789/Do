import { Request, Response } from "express";
import User from "../models/User";
import path from "path";
import fs from "fs-extra";

export async function createUser(req: Request, res: Response) {
  console.log("Saving User");
  console.log(req.body);
  const { Name, LastName, E_mail, Latitude, Lenght, Customer, Admin } =
    req.body;
  const newUser = {
    Name: Name,
    LastName: LastName,
    E_mail: E_mail,
    Latitude: Latitude,
    Lenght: Lenght,
    Customer: Customer,
    Admin: Admin,
  };
  const user = new User(newUser);
  await user.save();
  console.log(user);

  return res.json({
    message: "User succesfully saved",
  });
}

export async function getUsers(req: Request, res: Response): Promise<Response> {
  const user = await User.find();
  return res.json(user);
}

export async function getUser(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const user = await User.findById(id);
  console.log(req.params.id);
  return res.json({ user });
}

export async function deleteUser(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const user = await User.findByIdAndRemove(id);
  return res.json({
    message: "Comunidad Delete",
    user,
  });
}

export async function updateUser(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const { Name, LastName, E_mail, Latitude, Lenght, Customer, Admin } =
    req.body;
  const updateUser = await User.findByIdAndUpdate(
    id,
    {
      Name,
      LastName,
      E_mail,
      Latitude,
      Lenght,
      Customer,
      Admin,
    },
    { new: true }
  );
  return res.json({
    message: "Succesfullu Update",
    updateUser,
  });
}
