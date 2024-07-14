const express = require('express')
const cors = require('cors')
const mongoose =require('mongoose');
const app = express()
const port = 3000


app.use(cors());
app.use(express.json());

const bookroutes = require('./routes/bookroutes')
const authroutes = require('./routes/authroutes')

app.use('/books',bookroutes);
app.use('/authors',authroutes)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

main().then(()=> console.log("connected")).catch(err => console.log(err));

async function main() {

  await mongoose.connect('mongodb+srv://soorajksss136:lqiKLlgRFyhox5jW@library.apwclo9.mongodb.net/?retryWrites=true&w=majority&appName=Library');
 
}
