import {
  INCREMENT_BUBBLES,
  CLICK_SUCCESS,
  CLICK_FAILURE,
} from '../actions/types';

const INIT_STATE = {
  level: 0,
  steps: [1, 2, 3, 4],
  stepsForTesting: [],
  isBusy: true,
  isNextTurn: false,
  isRepeating: false,
  isFailure: false,
  mode: 'normal',
};

const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case INCREMENT_BUBBLES:
      return {
        ...state,
        level: action.payload.length,
        steps: action.payload,
        stepsForTesting: action.payload,
        isBusy: false,
        isNextTurn: false,
        isRepeating: false,
      }
    case CLICK_SUCCESS:
      if (action.payload.length < 1) {
        return {
          ...state,
          stepsForTesting: action.payload,
          isBusy: true,
          isNextTurn: true,
        };
      }
      return {
        ...state,
        stepsForTesting: action.payload,
      };
    case CLICK_FAILURE:
      return {
        ...state,
        level: '!!',
        stepsForTesting: state.steps,
        isBusy: true,
        isRepeating: true,
      };
    default:
      return state;
  }
};

export const getPreviousBubbles = (state) => state.steps;

export const getTestBubbles = (state) => state.stepsForTesting;

export default rootReducer;
