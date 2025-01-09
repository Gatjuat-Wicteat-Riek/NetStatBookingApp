/** @format */

import {
    createUser,
    updateUser,
    deleteUser,
    getOneUser,
    getAllUsers,
} from "../controllers/users.controllers.js";
import { verifyToken, verifyUsers } from "../utils/verifyUser.js";
import router from "./auths.route.js";

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello from authenticated part");
});
router.get("/checkuser/:id", verifyUsers, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete your account")
})

// CREATING
router.post("/", createUser);
// UPDATING
router.put("/:id", updateUser);
// DELETING
router.delete("/:id", deleteUser);
// GETTING SPECIFIC HOTELS
router.get("/:id", getOneUser);
// GETTING ALL THE HOTELS
router.get("/", getAllUsers);

export default router;