import express from "express"
import {
    createHotel,
    deleteHotel,
    getAllHotels,
    getOneHotel,
    updateHotel
} from "../controllers/hotels.controllers.js"

const router = express.Router()

// CREATING
router.post("/", createHotel)
    // UPDATING 
router.put("/:id", updateHotel)
    // DELETING 
router.delete("/:id", deleteHotel)
    // GETTING SPECIFIC HOTELS
router.get("/:id", getOneHotel)
    // GETTING ALL THE HOTELS
router.get("/", getAllHotels)


export default router