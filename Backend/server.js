import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// import { sign } from "jsonwebtoken";
import authRoutes from "./routes/authroutes.js";
import messageRoutes from "./routes/messageroutes.js";
// import userRoutes from "./routes/userroutes.js";
import userRoutes from "./routes/userroutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); // to parse the incoming request with JSON payloads(from req.body)
app.use(cookieParser());
// app.get("/", (req, res) => {
//   //root route https://localhost:5000/
//   res.send("hello World !!!!");
// });

// app.get("/api/auth/sighup", (req, res) => {
//   console.log("signup route");
// });

// app.get("/api/auth/login", (req, res) => {
//   console.log("login route");
// });

// app.get("/api/auth/logout", (req, res) => {
//   console.log("logout route");
// });
//insteade using all this we use

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
