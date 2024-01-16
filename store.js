import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import locationReducer from "./features/locationSlice";

export default configureStore({
      reducer: {
            modal: modalReducer,
            location: locationReducer,
      },
});
