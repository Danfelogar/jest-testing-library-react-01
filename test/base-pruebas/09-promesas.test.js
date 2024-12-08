import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("testing in 09-promesas.js", () => {
  test("getHeroByIdAsync should return an hero async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });

  test("getHeroByIdAsync should return an error if hero doesn't exist ", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe ${id}`);

      done();
    });
  });
});
