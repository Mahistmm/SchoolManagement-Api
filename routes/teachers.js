const router = require("express").Router();

const Class = require("../models/Class");
const Teachers = require("../models/Teachers");

router.get("/", (req, res) => {
  res.send("Teachers router is working ");
});

router.post("/add", async (req, res) => {
  try {
    const TeachersData = await Teachers.create(req.body);
    const ClassData = await Class.findOneAndUpdate(
      req.body.classroom,
      {
        $push: { Teachers: TeachersData._id },
      },
      { new: true }
    );
    res.json({ ClassRoom: ClassData, Teachers: TeachersData });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all", async (req, res) => {
  const AllTeachers = await Teachers.find();
  res.send(AllTeachers);
});

router.post("/add", async (req, res) => {});

module.exports = router;
