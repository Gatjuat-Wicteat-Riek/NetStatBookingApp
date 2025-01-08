import express from "express"
import HotelsModal from "../modal/Hotels.modal.js"

const router = express.Router()

// CREATING
router.post("/", async(req, res) => {
        const newHotel = new HotelsModal(req.body)
        try {
            const saveHotel = await newHotel.save()
            res.status(200).json(saveHotel)
        } catch (error) {
            res.status(500).json(error)
        }
    })
    // UPDATING 
router.put("/:id", async(req, res) => {
    try {
        const updateHotel = await HotelsModal.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETING 
router.delete("/:id", async(req, res) => {
    try {
        await HotelsModal.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been delete successfully")
    } catch (error) {
        res.status(500).json(error)
    }
})

// GETTING SPECIFIC HOTELS
router.get("/:id", async(req, res) => {
    try {
        const getHotel = await HotelsModal.findById(req.params.id)
        res.status(200).json(getHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GETTING ALL THE HOTELS
router.get("/", async(req, res) => {
    try {
        const getAllHotel = await HotelsModal.find()
        res.status(200).json(getAllHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})


export default router