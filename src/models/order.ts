import {Schema, model, Document} from 'mongoose';

const order = new Schema({
	Status:         String,
	FullNameUser:   String,
	Paid:           Boolean,
	Latitude:       Number,
	Lenght:         Number,
	DateDeliver:    String,
	DateReturn:     String,
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
	DateDeliver:    string,
	DateReturn:     string,
	Products: [
		{
            _id:        string,
			IdProducts: string,
			Amount:     number
		}
	]
}

export default model <IOrder>('Orders',order);