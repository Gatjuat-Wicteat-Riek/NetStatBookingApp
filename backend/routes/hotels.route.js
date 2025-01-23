import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getOneHotel,
  updateHotel,
  countByCity,
  countByType
} from "../controllers/hotels.controllers.js";
import { verifyToken, verifyUsers, verifyAdmin } from "../utils/verifyUser.js";

const router = express.Router();

// CREATING
router.post("/", verifyAdmin, createHotel);
// UPDATING
router.put("/:id", verifyAdmin, updateHotel);
// DELETING
router.delete("/:id", verifyAdmin, deleteHotel);
// GETTING SPECIFIC HOTELS
router.get("/find/:id", getOneHotel);
// GETTING ALL THE HOTELS
router.get("/", getAllHotels);
// count By City name
router.get("/countByCity", countByCity);
// count by type of the hotel
router.get("/countByType", countByType);

export default router;
