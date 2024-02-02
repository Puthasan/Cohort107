const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(express.static("./styles"));


// RESTful routes
app.get('/', (req, res) => {
  res.render('index', {title: 'Hello EJS', content: 'I am an engine!'});
})  

app.post('/api/data', (req, res) => {
  res.json({ message: 'Hello, this is your RESTful API!' });
});



// Middleware 
app.use(morgan('dev'));


const myMiddleware = (req, res, next) => {
  console.log('Middleware is executed!');
  next();
};

app.use(myMiddleware);

// integrated middleware with RESTful routes
app.get('/api/data', myMiddleware, (req, res) => {
  res.json({ message: 'Hello, this is your RESTful API!' });
});


app.set('view engine', 'ejs');

app.get('/view', (req, res) => {
  res.render('index', { title: 'My Express App' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});