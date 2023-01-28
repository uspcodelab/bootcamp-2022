
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
const warningClassesRouter = require('./routes/warningClassesRouter');
const machinesRouter = require('./routes/machinesRouter')
const usersRouter = require('./routes/usersRouter')
const authRouter = require('./routes/authRouter')

// creating app
const app = express();

// maybe could use cors, idk
app.use(allowFrontendMiddleware);

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET)); // cookies are sent to req.signedCookies

// applying routes
app.use('/', indexRouter);
app.use('/quote', quotesRouter);
app.use('/warning-class', warningClassesRouter);
app.use('/machine', machinesRouter)
app.use('/user', usersRouter)
app.use('/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app;
