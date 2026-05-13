const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add an event title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    date: {
      type: Date,
      required: [true, 'Please add an event date'],
    },
    time: {
      type: String,
      required: [true, 'Please add an event time'],
    },
    venue: {
      type: String,
      required: [true, 'Please add a venue'],
    },
    category: {
      type: String,
      required: [true, 'Please specify a category'],
    },
    organizer: {
      type: String,
      required: [true, 'Please specify the organizer'],
    },
    imageUrl: {
      type: String,
      default: '', // Image URL for event
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;