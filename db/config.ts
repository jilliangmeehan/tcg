import { defineDb, defineTable, column } from "astro:db";

// https://astro.build/db/config

const Cards = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    selected: column.boolean(),
    available: column.boolean(),
  },
});

export default defineDb({
  tables: { Cards },
});
