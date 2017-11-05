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
<<<<<<< HEAD
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
=======
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
>>>>>>> 27e7398287c19d505d4e9659f16859c6a8879fad
  };
}

/**
<<<<<<< HEAD
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
=======
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
>>>>>>> 27e7398287c19d505d4e9659f16859c6a8879fad
  };
}

/**
<<<<<<< HEAD
 * Dispatched when loading the episodes fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_EPISODES_ERROR passing the error
 */
export function episodesLoadingError(error) {
  return {
    type: LOAD_EPISODES_ERROR,
=======
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
>>>>>>> 27e7398287c19d505d4e9659f16859c6a8879fad
    error,
  };
}
