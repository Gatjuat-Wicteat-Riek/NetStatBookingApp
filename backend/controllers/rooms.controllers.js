import { errorHandler } from "../utils/error.js";
import RoomsModal from "../modal/Rooms.modal.js";
import HotelsModal from "../modal/Hotels.modal.js";

export const createRoom = async(req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new RoomsModal(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await HotelsModal.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
};
// updating the rooms
export const updateRoom = async(req, res, next) => {
    try {
        const updatedRoom = await RoomsModal.findByIdAndUpdate(
            req.params.id, { $set: req.body }, { new: true }
        );
        res.status(200).json(updatedRoom);
    } catch (err) {
        next(err);
    }
};

// updating the rooms
export const updateRoomAvailability = async(req, res, next) => {
    try {
        await RoomsModal.updateOne({ "roomNumbers._id": req.params.id }, {
            $push: {
                "roomNumbers.$.unavailableDates": req.body.dates
            },
        });
        res.status(200).json("Room status has been updated.");
    } catch (err) {
        next(err);
    }
};

// Deleting room by specific id
export const deleteRoom = async(req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        await RoomsModal.findByIdAndDelete(req.params.id);
        try {
            await HotelsModal.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json("Room has been deleted.");
    } catch (err) {
        next(err);
    }
};

// Getting one rooms only
export const getOneRoom = async(req, res, next) => {
    try {
        const room = await RoomsModal.findById(req.params.id);
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
};

// Getting all the rooms
export const getAllRooms = async(req, res, next) => {
    try {
        const rooms = await RoomsModal.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
};