/** @format */

import {
    createUser,
    updateUser,
    deleteUser,
    getOneUser,
    getAllUsers,
} from "../controllers/users.controllers.js";
import { verifyToken, verifyUsers, verifyAdmin } from "../utils/verifyUser.js";
import router from "./auths.route.js";


// CREATING
router.post("/", verifyAdmin, createUser);
// UPDATING
router.put("/:id", verifyUsers, updateUser);
// DELETING
router.delete("/:id", verifyUsers, deleteUser);
// GETTING SPECIFIC HOTELS
router.get("/:id", verifyAdmin, getOneUser);
// GETTING ALL THE HOTELS
router.get("/", verifyAdmin, getAllUsers);

export default router;