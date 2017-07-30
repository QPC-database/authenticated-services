import * as actions from '../actions/colors.js';

const defaults = {
  color: '#0000FF',
};

const reducer = (state = defaults, action) => {
  switch (action.type) {
    case actions.GENERATE_COLOR: {
      return {
        ...state,
        color: action.color,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
