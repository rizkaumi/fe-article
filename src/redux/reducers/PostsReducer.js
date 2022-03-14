import{
    GET_ALL_ARTICLE,
    GET_ARTICLE,
    CREATE_ARTICLE,
    UPDATE_ARTICLE,
    DELETE_ARTICLE
} from '../actions/PostsAction'

const initialState = {
    post: []
};
  
const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CREATE_USER":
        return { ...state, post: [...state.post, action.data] };
      default:
        return state;
    }
};
  
export default PostsReducer;
  
// let initialState ={
//     getAllPosts : [],
//     errorAllPosts : false,

//     createPost : [],
//     createPosts : false,
// }

// const PostsReducer = (state = initialState, action) =>{
//     switch (action.type){
//         case GET_ALL_ARTICLE:
//             console.log('Masuk reducer:', action)
//             return{
//                 ...state,
//                 getAllPosts: action.payload.data,
//                 errorAllPosts: action.payload.errorMessage,
//             }
//         // case CREATE_ARTICLE:
//         //     console.log('Masuk reducer: ', action)
//         //     return {
//         //         ...state,
//         //         createPost: action.payload.data,
//         //         errorCreatePost: action.payload.errorMessage,
//         //     }
//         default:
//             return state    
//     }
// }

// export default PostsReducer