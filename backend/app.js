import express from "express"
import { MongoDB, PORT } from "../backend/config.js"
import mongoose from "mongoose"
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