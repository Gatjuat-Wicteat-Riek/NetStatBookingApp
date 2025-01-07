import express from "express"
import { MongoDB, PORT } from "../backend/config.js"
import mongoose from "mongoose"
import { MongoOperationTimeoutError } from "mongodb";
const app = express()



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