const router = require("express").Router();
const{
    getAllUsers,
    getOneUserId,
    generateUser,
    modifyUserId,
    deleteUserId,
    generateNeighbor,
    deleteNeighbor
} = require("../../controllers/userController");

router
.route("/")
.get(getAllUsers)
.post(generateUser);
router
.route('/:userId')
.get(getOneUserId)
.put(modifyUserId)
.delete(deleteUserId);
router
.route("/:userId/neighbor/:neighborId")
.post(generateNeighbor)

module.exports = router
