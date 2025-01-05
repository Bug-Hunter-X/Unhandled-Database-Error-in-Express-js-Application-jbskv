const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This will cause an error if the database query fails
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      // Express will not handle this error properly
      throw err; 
    }
    res.send(results);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));