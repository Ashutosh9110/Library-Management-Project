const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { syncDB } = require('./models');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', bookRoutes);

syncDB({alter: true}).then(() => {
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
});
