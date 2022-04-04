import express, { Request, Response } from "express";
import routes from "./routes";
import multer from "multer";
import uploadConfig from "./config/upload";

import fs from "fs";
import { SHA3 } from "sha3";

import FingerPrintController from "./module/fingerprint/FingerPrintController";

const app = express();
const port = 3000;

app.use(express.json());

app.use(routes);

const upload = multer(uploadConfig.multer);

app.post(
  "/upload",
  upload.single("record"),
  async (req: Request, res: Response) => {
    const path = req.file?.path;

    if (!path) throw new Error("error when uploading");

    const fileData = fs.readFileSync(path);
    const hash = new SHA3(256);

    hash.update(fileData);
    const fingerprint = hash.digest("hex");

    fs.unlink(path, (err) => {
      if (err) throw err;
    });

    const fingerPrintController = new FingerPrintController();

    await fingerPrintController.deployConsensus(fingerprint);

    return res.json({ fingerprint });
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
