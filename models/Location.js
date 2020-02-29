const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const LocationSchema = new Schema({
  longitude: {
    type: String,
    required: true
  },
  latitude: {
    type: String,
    required: true
  }
});

module.exports = Location = mongoose.model('Location', LocationSchema)