const getTeam = require("../controllers/teamController")

const router = require(`express`).Router()

router.get("/", getTeam)

module.exports = router