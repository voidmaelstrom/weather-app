const express = require('express');
const Location = require('../models/Location');
const router = express.Router();

// GET /locations (stored)
router.get('/', async (req, res) => {
  const locations = await Location.find();
  try {
      return res.status(200).json(locations)
  } catch (error) {
      return res.status(500).json({message: "Couldn't retrieve locations"});
  }
});

// GET /location/:id (single location)
router.get('/location/:id', async (req,res) => {
  const { id } = req.params;
  const singleLocation = await Location.findById(id);
  try {
      return res.status(200).json(singleLocation);
  } catch (error) {
      return res.status(500).json({message: "Couldn't retrieve the location"})
  }
})

// POST /location
router.post("/location", async (req, res) => {
  const locationToCreate = await Location.create(req.body);
  try {
      return res.status(201).json(locationToCreate);
  } catch (error) {
      return res.status(500).json({message: "Couldn't create book"});
  }
})

// DELETE /location/:id
router.delete("/location/:id", async (req, res) => {
  const { id } = req.params;
  const locationToDelete = await Location.findByIdAndDelete(id)
  try {
      return res.status(203).json({message: "Successfuly deleted the location"})
  } catch (error) {
      return res.status(500).json({message: "Couldn't delete the location"})        
  }
})

module.exports = router;