const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/index.js");

const connect = async function () {
   try {
      await mongoose.connect(process.env.Mongoose_Connection_URL, {
         useNewUrlParser: true,
      });
   } catch (e) {
      throw new Error(e);
   }
};

app.use(express.json());
app.use(
   cors({
      origin: "*",
   })
);
app.use("/api/users", routes.UserRouter);
app.use("/api/auth", routes.AdminRouter);

app.listen(process.env.PORT || 80, connect);
