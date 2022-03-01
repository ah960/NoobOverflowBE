import express from "express";
import { postQuestion, getAllQuestions } from "../models/questions.js";
const router = express.Router();

/* GET all questions listing */
router.get("/", async function (req, res) {
  const response = await getAllQuestions();
  res.json({ successful: true, payload: response });
});

router.post("/", async function (req, res) {
  const questionInFo = req.body;
  const response = await postQuestion(questionInFo);
  res.json({ successful: true, payload: response });
});

export default router;
