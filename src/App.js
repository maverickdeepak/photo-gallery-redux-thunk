import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./store/gallerySlice";

import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <p>This is a photo gallery made using redux toolkit and redux thunk </p>
      <hr />
      <div className="Gallery">
        {photos.map((photo) => (
          <img
            src={photo.download_url}
            alt={photo.author}
            key={photo.id}
            width="400"
            height="400"
          />
        ))}
      </div>
    </div>
  );
}
