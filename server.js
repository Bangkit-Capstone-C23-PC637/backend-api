const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../backend-api/routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(5000, () => {
  console.log('Server berjalan pada port 5000');
});
