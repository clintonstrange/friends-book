const router = require("express").Router();
const {
  getAllThoughts,
  getOneThoughtById,
  getAllUserThoughtsById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughts-controller");

// /api/thgouhts
router.route("/").get(getAllThoughts);

// /api/thoughts/:<userId>
router.route("/:userId").post(addThought).get(getAllUserThoughtsById);

// /api/thoughts/:<thoughtId>
router.route("/:thoughtId").get(getOneThoughtById);

// / api/thoughts/:<userId>/:<thoughtId>
router.route("/:userId/:thoughtId").put(updateThought).delete(removeThought);

// /api/thoughts/<thoughtId>/reactions
router.route("/:thoughtId/reactions").put(addReaction);

// /api/thoughts/<thoughtId>/reactions/<reactionId>
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
