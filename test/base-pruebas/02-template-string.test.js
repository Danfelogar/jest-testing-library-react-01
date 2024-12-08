import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Testing  in 02-template-string.js", () => {
  test("GetSaludo should return Hola Fernando", () => {
    const nombre = "Danfelogar";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
  });
});
