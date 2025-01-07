import express from "express"

const router = express.Router()

router.get("/auth", (req, res) => {
    res.send("<h2>Hello from auth</h2>")
})



export default router