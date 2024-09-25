import { Knex } from "knex";

exports.up = (knex: Knex): Promise<void> => knex.schema.createTable("ingredients", table => {
    table.increments("id").primary();

    table.integer("meal_id").references("id").inTable("meals").onDelete("CASCADE");

    table.string("name").notNullable();

    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

exports.down = (knex: Knex): Promise<void> => knex.schema.dropTableIfExists('ingredients');
