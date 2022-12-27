import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallerySlice";

const store = configureStore({
  reducer: {
    gallery: galleryReducer
  }
});

export default store;
