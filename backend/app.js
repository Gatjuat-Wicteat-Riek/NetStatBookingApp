import express from "express"
import mongoose from "mongoose"
import { MongoDB, PORT } from "../backend/config.js"
import userAuth from "./routes/auths.route.js"
import userRoute from "./routes/users.route.js"
import hostelRoute from "./routes/hostels.route.js"
import roomRoute from "./routes/rooms.route.js"



const app = express()
app.use(express.json())


// middleware here
app.use("/api/auth", userAuth)
app.use("/api/users", userRoute)
app.use("/api/hostels", hostelRoute)
app.use("/api/rooms", roomRoute)






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