const studentModel = require("../models/studentModel.js");

module.exports = class {
   static async add(req, res) {
      const student = new studentModel({
         name: req.body.name,
         fatherName: req.body.fatherName,
         email: req.body.email,
         courseType: req.body.courseType,
         courses: req.body.courses.split(","),
         dateJoined: req.body.dateJoined,
         daysLeft: req.body.daysLeft,
      });

      try {
         const newStudent = await student.save();
         res.json(newStudent);
      } catch (e) {
         throw new Error(e);
      }
   }
}
