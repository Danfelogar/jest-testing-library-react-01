export const getImagen = async () => {
  try {
    const apiKey = "wlYdvxa0YojRWR1U4iN54IqJ7MO5mr4Q";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    console.error(error);
    return "No se encontró la imagen";
  }
};
