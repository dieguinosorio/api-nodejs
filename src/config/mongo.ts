import 'dotenv/config';
import { connect } from 'mongoose';
const { USER_ENV, PASSWORD_ENV, CLOUSTER_ENV, DB_ENV } = process.env
async function dbConnect(): Promise<void> {
    try {
        await connect(`mongodb+srv://${USER_ENV}:${PASSWORD_ENV}@${CLOUSTER_ENV}/${DB_ENV}`);
        console.log('Db en linea')
    } catch(e) {
        console.log('Error al conectar a la bd')
    }
}

export default dbConnect;