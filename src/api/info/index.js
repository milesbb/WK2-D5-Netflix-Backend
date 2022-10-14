import express from "express";

const infoRouter = express.Router();

infoRouter.get("/docs", (req, res, next) => {
    try {
        res.redirect("https://documenter.getpostman.com/view/23029748/2s8479ybha")
    } catch (error) {
        next(error)
    }
})

export default infoRouter