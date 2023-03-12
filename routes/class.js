const router = require("express").Router();
const Class = require("../models/Class");

router.get("/", (req, res) => {
  res.send("Class  router is working ");
});

router.post("/add", async (req, res) => {
  const Classroom = await Class.create(req.body);
  res.json(Classroom);
});

router.get("/all", async (req, res) => {
  const AllClass = await Class.find()
    .populate("Students", "name Enrollment_Date")
    .populate("Teachers", "name experience");
  res.send(AllClass);
});

module.exports = router;
