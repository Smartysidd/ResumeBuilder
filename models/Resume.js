// backend/models/Resume.js
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: String,
  location: String,
  skills: String,
  hobbies: String,
  achievements: String,
  certifications: String,

  template: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    styles: {
      fontFamily: { type: String, required: true },
      color: { type: String, required: true },
      backgroundColor: { type: String, required: true },
      borderColor: { type: String, required: true },
      headerColor: { type: String, required: true },
    },
    content: {
      header: { type: String, required: true },
      sections: { type: [String], required: true }
    }
  }
}
);

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
