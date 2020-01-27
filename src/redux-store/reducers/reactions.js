export const initialState = {
  isReacting: false,
  emoji: ""
};

export const reactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REACTING_START":
      return {
        isReacting: true,
        emoji: action.payload
      };
    case "REACTING_SUCCESS":
      return {
        isPublishing: true,
        emoji: action.payload
      };

    case "REACTING_FAIL":
      return {
        isPublishing: false,
        emoji: ""
      };

    default:
      return state;
  }
};
