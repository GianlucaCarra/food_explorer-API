import { Knex } from "knex";

exports.up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("meals", table => {
    table.increments("id").primary();

    table.string("name").notNullable();

    table.string("desc").notNullable();

    table.string("imageURL", 1000);

    table.string("publicID");

    table.decimal("price", 10, 2).notNullable();

    table.enu("type", ["meal", "dessert", "drink"]).notNullable().defaultTo("meal");

    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex: Knex): Promise<void> => knex.schema.dropTableIfExists('meals');