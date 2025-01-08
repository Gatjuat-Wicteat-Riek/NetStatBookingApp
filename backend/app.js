import express from "express"
import mongoose from "mongoose"
import { MongoDB, PORT } from "../backend/config.js"
// import userAuth from "./routes/auths.route.js"
// import userRoute from "./routes/users.route.js"
import hostelRoute from "./routes/hotels.route.js"
// import roomRoute from "./routes/rooms.route.js"


// connection to the database
mongoose
    .connect(MongoDB)
    .then(() => {
        console.log("Connection successfully.");
        app.listen(PORT, () => {
            console.log("App is running on port:", PORT);
        });
    })
    .catch((err) => {
        console.log("Connection failed.", err);
    });


mongoose.connection.on("Disconnected", () => {
    console.log("Database Disconnected")
})

mongoose.connection.on("Connected", () => {
    console.log("Database Connected")
})


const app = express()
app.use(express.json())


// middleware here
// app.use("/api/auth", userAuth)
// app.use("/api/users", userRoute)
app.use("/api/hotels", hostelRoute)
    // app.use("/api/rooms", roomRoute)


// Error handling here 
app.use((err, req, res, next) => {
    // Error-handling middleware
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: message,
        stack: err.stack
    });
});