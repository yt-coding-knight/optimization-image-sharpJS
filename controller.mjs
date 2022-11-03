import Crypto from "node:crypto";
import Sharp from "sharp";

export async function imageOptimize(req, res, next) {
  const { buffer } = req.file;
  const imgName = Crypto.randomUUID();

  const info = await Sharp(buffer)
    .webp({ quality: 70 })
    .toFile(`public/images/${imgName}.webp`);

  console.log(info);
  res.status(200).json({ message: "ok" });
}
