import knex from "knex";

const knexConfig = require("../../knexfile.js");
const environment = process.env.NODE_ENV || "development";
const connOptions = knexConfig[environment];
const connection = knex(connOptions);

export default connection;