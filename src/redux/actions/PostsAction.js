import axios from 'axios';

export const GET_ALL_ARTICLE = "GET_ALL_ARTICLE";
export const GET_ARTICLE = "GET_ARTICLE";
export const CREATE_ARTICLE = "CREATE_ARTICLE";
export const UPDATE_ARTICLE = "UPDATE_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";

export const getAllPosts = () =>{
    console.log("dapatkan data semua post");
    return(dispatch)=>{
        axios.get('http://127.0.0.1:8080/articles/').then((res)=>{
            dispatch({
                type: GET_ALL_ARTICLE,
                payload: res.data,
            })
        })
    }
}

export const getCreatedUser = ({ title, content, category, }) => {
    const response = axios.post(`http://127.0.0.1:8080/article/`, {
      title,
      content,
      category,
    //   status : "publish"
    });
  
    return response;
  }