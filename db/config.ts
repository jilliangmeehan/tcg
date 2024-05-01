import { defineDb, defineTable, column } from "astro:db";

// https://astro.build/db/config

const Cards = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    available: column.boolean(),
    url: column.text(),
  },
});

export default defineDb({
  tables: { Cards },
});
