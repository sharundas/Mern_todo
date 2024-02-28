// usernaem: merntodo1234
// 7v87nI0BdgykWNVt
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import todoRouter from "./route/TodoRoute.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

mongoose
  .connect(process.env.MONGO_DB, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/todo", todoRouter);
