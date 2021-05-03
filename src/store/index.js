/*
import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./features/teams/teamsSlice";
import playersReducer from "./features/players/playersSlice";

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
    players: playersReducer,
  },
});
*/
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import teamsReducer from "./features/teams/teamsSlice";
import playersReducer from "./features/players/playersSlice";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  teams: teamsReducer,
  players: playersReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["players"],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
