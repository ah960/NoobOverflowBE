import query from "../db/connection.js";

export async function getComments(questionId) {
  const results = query("SELECT * FROM comments WHERE question_id = $1;", [
    questionId,
  ]);
  return await results.rows;
}

export async function postComments(commentInfo) {
  const { questionId, name, comment } = commentInfo;
  const result = query(
    "INSERT INTO comments (question_id, name, comment) VALUES ($1,$2,$3) RETURNING *;",
    [questionId, name, comment]
  );
  return await result.rows;
}
