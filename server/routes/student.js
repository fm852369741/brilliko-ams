const { default: studentController } = require("../controller/studentController");
const studentModel = require("../models/studentModel");
const router = require("express").Router();

router.post('/add', (req, res) => {
   studentController.add(req, res);
});

router.get("/get", async function (req, res) {
   try {
      const students = await studentModel.find();
      res.json(students)
   } catch (e) {
      console.log(e);
   }
});

router.post("/update/:id", async function (req, res) {
   try {
      await studentModel.findOneAndUpdate(
         { _id: req.params.id },
         req.body,
         { upsert: true },
         function (err, doc) {
            return res.send(`Changes made to id: ${req.params.id}`);
         }
      );

      res.json(`Update Made to id: ${req.params.id}`);
   } catch (e) {
      console.log(e);
   }
});

router.post("/delete/:id", async function (req, res) {
   try {
      await studentModel.remove({ _id: req.params.id });
      res.json(`User Removed with id: ${req.params.id}`);
   } catch (e) {
      console.log(e);
   }
});

module.exports = router;
