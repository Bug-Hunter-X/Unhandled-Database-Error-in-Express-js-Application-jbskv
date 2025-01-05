const express = require('express');
const app = express();
const db = require('./db'); // Assume this handles database connection

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      //This error will be handled by the error handling middleware
      return next(err);
    }
    res.send(results);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));