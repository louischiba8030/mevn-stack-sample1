import express from 'express'
import cors from 'cors'
import './src/config'
import User from './src/routes/user'
require('dotenv').config({path: `./${process.env.NODE_ENV}.env`})
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/users', User)

app.listen(port, () => {
	console.log("Server is listening on port: " + port)
})
