import { configureStore } from "@reduxjs/toolkit";
import bannerShow from "./Reducers/bannerShow";
import moviesSlice from "./Reducers/moviesSlice";
import userSlice from "./Reducers/userSlice";

export default configureStore({
  reducer: {
    movie: moviesSlice,
    banner: bannerShow,
    userAuth: userSlice,
  },

  //Included Default Middleware​[fix the bug]
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
