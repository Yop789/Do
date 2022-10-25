import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
        Name:           String,
		Description:    String,
		TotalProduct:   Number,
		TotalStock:     Number,
		TotalService:   Number,
		Type:           String,
		Price:          Number,
        imagePath:      String	
},{collection:'products',
versionKey: false //here
});

interface IProduct extends Document{
        Name:           string,
		Description:    string,
		TotalProduct:   number,
		TotalStock:     number,
		TotalService:   number,
		Type:           string,
		Price:          number,
        imagePath:      string
}

export default model <IProduct>("Products",schema);