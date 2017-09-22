/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_EPISODES_SUCCESS,
  LOAD_EPISODES,
  LOAD_EPISODES_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  starTrekData: {
    episodes: false,
    maxNumVotes: false,
  },
});

function appReducer(state = initialState, action) {
  let maxNumVotes = 0;
  switch (action.type) {
    case LOAD_EPISODES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['starTrekData', 'episodes'], false);
    case LOAD_EPISODES_SUCCESS:
      // find the max count of votes for an episode, used later for display purposes
      action.episodes.forEach((episode) => {
        if (episode.numVotes > maxNumVotes) {
          maxNumVotes = episode.numVotes;
        }
      });

      return state
        .setIn(['starTrekData', 'episodes'], action.episodes)
        .setIn(['starTrekData', 'maxNumVotes'], maxNumVotes)
        .set('loading', false);
    case LOAD_EPISODES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
