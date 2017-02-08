// Import PostgreSQL
const pg = require('pg');

// Database configuration
const config = {
  host: 'localhost',
  port: 5432,
  database: 'nengajoukanri',
  user: 'postgres',
  password: '123'
};

// Create client connection
const client = new pg.Client(config);  

// Connect database
client.connect();

// Catch error on PostgreSQL
client.on('error', (err) => {
  console.log(err);
});

// Catch non-critical events happen
client.on('notice', (msg) => {
  console.log('Notice: $j', msg);
});

/*
const query = client.query({
  text: 'SELECT * from users where id = $1 and username = $2',
  values: ['1', 'vuongvu']
}, (err, result) => {
  if (err) return onError(err);
  console.log(result.rows[0].username + ' ' + result.rows[0].password);
});
*/


// Test query 
const query = client.query({
  text: 'SELECT * from users where id IN ($1, $2, $3)',
  values: ['1', '2', '3']
});

query.on('row', (row) => {
  console.log('user %s have %s is password', row.username, row.password);
});

// disconnect client when all queries are finished     
client.on('drain', client.end.bind(client));  