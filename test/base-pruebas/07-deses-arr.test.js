import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Testing 07-deses-arr.js", () => {
  test("should return a string and a number", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(typeof letters).toBe("string");
    expect(numbers).toBe(123);
    expect(typeof numbers).toBe("number");
  });
});
