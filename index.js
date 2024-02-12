const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 5000;
// const upload = multer({ dest: "uploads/" });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use to store data in file
const storage = multer.diskStorage({
  destination: function (res, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (res, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({storage})
app.get("/", (req, res) => {
  return res.render("homePage");
});

app.post("/uploads", upload.single("profileImg"), (req, res) => {
  //   return res.render("homePage");
  console.log(req.body);
  console.log(req.file);

  return res.redirect("/");
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
