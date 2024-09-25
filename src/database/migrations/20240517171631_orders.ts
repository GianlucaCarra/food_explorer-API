import { Knex } from "knex";

exports.up = (knex: Knex): Promise<void> => knex.schema.createTable("orders", table => {
  table.increments("id").primary();

  table.integer("user_id").references("id").inTable("users");

  table.timestamp("created_at").defaultTo(knex.fn.now());
});

exports.down = (knex: Knex): Promise<void> => knex.schema.dropTableIfExists('orders');
