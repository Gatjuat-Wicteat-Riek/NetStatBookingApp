import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { MongoDB } from "./config.js";
import userAuth from "./routes/auths.route.js";
import userRoute from "./routes/users.route.js";
import hostelRoute from "./routes/hotels.route.js";
import roomRoute from "./routes/rooms.route.js";

dotenv.config();

const app = express();

// Port configuration
const port = process.env.PORT || 7000;

mongoose
    .connect(MongoDB)
    .then(() => {
        console.log("Connected successfully to Database.");
        app.listen(port, () => {
            console.log("App is running on port:", port);
        });
    })
    .catch((err) => {
        console.log("Connection failed.", err);
    });



// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse cookies

// Routes
app.use("/api/hotels", hostelRoute);
app.use("/api/auth", userAuth);
app.use("/api/users", userRoute);
app.use("/api/rooms", roomRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Internal Server error!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

// // Start the server
// app.listen(port, () => {
//     connect();
//     console.log("Connected to backend.");
// });