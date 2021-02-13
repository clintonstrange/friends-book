const router = require("express").Router();
const {
  getAllThoughts,
  getOneThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughts-controller");

//api/thoughts
router.route("/").get(getAllThoughts).post(addThought)

// /api/thoughts/<thoughtId>
router.route("/:thoughtId").get(getOneThoughtById);

// /api/thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId").put(updateThought).delete(removeThought);

// /api/thoughts/<thoughtId>/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/<thoughtId>/reactions/<reactionId>
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;