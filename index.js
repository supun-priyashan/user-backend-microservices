const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user.route');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

//test
mongoose.connect(MONGODB_URI,{
  useCreateIndex:true,
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:false
},(error) =>{
  if(error){
    console.log('Error occurred while connecting to the database: ',error.message);
  }
});

mongoose.connection.once('open',()=>{
  console.log('Database Connected Successfully');
})

app.route('/').get((req,res) => {
  res.send('Test API call');
})

app.use('/users',userRoute());

app.listen(PORT,()=>{
  console.log(`Server is up and running on port ${PORT}`);
})
