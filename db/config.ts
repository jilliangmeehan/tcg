import { defineDb, defineTable, column } from "astro:db";

// https://astro.build/db/config

const Cards = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    selected: column.boolean({ default: true }),
    available: column.boolean({ default: true }),
    url: column.text({ default: "/" }),
  },
});

export default defineDb({
  tables: { Cards },
});
