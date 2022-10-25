import {Schema, model, Document} from 'mongoose';

const cart = new Schema({
    IdCustomer: Number,
	Products: [
			{
				_id: String,
				IdProduct: String,
				Amount: Number
			}
		],
},{collection:'carts',
versionKey: false //here
});

interface ICart extends Document{
    IdCustomer: number,
	Products: [
			{
				_id: string,
				IdProduct: string,
				Amount: number
			}
		]
}

export default model <ICart>('Carts',cart);