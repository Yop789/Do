import {Request, Response} from 'express';
import Orders from '../models/order';
import path from 'path';
import fs from 'fs-extra'
//export function helloWorld(req:Request, res:Response):Response{
    //return res.send('Hello World!')}

export async function createOrder(req:Request, res:Response){
    console.log('Saving Order');
    console.log(req.body);
    const {Status,FullNameUser,Paid,Latitude,Lenght,Products: [{_id,IdProducts,Amount}]}=req.body;
    const Products = req.body.Products;
    const newOrder = {
        Status: Status,
        FullNameUser: FullNameUser,
        Paid: Paid,
        Latitude: Latitude,
        Lenght: Lenght,
        Products: Products,
    }
    const order = new Orders(newOrder)
    await order.save();
    console.log(order);

    return res.json({
        message: 'Order succesfully saved'
    })
}

export async function getOrders(req:Request, res:Response):Promise<Response>{
    const order = await Orders.find();
    return res.json(order);
}


export async function getOrder(req:Request, res:Response):Promise<Response> {
    const {id} = req.params;
    const order= await Orders.findById(id);
    console.log(req.params.id);
    return res.json({order});
}

export async function deleteOrder(req:Request, res:Response):Promise<Response> {
    const {id}=req.params;
    const order= await Orders.findByIdAndRemove(id)
    return res.json({
        message: 'Order Delete',
        order
    });
}

export async function updateOrder(req:Request, res:Response):Promise<Response> {
    const {id}= req.params
    const {Status,FullNameUser,Paid,Latitude,Lenght,Products: [{_id,IdProducts,Amount}]} = req.body;
    const Products = req.body.Products;
    const updateOrder = await Orders.findByIdAndUpdate(id,{
        Status,
        FullNameUser,
        Paid,
        Latitude,
        Lenght,
        Products
    },{new:true})
    return res.json({
        message: 'Succesfullu Update',
        updateOrder
    })
}