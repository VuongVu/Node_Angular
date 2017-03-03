// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

// Get our API routes
const users = require('./server/routes/users');
const customers = require('./server/routes/customers');

// Set up the express app
const app = express();

// Log request to the console.
app.use(morgan('dev'));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Parser Cookie
app.use(cookieParser());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Enable CORS
app.use(cors());

// Set our api routes
app.use('/api/users', users);
app.use('/api/customers', customers);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// Production error handler no stack traces leaked to user
app.use( (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

// Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, () => {
  console.log(`API running on localhost: ${port}`);
  console.log('Press Ctrl+C to quit.');
});