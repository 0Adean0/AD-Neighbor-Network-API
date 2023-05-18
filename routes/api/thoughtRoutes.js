const router = require("express").Router();
const{
    getAllThoughts,
    getOneThoughtId,
    generateNewThought,
    modifyThoughtId,
    deleteThoughtId,
    generateReaction,
} = require("../../controllers/thoughtController");

router
.route("/")
.get(getAllThoughts)
.post(generateNewThought)
.put(modifyThoughtId)
.delete(deleteThoughtId);
router
.route("/:thoughtId")
.get(getOneThoughtId);
router
.route("/:thoughtId/reaction")
.post(generateReaction)

module.exports = router;