import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs/promises";

type Chunk = { docId:string; id:number; text:string };
const store: Chunk[] = [];

const app = express();
app.use(cors({ origin: true }));
app.use(express.json({ limit: "2mb" }));
const upload = multer({ dest: "uploads/" });

app.get("/health", (_req,res)=>res.json({ok:true}));

app.post("/upload", upload.single("file"), async (req,res)=>{
  if (!req.file) return res.status(400).json({ error: "file required" });
  const pdfParse = (await import("pdf-parse")).default;
  const data = await pdfParse(await fs.readFile(req.file.path));
  const chunks = data.text.split(/\n{2,}/).map((t,i)=>({id:i,text:t.trim()})).filter(c=>c.text);
  const docId = Date.now().toString();
  chunks.forEach(c => store.push({ docId, ...c }));
  res.json({ docId, chunks: chunks.length });
});

app.post("/query", async (req,res)=>{
  const q = String(req.body?.q || "").toLowerCase();
  const hits = store.filter(c => c.text.toLowerCase().includes(q)).slice(0,8);
  if (!hits.length) return res.json({ answer: "I don't know.", citations: [] });
  const answer = hits[0].text; // placeholder (will be LLM later)
  const citations = hits.map(h => ({ docId: h.docId, chunkId: h.id }));
  res.json({ answer, citations });
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, ()=>console.log(`API on :${PORT}`));
