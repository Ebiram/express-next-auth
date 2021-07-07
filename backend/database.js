const mongoose = require('mongoose');
require('dotenv').config('/')

mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('------------------------------------------------------------------------------')
    console.log('-------------------------------* DB Connected *-------------------------------')
    console.log('------------------------------------------------------------------------------')
}).catch(err => {
    console.log(err)
})