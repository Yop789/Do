import { Schema, model, Document } from "mongoose";

const order = new Schema(
  {
    IdCustomer: String,
    Status: String,
    FullNameUser: String,
    Paid: Boolean,
    Municipio: String,
    Comunidad: String,
    Numero: String,
    Email: String,
    Telefone: String,
    DateDeliver: Date,
    DateReturn: String,
    Dias: 	Number,
    TotalPrecio: Number,
    Products: [
      {
        _id: String,
        IdProducts: String,
        Name: String,
        Description: String,
        Amount: Number,
        Total: Number,
        UrlImage: String,
      },
    ],
  },
  {
    collection: "orders",
    versionKey: false, //here
  }
);

interface IOrder extends Document {
  IdCustomer: string;
  Status: string;
  FullNameUser: string;
  Paid: boolean;
  Municipio: string;
  Comunidad: string;
  Numero: string;
  Email: string;
  Telefone: string;
  DateDeliver: Date;
  DateReturn: Date;
  Dias: number;
  TotalPrecio: number;
  Products: [
    {
      _id: string;
      IdProducts: string;
      Name: string;
      Description: string;
      Amount: number;
      Total: number;
      UrlImage: string;
    }
  ];
}

export default model<IOrder>("Orders", order);
