const loadPlaylists = async (searchTerm) => {
  try {
    const urlApi =
      searchTerm !== ""
        ? `http://localhost:3000/playlists?name_like=${searchTerm}`
        : `http://localhost:3000/playlists`;

    const response = await fetch(urlApi);
    const result = await response.json();

    return result;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};

export default loadPlaylists;
