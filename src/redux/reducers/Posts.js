import{
    GET_ALL_ARTICLE,
    GET_ARTICLE,
    CREATE_ARTICLE,
    UPDATE_ARTICLE,
    DELETE_ARTICLE,
    START_LOADING,
    END_LOADING
} from '../actions/PostsAction'
  
const posts = (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
      case START_LOADING:
        return { ...state, isLoading: true };
      case END_LOADING:
        return { ...state, isLoading: false };
      case GET_ALL_ARTICLE:
        return {...state, posts : action.payload}
      case GET_ARTICLE:
        return {...state, post : action.payload}
      case CREATE_ARTICLE:
        return { ...state, posts: [...state.posts, action.payload] }
      case UPDATE_ARTICLE:
        return { ...state, posts: state.posts.map((post) => (post.id === action.payload.id ? action.payload : post)) };
      case DELETE_ARTICLE:
        return {...state, posts: state.posts.filter((post) => post.id !== action.payload)}
      default:
        return state;
    }
};
  
export default posts;