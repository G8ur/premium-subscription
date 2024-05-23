import express from "express";
import authRoutes from "./routes/auth";
import mongoose from "mongoose";
import dotenv from "dotenv";

//for mac prefer npx or use npx compulsory
const app = express();
dotenv.config();
const port = 8080;
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("mongoconnected");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
  })
  .catch(() => {
    throw new Error();
  });
app.use("/auth", authRoutes);


