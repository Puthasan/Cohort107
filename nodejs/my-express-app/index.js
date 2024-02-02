const express = require('express');
const app = express();
const PORT = 3000;
const userRouter = require('./routes/user');

//* middleware function
const morgan = require('morgan');
app.use(morgan('combined'))


app.use('/user', userRouter);

app.get('/', (req, res) => {
  console.log(req.url)

  res.send('Main Route')
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})