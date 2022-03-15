import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
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

const AddNew = () => {
  const [formArticle, setFormArticle] = useState({
    title:"",
    content:"",
    category:"",
  });
  
  const {
    title,
    content,
    category,
  } = formArticle

  // //buat get data post by id
  // const { article } = useSelector((state) => state.articles);
  // const { id } = useParams()
  // const navigate = useNavigate()
  // const dispatch = useDispatch()

  // const getPostbyId = async(id) =>{
  //   try {
  //   console.log("2. Masuk action getPostbyId");
  //   const response = await axios.get(`http://127.0.0.1:8080/article/${id}`)
  //   setFormArticle(response.data.data)
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getPostbyId(id)
  // }, [id]);

  // useEffect(() => {
  //   if(article){
  //     setFormArticle(article)
  //   }
  // }, [article]);

  // buat update post status publish
  // const updatePublishPost = async() =>{
  //   console.log("Masuk action create");
  //   const data = JSON.stringify({
  //     "title" : article.title,
  //     "content" : article.content,
  //     "category" : article.category,
  //     "status" : "publish"
  //   })
  //   const response = await axios.put(`http://127.0.0.1:8080/article/${id}`, data);
  //   console.log("status post" + response.status)
  //   console.log(data)
  //   console.log ("Published!")

  // }
  // // buat update post status draft
  // const updateDraftPost = async() =>{
  //   console.log("Masuk action create");
  //   const data = JSON.stringify({
  //     "title" : article.title,
  //     "content" : article.content,
  //     "category" : article.category,
  //     "status" : "draft"
  //   })
  //   const response = await axios.put(`http://127.0.0.1:8080/article/${id}`, data);
  //   console.log("status post" + response.status)
  //   console.log(data)
  //   console.log ("Drafted!")

  // }

  // handle merubah form
  const handleChange = event => {
    const { name, value } = event.target;
    setFormArticle({ ...formArticle, [name]: value });
  };

  //buat create post status publish
  const createPublishPost = async() =>{
    console.log("Masuk action create");
    const data = JSON.stringify({
      "title" : formArticle.title,
      "content" : formArticle.content,
      "category" : formArticle.category,
      "status" : "publish"
    })
    const response = await axios.post(`http://127.0.0.1:8080/article/`, data);
    console.log("status post" + response.status)
    console.log(data)
    console.log ("Published!")

    if (response.status===200){
      setFormArticle({
        title:'',
        content: '',
        category: ''
      });
    }
  }

  //post status draft
  const createDraftPost = async() =>{
    console.log("Masuk action create");
    const data = JSON.stringify({
      "title" : formArticle.title,
      "content" : formArticle.content,
      "category" : formArticle.category,
      "status" : "draft"
    })
    const response = await axios.post(`http://127.0.0.1:8080/article/`, data);
    console.log("status post" + response.status)
    console.log(data)
    console.log ("Drafted!")

    if (response.status===200){
      setFormArticle({
        title:'',
        content: '',
        category: ''
      });
    }
  }
  
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add New Article</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel>Title</CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Article title"
                  name='title'
                  value={title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Content</CFormLabel>
                <CFormTextarea placeholder="Article content" rows="3"
                name='content' 
                value={content}
                onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel>Category</CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleFormControlInput1"
                  placeholder="Article category"
                  name='category'
                  value={category}
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="secondary" className="me-md-2" 
                 onClick={createDraftPost}
                 >
                  Draft
                </CButton>
                <CButton color="primary" 
                onClick={createPublishPost}
                >Publish</CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddNew
