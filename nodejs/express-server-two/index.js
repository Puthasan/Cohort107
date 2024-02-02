const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const myMiddlewares = require('./middlewares/myMiddlewares');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

const app = express();
const PORT = 3000;


//* App Engine
app.engine('perscholas', (filePath, options, callback) => {
  //* read the template file
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    const rendered = content
      .toString()
      .replaceAll('#title#', `${options.title}`)
      .replaceAll('#content#', `${options.content}`)
      
    return callback(null, rendered);
  })
})



//* Config
app.set('views', './views'); //* sets the views for the app
app.set('view engine', 'perscholas'); //* sets the template engine for the app




//* Middleware
app.use(myMiddlewares);
app.use((req, res, next) => {
  console.log('Im a middleware!');
  next();
})
app.use(morgan('dev'));
app.use(express.static('./styles'));
app.use(express.static('./assets'));



//* Routes
app.use('/user', userRouter);
app.use('/product', productRouter);

app.get('/', (req, res) => {
  res.render('index', {title: 'Hello Engine!', content: 'I am an engine!'});
})  

app.get('/login', (req, res) => {
  res.send('Login Page');
})


app.get('/download', (req, res) => { 
  res.download('./assets/3magical-flex-words.png');
})




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})