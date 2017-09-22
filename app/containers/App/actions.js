/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_EPISODES,
  LOAD_EPISODES_SUCCESS,
  LOAD_EPISODES_ERROR,
} from './constants';

/**
 * Load the episode list, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_EPISODES
 */
export function loadEpisodes() {
  return {
    type: LOAD_EPISODES,
  };
}

/**
 * Dispatched when the episodes are loaded by the request saga
 *
 * @param  {array} episodes The episode data
 *
 * @return {object} An action object with a type of LOAD_EPISODES_SUCCESS passing the repos
 */
export function episodesLoaded(episodes) {
  return {
    type: LOAD_EPISODES_SUCCESS,
    episodes,
  };
}

/**
 * Dispatched when loading the episodes fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_EPISODES_ERROR passing the error
 */
export function episodesLoadingError(error) {
  return {
    type: LOAD_EPISODES_ERROR,
    error,
  };
}
