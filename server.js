import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";
const morgan = require("morgan");

require("dotenv").config();

// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log(`DB Connected`))
  .catch((err) => console.log("DB connection error ", err));

// middlewares
app.use(cors()); // enable cors to allow any origin access by default
app.use(morgan("dev"));

// routes middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// routes

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
