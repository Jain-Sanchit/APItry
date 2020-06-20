const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const passport=require('passport')
const users=require('./routes/users')
const path = require("path");
const app=express()

app.use(bodyParser.urlencoded({
    extended:false
})
)

app.use(bodyParser.json())

const db=require('./configs/keys').mongoURI

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDb Connected!!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(passport.initialize())

require('./configs/passport')(passport)


/*Adds the react production build to serve react requests*/
app.use(express.static(path.join(__dirname, '../client/build')));

/*React root*/
app.get('*', (req, res) => { res.sendFile(path.join(__dirname + '../client/build/index.html')); });

app.use('/users',users)


const port=process.env.port || 5000;

app.listen(port,() =>{
    console.log(`Running on ${port}`);
    
})