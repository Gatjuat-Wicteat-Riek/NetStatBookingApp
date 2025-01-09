import express from "express"
import {
    createHotel,
    deleteHotel,
    getAllHotels,
    getOneHotel,
    updateHotel
} from "../controllers/hotels.controllers.js"
import { verifyToken, verifyUsers, verifyAdmin } from "../utils/verifyUser.js"

const router = express.Router()

// CREATING
router.post("/", verifyAdmin, createHotel)
    // UPDATING 
router.put("/:id", verifyAdmin, updateHotel)
    // DELETING 
router.delete("/:id", verifyAdmin, deleteHotel)
    // GETTING SPECIFIC HOTELS
router.get("/:id", getOneHotel)
    // GETTING ALL THE HOTELS
router.get("/", getAllHotels)


export default router