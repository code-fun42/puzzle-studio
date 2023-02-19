import express from "express";
import path from "path";
import cors from "cors";
import formidable from "formidable";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.text());

const pathSrc: string = path.resolve(__dirname + "/../client/dist/");

app.use("/", express.static(pathSrc));

const PORT = 8000;

const pathHtml: string = path.resolve(__dirname + "/../client/dist/index.html");
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
