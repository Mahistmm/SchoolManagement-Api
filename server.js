const expresss = require("express");
const ConnectedDB = require("./config/dp");
const api = require("./routes/index");
const app = expresss();
ConnectedDB();

app.use(expresss.json());
app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Students Mentor Api");
});

app.listen(process.env.PORT || 4000, (req, res) => {
  console.log("server is up and running");
});
