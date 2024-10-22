const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoutes = require("./routes/product.route");
require("dotenv").config();

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  return res.send("Hello from node api");
});

mongoose
  .connect(process.env.MONGODB_ONLINE)
  .then(() => {
    console.log("Database Connected...");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed..");
  });
