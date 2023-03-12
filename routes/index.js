const router = require("express").Router();

const Class = require("./class");
const Students = require("./students");
const Teachers = require("./teachers");

router.use("/class", Class);
router.use("/students", Students);
router.use("/teachers", Teachers);

module.exports = router;
