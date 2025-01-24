import HotelsModal from "../modal/Hotels.modal.js";
// import { errorHandler } from "../utils/error.js"

// creating newHotel
export const createHotel = async (req, res, next) => {
  const newHotel = new HotelsModal(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    next(error);
  }
};

//updating hotels
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await HotelsModal.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

// deleting the hostels
export const deleteHotel = async (req, res, next) => {
  try {
    await HotelsModal.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been delete successfully");
  } catch (error) {
    next(error);
  }
};

// Getting one specific hotel
export const getOneHotel = async (req, res, next) => {
  try {
    const getHotel = await HotelsModal.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (error) {
    next(error);
  }
};

// Getting all the hostels
export const getAllHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const getHotels = await HotelsModal.find({
      ...others,
      cheapPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit || 10);
    res.status(200).json(getHotels);
  } catch (err) {
    next(err);
  }
};



// countingByTheCity Name
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(cities.map(city=>{
      return HotelsModal.countDocuments({city: city})

    }))
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

// countingByType
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await HotelsModal.countDocuments({ type: "hotel" });
    const apartmentCount = await HotelsModal.countDocuments({ type: "apartment" });
    const resortCount = await HotelsModal.countDocuments({ type: "resort" });
    const villaCount = await HotelsModal.countDocuments({ type: "villa" });
    const cabinCount = await HotelsModal.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};
