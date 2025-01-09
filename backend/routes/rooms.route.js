/** @format */

import express from "express";
import { verifyAdmin } from "../utils/verifyUser.js";
import {
    createRoom,
    updateRoomAvailability,
    updateRoom,
    deleteRoom,
    getOneRoom,
    getAllRooms,
} from "../controllers/rooms.controllers.js";

const router = express.Router();
//CREATING
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATING
router.put("/availability/:id", updateRoomAvailability);

router.put("/:id", verifyAdmin, updateRoom);

//DELETING
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GETTING ONE ROOM ONLY

router.get("/:id", getOneRoom);
//GET ALL ROOMS

router.get("/", getAllRooms);

export default router;