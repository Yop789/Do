/*import app from './app'

app.listen(3000,()=>{
    console.log('Server on port',3000);
})*/

//Nueva version
import app from './app'
import {startConnection} from './database';

async function main() {
    //await app.listen(3000);
    //console.log('Server on port', 3000);
    //Con el paso 26 las lineas quedaron asi

    startConnection();

    await app.listen(app.get('port'));
    console.log('Server on port',app.get('port'));
}

main();