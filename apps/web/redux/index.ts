import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from "./filter/reducer"

const rootReducer = combineReducers({
    filter: filterReducer,
});

export const storeSetup = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof storeSetup>;
export type AppDispatch = AppStore['dispatch'];
