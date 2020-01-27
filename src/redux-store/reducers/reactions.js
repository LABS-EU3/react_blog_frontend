export const initialState = {
  isReacting: false,
  reaction: {}
};

export const reactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REACTING_START":
      return {
        isReacting: true
      };
    case "REACTING_SUCCESS":
      return {
        isPublishing: true
      };

    case "REACTING_FAIL":
      return {
        isPublishing: false
      };

    default:
      return state;
  }
};
