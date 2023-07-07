import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes'
import dbConnect from './config/mongo'

const { PORT = 3001 } = process.env

const app = express()

app.use(express.json())
app.use('/api',router)

//cors( expecificar dominio que consumira la api )
app.use(cors())
//Base de datos
dbConnect();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})