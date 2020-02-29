const express = require('express');
const router = express.Router();

// location model
const Location = require('../../models/Location');

// @route GET api/locations
// @desc Get all locations
// @access Public
router.get('/', (req, res) => {
  Location.find()
    .sort({ longitude: -1 })
    .then(locations => res.json(locations))
    .catch();
});

// @route POST api/locations
// @desc Post a new location
// @access Public
router.post('/', (req, res) => {
  const newLocation = new Location({
    longitude: req.body.longitude,
    latitude: req.body.latitude
  });

  newLocation.save()
    .then(location => res.json(location))
    .catch();
});

// @route DELETE api/locations/:id
// @desc Delet a location
// @access Public
router.delete('/:id', (req, res) => {
  Location.findById(req.params.id)
    .then(location => {
      location.remove()
        .then(() => res.json({deletion: true}))
      })
    .catch(error => res.status(404).json({deletion: false}));
});

module.exports = router;