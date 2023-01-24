
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

require('express-async-errors')

require('dotenv').config()

const port = 3000 || process.env.PORT

// importing middlewares
const {
  allowFrontendMiddleware,
  errorHandlerMiddleware,
  notFoundMiddleware
} = require('./middlewares')

// importing Routers
const indexRouter = require('./routes/indexRouter');
const quotesRouter = require('./routes/quotesRouter');

// creating app
const app = express();

// maybe could use cors, idk
app.use(allowFrontendMiddleware);

if(process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // remember to put a key here

// applying routes
app.use('/', indexRouter);
app.use('/quotes', quotesRouter);

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app;
