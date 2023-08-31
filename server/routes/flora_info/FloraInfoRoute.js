const express = require("express");
const {
  createFloraInfo,
  updateFloraInfo,
  allFloraInfos,
  SearchFloraInfo,
  updateToArchive
} = require("../../controllers/flora_info/FloraInfoController");

const router = express.Router();

router.route("/create").post(createFloraInfo);
router.route("/update").put(updateFloraInfo);
router.route("/archive").put(updateToArchive);
router.route("/").get(allFloraInfos);
router.route("/keyword").get(SearchFloraInfo);

module.exports = router;
