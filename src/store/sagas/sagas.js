import { call, put, takeEvery } from "redux-saga/effects";
import { getWaypointsSuccess, getWaypointsFailure } from "../routes/index";
import { BASE_URL } from "../../utils/config";

function* workGetWaypointsFetch(action) {
  try {
    const routes = yield call(() =>
      fetch(`${BASE_URL}${action.payload}?geometries=polyline`)
    );
    const response = yield routes.json();
    if (response.code === "Ok") {
      yield put(getWaypointsSuccess(response.routes[0].geometry));
    } else {
      throw response;
    }
  } catch (err) {
    yield put(getWaypointsFailure(err));
  }
}

function* waypointsSaga() {
  yield takeEvery("routes/getWaypointsFetch", workGetWaypointsFetch);
}

export default waypointsSaga;
