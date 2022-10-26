import {Schema, model, Document} from 'mongoose';

const user = new Schema({
    Name: 		String,
	LastName: 	String,
    E_mail:		String,
	Password: 	String,
	Latitude: 	Number,
	Lenght: 	Number,
	Customer: 	Boolean,
	Admin: 		Boolean
},{collection:'users',
versionKey: false //here
});

interface IUser extends Document{
    Name:       string,
	LastName:   string,
    E_mail:     string,
	Password: 	string,
	Latitude:   number,
	Lenght:     number,
	Customer:   boolean,
	Admin:      boolean
}

export default model <IUser>('Users',user);