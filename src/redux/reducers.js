const initialState = {
  updatedPosts: [],
};

const posts = (state = initialState, action = {}) => {
  switch (action.type) {
    case "FETCH_POSTS_SUCCESS":
      return Object.assign({}, state, { updatedPosts: action.payload[0].data });
    default:
      return state;
  }
};

export default posts;
