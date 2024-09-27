require('dotenv').config();
const path = require("path");

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.run('PRAGMA foreign_keys = ON', cb);
      }
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
      extension: "ts"
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
      extension: "ts"
    }
  },
  production: {
    client: 'pg',
    connection: process.env.PG_CONNECTION,
    migrations: {
      directory: path.resolve(__dirname, "dist", "database", "migrations")
    },
    seeds: {
      directory: path.resolve(__dirname, "dist", "database", "seeds"),
    },
    ssl: {
      rejectUnauthorized: false,
    }
  }
};
