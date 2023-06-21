const getPhotos = async () => {
  const url = `https://jsonplaceholder.typicode.com/photos?_limit=5`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default getPhotos;
