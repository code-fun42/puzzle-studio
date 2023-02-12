const express = require("express");
const path = require("path");
const cors = require("cors");
const formidable = require("formidable");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.text());

// app.use(express.urlencoded({ extended: true }));

const pathSrc = path.resolve(__dirname + "/../dist/");

app.use("/", express.static(pathSrc));

const PORT = 8000;

const pathHtml = path.resolve(__dirname + "/../dist/index.html");
console.log(pathHtml);

app.get("/", function (req, res) {
  res.sendFile(pathHtml);
});

app.get("/test", function (req, res) {
  res.send("test");
});

app.post("/form", function (req, res, next) {
  // console.log(req.header);
  // console.log(req.headers);

  const form = formidable({ multiples: true });

  form.parse(req, (err, fields) => {
    if (err) {
      next(err);
      return;
    }
    console.log("поля: ", fields);
    res.json({ fields });
  });

  // res.send('ok')
});

app.listen(PORT, () => {
  console.log(`Application listening on http://localhost:${PORT} !`);
});
