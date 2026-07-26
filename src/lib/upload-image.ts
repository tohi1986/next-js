import fs from "fs/promises";
import path from "path";

export async function saveImage(file: File) {

  const extension = file.name.split(".").pop();

  const fileName = `${Date.now()}.${extension}`;

  const filePath = path.join(
    process.cwd(),
    "public",
    "images",
    fileName
  );


  const buffer = Buffer.from(
    await file.arrayBuffer()
  );


  await fs.writeFile(filePath, buffer);


  return `/images/${fileName}`;
}