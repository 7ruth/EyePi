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
  gmData: false,
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
      
      console.log('action.episodes')
      console.log(action.episodes)

      return state
        .set('gmData', action.episodes)
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
