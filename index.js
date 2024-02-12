const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 5000;
const upload = multer({ dest: "uploads/" });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.render("homePage");
});

app.post("/uploads", upload.single("profileImg"), (req, res) => {
  //   return res.render("homePage");
  console.log(req.body);
  console.log(req.body);

  return res.redirect('/')
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
