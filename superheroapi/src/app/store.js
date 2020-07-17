import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "../components/organisms/heroes/heroesSlice";
import modalReducer from "../components/organisms/modal/modalSlice";

export default configureStore({
  reducer: {
    heroes: heroesReducer,
    modal: modalReducer,
  },
});
