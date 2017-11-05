/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectEpisodes = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['starTrekData', 'episodes'])
);

const makeSelectMaxNumVotes = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['starTrekData', 'maxNumVotes'])
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
<<<<<<< HEAD
  makeSelectLoading,
  makeSelectError,
  makeSelectEpisodes,
  makeSelectMaxNumVotes,
=======
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
>>>>>>> 27e7398287c19d505d4e9659f16859c6a8879fad
  makeSelectLocationState,
};
