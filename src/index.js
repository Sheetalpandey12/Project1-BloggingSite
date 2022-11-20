const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/route.js')
const app = express();

app.use(express.json());
mongoose.connect('mongodb+srv://sheetalpandey12:shanu1234pandey@newproject.tsmixoq.mongodb.net/project1-BlogGroup2', {
    useNewUrlParser: true
}).then(() => console.log('MongoDb is connected'))
    .catch(err => console.log(err));

app.use('/', route)

app.use((req, res) => {
    res.status(400).send({ status: false, message: 'Invalid URL' })
})

app.listen(3000, () => console.log('Express app is running on port 3000'));
