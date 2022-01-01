const router = require("express").Router();
const jsonwebtoken = require("jsonwebtoken");
const adminModel = require("../models/adminModel.js");

router.post("/login", (req, res) => {
   adminModel.find(req.body, function (err, record) {
      if (err) console.error(err);
      else {
         const admin = record[0];

         if (admin) {
            const token = jsonwebtoken.sign(
               { name: admin.name, email: admin.email },
               "0007ddaf52dc1c36cc90303f64762848757ec2d73ef7e18d825bb1d7fa767f57"
            );

            res.json({
               status: true,
               name: admin.name,
               email: admin.email,
               token: token,
               isAdmin: true,
            });
         } else {
            res.json({
               status: false,
            });
         }
      }
   });
});

module.exports = router;
