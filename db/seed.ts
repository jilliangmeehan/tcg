import { db, Cards } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Cards).values([
    { name: "Kaeya", selected: true, available: true },
    { name: "Xiangling", selected: false, available: true },
  ]);
}
