import HotelsModal from "../modal/Hotels.modal.js"
// import { errorHandler } from "../utils/error.js"

// creating newHotel
export const createHotel = async(req, res, next) => {
    const newHotel = new HotelsModal(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        next(error)
    }
}


//updating hotels
export const updateHotel = async(req, res, next) => {
    try {
        const updatedHotel = await HotelsModal.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (error) {
        next(error)
    }
}


// deleting the hostels
export const deleteHotel = async(req, res, next) => {
    try {
        await HotelsModal.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been delete successfully")
    } catch (error) {
        next(error)
    }
}


// Getting one specific hotel
export const getOneHotel = async(req, res, next) => {
    try {
        const getHotel = await HotelsModal.findById(req.params.id)
        res.status(200).json(getHotel)
    } catch (error) {
        next(error)
    }
}

// Getting all the hostels
export const getAllHotels = async(req, res, next) => {
    try {
        const getAllHotel = await HotelsModal.find()
        res.status(200).json(getAllHotel)
    } catch (error) {
        next(error)
    }
}