const express: any = require("express");
const path: any = require("path");
const cors: any = require("cors");
const formidable: any = require("formidable");

const app: any = express();

app.use(cors());

app.use(express.json());
app.use(express.text());

const pathSrc: String = path.resolve(__dirname + "/../client/dist/");

app.use("/", express.static(pathSrc));

const PORT = 8000;

const pathHtml: String = path.resolve(__dirname + "/../client/dist/index.html");
console.log(pathHtml);

app.get("/", function (req: any, res: any) {
  res.sendFile(pathHtml);
});

app.post("/form", function (req: any, res: any, next: any) {
  const form: any = formidable({ multiples: true });

  form.parse(req, (err: any, fields: any) => {
    if (err) {
      next(err);
      return;
    }
    console.log("поля: ", fields);
    res.json({ fields });
  });
});

app.listen(PORT, () => {
  console.log(`Application listening on http://localhost:${PORT} !`);
});
