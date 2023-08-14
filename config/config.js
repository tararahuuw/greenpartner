require("dotenv").config();

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_DIALECT
} = process.env;

module.exports = {
  "development": {
    "username": "sql6639283",
    "password": "fkc179PXPV",
    "database": "sql6639283",
    "host": "sql6.freesqldatabase.com",
    "dialect": "mysql"
  },
  "test": {
    "username": "sql6639283",
    "password": "fkc179PXPV",
    "database": "sql6639283",
    "host": "sql6.freesqldatabase.com",
    "dialect": "mysql"
  },
  "production": {
    "username": "sql6639283",
    "password": "fkc179PXPV",
    "database": "sql6639283",
    "host": "sql6.freesqldatabase.com",
    "dialect": "mysql"
  }
}