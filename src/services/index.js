import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import routesReducer from "../services/routes";
import waypointsSaga from "./sagas/sagas";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    routes: routesReducer,
  },
  middleware: [saga],
});

saga.run(waypointsSaga);
