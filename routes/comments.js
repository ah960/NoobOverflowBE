import express from "express";
import { getComments, postComments } from "../models/comments.js";

const router = express.Router();

router.get("/:questionId", async function (req, res) {
  const questionId = req.params.questionId;
  const response = await getComments(questionId);
  res.json({ successfull: true, payload: response });
});

router.post("/", async function (req, res) {
  const commentInfo = req.body;
  console.log(commentInfo);
  const response = await postComments(commentInfo);
  res.json({ successfull: true, payload: response });
});

export default router;
