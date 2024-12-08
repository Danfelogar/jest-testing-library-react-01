import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Testing in 11-async-await.js", () => {
  test("getImagen should an url of the image", async () => {
    const url = await getImagen();

    expect(typeof url).toBe("string");
    // expect(resp).toBe("No se encontró la imagen");
  });
});
