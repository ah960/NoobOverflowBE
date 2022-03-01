import query from "../db/connection.js";

export async function getAllQuestions() {
  const sqlText = `SELECT * FROM questions`;
  const result = query(sqlText);
  return await result.rows;
}

export async function postQuestion(questionInFo) {
  const { title, name, question, code, triedalready, whatdontunderstand } =
    questionInFo;
  console.log(questionInFo);
  const result = query(
    "INSERT INTO questions(title,name,question,code,triedalready,whatdontunderstand) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;",
    [title, name, question, code, triedalready, whatdontunderstand]
  );
  return await result.rows;
}
