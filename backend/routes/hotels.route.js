import express from "express"
import HotelsModal from "../modal/Hotels.modal.js"
import {
    createHotel,
    deleteHotel,
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
router.get("/", async(req, res) => {

})


export default router