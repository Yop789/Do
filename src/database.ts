import {connect} from 'mongoose';

export async function startConnection() {
    connect('mongodb://localhost/Dofest', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Database is connected')
}

