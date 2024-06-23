const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const movieroutes = require('./routes/movieroutes');
const genreroutes = require('./routes/genreroutes');
const peoplerouotes=require('./routes/peopleroutes');

// Use routes
app.use('/movies', movieroutes);
app.use('/generes', genreroutes);
app.use('/peoples',peoplerouotes)

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port 3000`);
});

main().then(()=> console.log("connected")).catch(err => console.log(err));

async function main() {
  //await mongoose.connect('mongodb+srv://soorajksss136:CPswOgTjMfW3zk9p@showtan.asfh8on.mongodb.net/?retryWrites=true&w=majority&appName=showtan');
  await mongoose.connect('mongodb+srv://soorajksss136:CPswOgTjMfW3zk9p@showtan.asfh8on.mongodb.net/?retryWrites=true&w=majority&appName=showtan');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}