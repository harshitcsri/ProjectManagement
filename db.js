const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://harshitcsri:Harshit24@cluster0.iccbt.mongodb.net/productmanagement?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('Connected to Mongodb Server'))
.catch((err)=> console.log(err));