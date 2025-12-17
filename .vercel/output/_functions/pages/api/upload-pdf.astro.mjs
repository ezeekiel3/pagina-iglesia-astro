import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { put } from '@vercel/blob';
export { renderers } from '../../renderers.mjs';

console.log(process.env.BLOB_READ_WRITE_TOKEN);
const BASE_PATH = "/home/pclinuxroom/Documentos/material-iglesia";
const MAIN_DIR = path.join(BASE_PATH, "main");
const KIDS_DIR = path.join(BASE_PATH, "kids");
const uploadFolder = async (folderPath, blobPrefix) => {
  const files = fs.readdirSync(folderPath);
  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const buffer = fs.readFileSync(filePath);
    const blobPath = `${blobPrefix}/${file}`;
    const blob = await put(blobPath, buffer, {
      access: "public"
    });
    console.log(`☁ Subido: ${blob.url}`);
  }
};
const start = async () => {
  console.log("⬆ Subiendo MAIN...");
  await uploadFolder(MAIN_DIR, "main");
  console.log("⬆ Subiendo KIDS...");
  await uploadFolder(KIDS_DIR, "kids");
  console.log("✅ Subida completa");
};
start().catch(console.error);

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
