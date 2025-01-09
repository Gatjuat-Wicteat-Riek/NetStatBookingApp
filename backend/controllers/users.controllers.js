import usersModal from "../modal/users.modal.js"
// import { errorHandler } from "../utils/error.js"

// creating newUser
export const createUser = async(req, res, next) => {
    const newUser = new usersModal(req.body)
    try {
        const saveUser = await newUser.save()
        res.status(200).json(saveUser)
    } catch (error) {
        next(error)
    }
}


//updating users
export const updateUser = async(req, res, next) => {
    try {
        const updatedUser = await usersModal.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}


// deleting the users
export const deleteUser = async(req, res, next) => {
    try {
        await usersModal.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been delete successfully")
    } catch (error) {
        next(error)
    }
}


// Getting one specific user
export const getOneUser = async(req, res, next) => {
    try {
        const getUser = await usersModal.findById(req.params.id)
        res.status(200).json(getUser)
    } catch (error) {
        next(error)
    }
}

// Getting all the users
export const getAllUsers = async(req, res, next) => {
    try {
        const getAllRegisteredUsers = await usersModal.find()
        res.status(200).json(getAllRegisteredUsers)
    } catch (error) {
        next(error)
    }
}