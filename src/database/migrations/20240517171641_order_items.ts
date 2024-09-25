import { Knex } from "knex";

exports.up = (knex: Knex): Promise<void> => knex.schema.createTable("order_items", table => {
  table.increments("id").primary();

  table.integer("user_id").references("id").inTable("users");

  table.integer("meal_id").references("id").inTable("meals");

  table.integer("order_id").references("id").inTable("orders");

  table.integer("quantities").notNullable();

  table.string("meal_name");

  table.timestamp("created_at").defaultTo(knex.fn.now());
});

exports.down = (knex: Knex): Promise<void> => knex.schema.dropTableIfExists('order_items');
