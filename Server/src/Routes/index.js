const { login } = require("../Controllers/login")
const { getChardById } = require("../Controllers/getChardByld")
const { postFav, deleteFav } = require("../Controllers/handleFavorites")

const router = require("express").Router()

router.get("/character/:id", (req, res) => {
    getChardById(req, res)
})

router.get("/login", login)

router.post("/fav", (req, res) => {
    postFav(req, res)
})

router.delete("/fav/:id", (req, res) => {
    deleteFav(req, res)
})

module.exports = router
