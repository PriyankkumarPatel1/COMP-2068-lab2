const mongoose = require('mongoose');

// Our Schema
const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['released', 'upcoming'],
    default: 'released'
  }
}, {
  timestamps: true
});

// Query Helper
MovieSchema.query.released = function () {
  return this.where({
    status: 'released'
  });
};

MovieSchema.query.upcoming = function () {
  return this.where({
    status: 'upcoming'
  });
};

module.exports = mongoose.model('Movie', MovieSchema);