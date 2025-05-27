import { combineSlices } from "@reduxjs/toolkit";
import { api } from "@/redux/services/api";
import { counterReducer } from "@/redux/features/counter/counterSlice";

const staticSlices = {
  counter: counterReducer,
  // Add other static slices here
}

export const rootReducer = combineSlices(api, staticSlices)
  .withLazyLoadedSlices<{
    // This type will ensure any dynamically added slices are typed correctly
    // Add slice names here as you create them
    // user: UserState
    // products: ProductsState
  }>();

export type RootState = ReturnType<typeof rootReducer>;