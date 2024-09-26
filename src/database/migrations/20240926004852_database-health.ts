import { Knex } from "knex";

exports.up = (knex: Knex): Promise<void> => knex.schema.createTable("health", table => {
  table.timestamp("checked_at").defaultTo(knex.fn.now());
});

exports.down = (knex: Knex): Promise<void> => knex.schema.dropTableIfExists('health');
