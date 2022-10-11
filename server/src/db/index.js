const { Pool } = require("pg");
const { HOST } = require("../constants");

const pool = new Pool({
  user: "postgres",
  host: HOST,
  database: "score_counter",
  password: "password",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
