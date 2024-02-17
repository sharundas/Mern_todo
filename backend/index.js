// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";

// dotenv.config();

// app.use(bodyParser.json());

// const mongoURI = "Your_MongoDB_Atlas_Connection_String";
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

// usernaem: merntodo1234
// 7v87nI0BdgykWNVt


import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

