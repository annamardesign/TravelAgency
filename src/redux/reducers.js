
const initialState = {
    updatePosts: []
}

const posts = (state = initialState , action= {}) => {
 
    switch(action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return Object.assign({}, state, {updatePosts: action.payload})
        default:
            return state
    }
}

export default posts;