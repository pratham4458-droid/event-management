const express = require('express');
const router = express.Router();
const {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventController');
const { protect } = require('../middleware/auth');

// Routes
router.route('/').get(getAllEvents).post(protect, createEvent);
router
  .route('/:id')
  .put(protect, updateEvent)
  .delete(protect, deleteEvent);

module.exports = router;