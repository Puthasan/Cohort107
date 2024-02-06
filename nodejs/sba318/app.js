const express = require('express');
const morgan = require('morgan');
const loggerMiddleware = require('./middleware/logger');
const authenticationMiddleware = require('./middleware/authentication');
const booksRouter = require('./routes/books');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(loggerMiddleware);
app.use(authenticationMiddleware);

// Routes
app.use('/books', booksRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Static files and views
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});