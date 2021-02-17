import http from "../services/httpService.js";

const fetchPostsSuccess = (posts) => ({
  type: "FETCH_POSTS_SUCCESS",
  payload: [posts],
});

export const fetchPosts = () => {
  return async (dispatch) => {
    let posts = await http.get(
      "https://test.api.amadeus.com/v1/shopping/activities/by-square?north=13.023577&west=77.536856&south=12.923210&east=77.642256"
    );
    dispatch(fetchPostsSuccess(posts.data));
  };
};
