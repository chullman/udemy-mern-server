import admin from "../firebase";
import User from "../models/user";

export const currentUser = async (req, res) => {
  console.log("CURRENT USER RETURNING FROM req.currentUser", req.currentUser);
  res.json(req.currentUser);
};

export const privateRoute = async (req, res) => {
  console.log("REQ HEADERS TOKEN IN PRIVATE ROUTE", req.headers.token);
  if (req.currentUser) {
    res.json({
      ok: true,
    });
  } else {
    res.json({
      ok: false,
    });
  }
};
