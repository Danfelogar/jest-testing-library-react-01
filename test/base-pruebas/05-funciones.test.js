import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Testing in 05-funciones.js", () => {
  test("getUser should return an object", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo should return an object with the same name", () => {
    const nombre = "Dafne";

    const res = getUsuarioActivo(nombre);
    expect(res).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
