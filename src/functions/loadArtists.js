const loadArtists = async (searchTerm) => {
  try {
    const urlApi = `http://localhost:3000/artists?name_like=${searchTerm}`;

    const response = await fetch(urlApi);
    const result = await response.json();

    return result;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};

export default loadArtists;
