import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { updatedPost, getPostbyId } from 'src/redux/actions/PostsAction';

const EditPost = () => {
  const [formArticle, setFormArticle] = useState({
    title:"",
    content:"",
    category:"",
  });
  
  const { id } = useParams()
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const article = useSelector(state => state.article.post)
  
  //buat get data post by id
  const getPostbyid = async() => {
    console.log("dapat data artikel dari id")
    const response = await axios.get(`http://127.0.0.1:8080/article/${id}`);
    setFormArticle(response.data)
  
  };
  useEffect(()=>{
    getPostbyid()
  })

  // useEffect(() => {
  //   if(article){
  //     setFormArticle(article)
  //   }
  // }, [article]);

 // buat update post status draft
  const updatePublishPost = async() =>{
    console.log("Masuk action create");
    const data = JSON.stringify({
      "title" : formArticle.title,
      "content" : formArticle.content,
      "category" : formArticle.category,
      "status" : "publish"
    })
    const response = await axios.put(`http://127.0.0.1:8080/article/${id}`, data);
    console.log("status post" + response.status)
    console.log(data)
    console.log ("Published!")

  }
  const updateDraftPost = async() =>{
    console.log("Masuk action create");
    const data = JSON.stringify({
      "title" : formArticle.title,
      "content" : formArticle.content,
      "category" : formArticle.category,
      "status" : "draft"
    })
    const response = await axios.put(`http://127.0.0.1:8080/article/${id}`, data);
    console.log("status post" + response.status)
    console.log(data)
    console.log ("Drafted!")

  }
  // handle merubah form
  const handleChange = event => {
    const { name, value } = event.target;
    setFormArticle({ ...formArticle, [name]: value });
  };

  
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Edit Article</strong>
          </CCardHeader>
          <CCardBody>
            <CForm >
              <div className="mb-3">
                <CFormLabel>Title</CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Article title"
                  name='title'
                  value={formArticle.title}
                  onChange={handleChange}
                />
        
                <CFormLabel htmlFor="exampleFormControlTextarea1">Content</CFormLabel>
                <CFormTextarea placeholder="Article content" rows="3"
                name='content' 
                value={formArticle.content}
                onChange={handleChange}
                />
              
                <CFormLabel>Category</CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Article category"
                  name='category'
                  value={formArticle.category}
                  onChange={handleChange}
                />
              </div>
            </CForm>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="secondary" className="me-md-2" 
                 onClick={updateDraftPost}
                 >
                  Draft
                </CButton>
                <CButton color="primary" 
                onClick={updatePublishPost}
                >Publish</CButton>
              </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EditPost
