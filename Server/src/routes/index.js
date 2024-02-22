const express = require("express");
const router = express.Router();

const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const {
  postFavorites,
  deleteFavorites,
} = require("../controllers/handleFavorites");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFavorites);
router.delete("/fav/:id", deleteFavorites);

module.exports = router;
