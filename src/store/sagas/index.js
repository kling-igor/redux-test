import { takeEvery, all } from "redux-saga/effects";

import { FETCH_PLANETS_DATA, FETCH_PLANET_DETAILS_DATA } from "../types";
import { fetchPlanetsSaga, fetchPlanetDetailsSaga } from "./planetsSagas";

function* watchAllSagas() {
  yield all([
    takeEvery(FETCH_PLANETS_DATA, fetchPlanetsSaga),
    takeEvery(FETCH_PLANET_DETAILS_DATA, fetchPlanetDetailsSaga)
  ])
}

export default watchAllSagas;