import { Pool } from "pg";

export const pool = new Pool({
  user: "camagru",
  host: "db",
  password: "password",
  database: "camagru",
  port: 5432,
});
