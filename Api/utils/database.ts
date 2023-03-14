import { Pool } from "pg";

const pool = new Pool({
  user: "ajeianeg",
  host: "babar.db.elephantsql.com",
  database: "ajeianeg",
  password: "qTcutS6HtTXmt8aKIf5XbpfyqcC4GxMl",
  port: 5432,
});

export default pool;
