const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 32,
   }, 
   fatherName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 32
   },
   email: {
      type: String,
      required: true,
      minlength: 7,
      maxlength: 64
   },
   courseType: {
      type: String,
      required: true,
   },
   courses: {
      type: Array,
      required: true,
   },
   dateJoined: {
      type: String,
      required: true,
   },
   daysLeft: {
      type: String,
      required: true,
   }
});

module.exports = mongoose.model('student', studentSchema);