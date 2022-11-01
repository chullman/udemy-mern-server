import express from "express";
// controllers
import { currentUser, privateRoute } from "../controllers/auth";
// middlewares
import { findOrCreateUser } from "../middlewares";

const router = express.Router();

router.post("/current-user", findOrCreateUser, currentUser);
router.get("/private-route", findOrCreateUser, privateRoute);

module.exports = router;
