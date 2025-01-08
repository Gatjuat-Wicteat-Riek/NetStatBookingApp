import usersModal from "../modal/users.modal.js"
import { errorHandler } from "../utils/error.js"
import bcrypt from "bcryptjs"


// register user to the 
export const registerUser = async(req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(req.body.password, salt)
        const newUser = new usersModal({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword

        })
        await newUser.save()
        res.status(200).json("User has been created successfully")

    } catch (error) {
        next(error)

    }
}

//user Login
export const loginUser = async(req, res, next) => {
    try {
        const user = await usersModal.findOne({ username: req.body.username })
        if (!user) return next(errorHandler(404, "Please user not found!"))
        const isPasswordSame = await bcrypt.compareSync(req.body.password, user.password)
        if (!isPasswordSame) return next(errorHandler(400, "Wrong information"))
        const { password, isAdmin, ...rest } = user._doc
        res.status(200).json({...rest })
    } catch (error) {
        next(error)
    }
}