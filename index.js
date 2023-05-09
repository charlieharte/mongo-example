const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const userRoutes = require('./controllers/user')

const app = express()

// middlewares
app.use(express.json())

// routes
app.use('/users', userRoutes)

const PORT = process.env.PORT || 8080

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));
  

app.listen(PORT, console.log(`listening on port ${PORT}`))