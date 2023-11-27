const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//variables de entorno
dotenv.config();

// Puerto
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'RedSocial', 
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(router);
app.listen(PORT, async () => {
   console.log(`server up on port ${PORT}`);
 });