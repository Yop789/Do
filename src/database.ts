import {connect} from 'mongoose';

export async function startConnection() {
    connect('mongodb://127.0.0.1/Dofest', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Database is connected')
}

