import { Schema, model, Document } from 'mongoose';

const cart = new Schema({
	IdCustomer: String,
	Products: [
		{
			_id: String,
			IdProducts: String,
			Name: String,
			Description: String,
			Amount: Number,
			Total: Number,
			UrlImage: String,
		}
	],
}, {
	collection: 'carts',
	versionKey: false //here
});

interface ICart extends Document {
	IdCustomer: string,
	Products: [
		{
			_id: string,
			IdProducts: string;
			Name: string;
			Description: string;
			Amount: number;
			Total: number;
			UrlImage: string;
		}
	]
}

export default model<ICart>('Carts', cart);