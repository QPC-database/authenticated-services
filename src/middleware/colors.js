import * as api from '../actions/colors.js';

const middleware = store => next => (action) => {
  switch (action.type) {
    case api.GENERATE_COLOR: {
      setTimeout(() => store.dispatch(api.generateColor()), 3000);
      return next(action);
    }
    default: {
      return next(action);
    }
  }
};

export default middleware;
