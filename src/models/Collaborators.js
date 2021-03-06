const mongoose = require('mongoose');

const CollaboratorsSchema = new mongoose.Schema({
  isAdmin: {
    type: Boolean,
    default: false
  },
  company: {
    type: String,
    required: true
  },
  
  points: {
    type: [
      {
        pointNumber: {
          type: Number,
          required: true
        },
        collaboratorName: {
          type: String,
          required: true
        },
        collaboratorId: {
          type: String,
          required: true
        },
        type: {
          type: String,
          required: true
        },
        hours: {
          type: String,
          required: true
        },
        date: {
          type: Date,
          required: true
        },
      }
    ],
    default: []
  },

  cpf: {
    type: String,
    required: true
  },
  
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: false,
    select: false
  },

  passwordResetToken: {
    type: String,
    select: false
  },

  passwordResetExpires: {
    type: Date,
    select: false
  },

  address: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('collaborators', CollaboratorsSchema);