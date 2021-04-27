import express, {
  Application,
  Request,
  Response
} from "express";

const app: Application = express();
const PORT: string = process.env.PORT || "4000";

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("☀️ Hello world!");
});

app.listen(PORT, () => {
  console.log(`⚡️ [Server]: Backend running at http://localhost:${PORT}`);
});