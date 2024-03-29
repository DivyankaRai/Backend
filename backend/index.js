const express = require("express");
// import MongoClient from 'mongodb';
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const productRoute = require("./routes/products");
const cartRoutes = require("./routes/carts");
const orderRoute = require("./routes/orders");
const dotenv = require("dotenv");
// const navbarRoutes = require("./routes/navbar");
dotenv.config();

const app = express();
const PORT = 5000;

/* MONGODB CONNECT */
mongoose.set("strictQuery", false);

const mongoUrl = 'mongodb://divii:1221@ac-vcz3qhc-shard-00-00.1kukhan.mongodb.net:27017,ac-vcz3qhc-shard-00-01.1kukhan.mongodb.net:27017,ac-vcz3qhc-shard-00-02.1kukhan.mongodb.net:27017/?ssl=true&replicaSet=atlas-2dks9z-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(mongoUrl, { useUnifiedTopology: true }).then(() => {
    console.log('success');
}).catch(e => {
    console.error(e);
    process.exit(1);
});

/* BASIC */
app.use(express.json());
app.use(cors());

/* WELCOME */
app.get("/", (req, res) => {
  res.send("Backend running sucessfully");
});

/* ROUTES */
app.use("/users", userRoutes);
app.use("/products", productRoute);
app.use("/carts", cartRoutes);
app.use("/orders", orderRoute);
// app.use("/navbars", navbarRoutes);

/* LISTENING */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
