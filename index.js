const express = require('express')
const cors = require('cors')
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

