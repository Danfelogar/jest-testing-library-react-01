import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import { heroes } from "../../src/data/heroes";

describe("Test in 08-imp-exp.js", () => {
  test("getHeroById should return a hero by id", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroById should return a undefined if i send one id doesn't exist", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  //Task
  test("getHeroesByOwner should return a hero by owner", () => {
    const owner = "DC";
    const ownerMarvel = "Marvel";

    const hero = getHeroesByOwner(owner);
    const heroMarvel = getHeroesByOwner(ownerMarvel);

    const simulateRes = heroes.filter((h) => h.owner === owner);
    const simulateResMarvel = heroes.filter((h) => h.owner === ownerMarvel);

    expect(hero).toEqual(simulateRes);
    expect(heroMarvel).toEqual(simulateResMarvel);
  });
});
