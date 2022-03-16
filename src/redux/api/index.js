import axios from 'axios'

const API = axios.create({ baseURL: 'http://127.0.0.1:8080'})
//const API = axios.create({ baseURL: process.env.REACT_APP_API})

export const getAllPosts = () => API.get('/articles/')
export const getPostbyId =(id) => API.get(`/article/${id}`)
export const addPost =( article ) => API.post('/article/', article)
export const updatePost = (id, updatedPost) => API.put(`/article/${id}`, updatedPost)
export const deletePost =(id) => API.delete(`/article/${id}`)