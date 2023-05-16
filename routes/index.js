const router = require("express").Router()
const thoughtRoutes = require("./api/thoughtRoutes")
const userRoutes = require("./api/userRoutes");

router.use("/thought", thoughtRoutes)
router.use("/user",userRoutes);

module.exports = router
