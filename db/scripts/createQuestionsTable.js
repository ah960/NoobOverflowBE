import query from "../connection.js";

const sqlText =
  "CREATE TABLE IF NOT EXISTS questions (question_id SERIAL PRIMARY KEY, title TEXT, name Text,question TEXT,code TEXT, triedAlready TEXT,whatDontUnderstand TEXT)";

async function createQuestionsTable() {
  const res = query(sqlText);
  console.log("table created successfully", await res);
}

createQuestionsTable();
