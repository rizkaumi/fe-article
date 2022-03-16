import * as api from '../api/index'

export const GET_ALL_ARTICLE = "GET_ALL_ARTICLE";
export const GET_ARTICLE = "GET_ARTICLE";
export const CREATE_ARTICLE = "CREATE_ARTICLE";
export const UPDATE_ARTICLE = "UPDATE_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const START_LOADING = "START_LOADING"
export const END_LOADING = "END_LOADING"

export const getAllPublish = () => async (dispatch)=> {
    try {
        dispatch({ type: START_LOADING })
        const response = await api.getAllPosts()
        const updatedPost = (response.data.data).filter(x => x.status === "publish")
        dispatch ({ type: GET_ALL_ARTICLE, payload: updatedPost})
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const getAllDraft = () => async (dispatch)=> {
    try {
        dispatch({ type: START_LOADING })
        const response = await api.getAllPosts()
        const updatedPost = (response.data.data).filter(x => x.status === "draft")
        dispatch ({ type: GET_ALL_ARTICLE, payload: updatedPost})
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}
export const getAllTrash = () => async (dispatch)=> {
    try {
        dispatch({ type: START_LOADING })
        const response = await api.getAllPosts()
        const updatedPost = (response.data.data).filter(x => x.status === "trash")
        dispatch ({ type: GET_ALL_ARTICLE, payload: updatedPost})
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const getPostbyId = (id) => async (dispatch)=> {
    try {
        const response = await api.getPostbyId(id)
       // const formArticle = (response.data)
        dispatch ({ type: GET_ALL_ARTICLE, payload: response})
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
export const createPost = (formArticle) => async(dispatch) => {
    try{
        dispatch({type: START_LOADING})
        const response = await api.addPost(formArticle);
        dispatch({type: CREATE_ARTICLE, payload: response})
        //navigate(`/article/${response.id}`)
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }

}

export const updatedPost = (id, article) => async (dispatch) =>{
    try{
        const response = await api.updatePost(id, article)
        dispatch({ type: UPDATE_ARTICLE, payload: response })
    } catch (error) {
        console.log(error)
    }
}

export const deletedPost = (id) => async (dispatch) =>{
    try {
        await api.deletePost(id)
        dispatch({type: DELETE_ARTICLE, payload: id})
        console.log("Article deleted")
    } catch (error) {
        console.log(error.response)
    }
}