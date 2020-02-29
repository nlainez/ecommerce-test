const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const locations = require('./routes/api/locations');

// DB config
const db = require('./config/keys.js').mongoURI;

const app = express();

// Bodyarser middleware
app.use(bodyParser.json());

// connection to mongodb
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/locations', locations);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});