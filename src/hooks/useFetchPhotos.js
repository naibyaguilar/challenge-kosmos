import { useEffect, useState } from "react";
import getPhotos from "../service/getPhotos";

export const useFetchPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos().then((data) => {
      setPhotos(data);
    });
  }, []);

  return { photos, setPhotos };
};
