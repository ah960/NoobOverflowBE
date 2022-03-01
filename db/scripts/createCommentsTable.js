import query from "../connection.js";

const sqlText =
  "CREATE TABLE IF NOT EXISTS comments (comment_id SERIAL PRIMARY KEY, question_id INT,name TEXT,comment TEXT)";

async function createCommentsTable() {
  const res = query(sqlText);
  console.log("table created successfully", await res);
}

createCommentsTable();
