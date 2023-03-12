const router = require("express").Router();
const Students = require("../models/Students");
const Teachers = require("../models/Teachers");
const Class = require("../models/Class");

router.get("/", (req, res) => {
  res.send("Students router is working");
});

router.post("/add", async (req, res) => {
  try {
    const StudentsData = await Students.create(req.body);
    const ClassData = await Class.findOneAndUpdate(
      req.body.classroom,
      {
        $push: { Students: StudentsData._id },
      },
      { new: true }
    );
    res.json({ ClassRoom: ClassData, Students: StudentsData });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all", async (req, res) => {
  const AllStudents = await Students.find()
    .populate("teachers", "name experience")
    .populate("classroom", "name")
    .select("name");
  res.send(AllStudents);
});

module.exports = router;
