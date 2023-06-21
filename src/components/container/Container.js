import React from "react";
import DraggableResizable from "../draggableResizable/DraggableResizable";
import { useFetchPhotos } from "../../hooks/useFetchPhotos";

const Container = () => {
  const { photos, setPhotos } = useFetchPhotos();

  const handleDelete = (index) => {
    setPhotos((prevPhotos) => {
      const updatedPhotos = [...prevPhotos];
      updatedPhotos.splice(index, 1);
      return updatedPhotos;
    });
  };

  return (
    <>
      {photos.map((photo, index) => (
        <>
          <DraggableResizable
            key={photo.id}
            url={photo.url}
            alt={photo.title}
            onDelete={() => handleDelete(index)}
          />
        </>
      ))}
    </>
  );
};

export default Container;
