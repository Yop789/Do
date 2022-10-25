import {Schema, model, Document} from 'mongoose';

const order = new Schema({
	Status:         String,
	FullNameUser:   String,
	Paid:           Boolean,
	Latitude:       Number,
	Lenght:         Number,
	Products: [
		{
            _id:        String,
			IdProducts: String,
			Amount:     Number
		}
	]
},{collection:'orders',
versionKey: false //here
});

interface IOrder extends Document{
	Status:         string,
	FullNameUser:   string,
	Paid:           boolean,
	Latitude:       number,
	Lenght:         number,
	Products: [
		{
            _id:        string,
			IdProducts: string,
			Amount:     number
		}
	]
}

export default model <IOrder>('Orders',order);