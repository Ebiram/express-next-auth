const createError = require('http-errors')
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')
require('./database')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.DATABASE_URI }),
  ttl: 14 * 24 * 60 * 60,
  autoRemove: 'native'
}))
app.use(passport.initialize())
app.use(passport.session())
require('./controllers/auth/passport')

// api routes
app.use('/api', require('./routes/api'))

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
