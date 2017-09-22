/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects'; // eslint-disable-line
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_EPISODES } from 'containers/App/constants';
import { episodesLoaded, episodesLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Star Trek TNG episodes request/response handler
 */
export function* getEpisodes() {
  const requestURL = `http://ec2-52-90-200-167.compute-1.amazonaws.com:8080`; //eslint-disable-line

  try {
    // Call our request helper (see 'utils/request')
    const episodes = yield call(request, requestURL);
    yield put(episodesLoaded(episodes));
  } catch (err) {
    yield put(episodesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* starTrekData() {
  // Watches for LOAD_EPISODES actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_EPISODES, getEpisodes);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  starTrekData,
];
