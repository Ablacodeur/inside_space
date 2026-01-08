import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();

const { Pool } = pkg;
const app = express();

/* =====================
   MIDDLEWARES
===================== */
app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true,
  })
);

app.use(express.json());

/* =====================
   POSTGRES CONNECTION
===================== */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/* =====================
   HEALTH CHECK
===================== */

/* =====================
   ROUTES API
===================== */

// 🚀 DESTINATIONS
app.get("/destinations", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM destinations ORDER BY id ASC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur destinations" });
  }
});

// 👩‍🚀 CREW
app.get("/crew", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM crew ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur crew" });
  }
});

// 🛰 TECHNOLOGY
app.get("/technology", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM technology ORDER BY id ASC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur technology" });
  }
});

/* =====================
   SERVER
===================== */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});
