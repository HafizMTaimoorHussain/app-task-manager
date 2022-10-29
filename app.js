const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())

//*** routes ***//
// app.get('/hw', (req, res) => {
//     res.send('Hello world')
// })

app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is up on port: ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()