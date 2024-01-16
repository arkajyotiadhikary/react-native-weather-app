import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import locationReducer from "./features/locationSlice";
import fetchDataSlice from "./features/fetchDataSlice";

export default configureStore({
      reducer: {
            modal: modalReducer,
            location: locationReducer,
            fetchData: fetchDataSlice,
      },
});
