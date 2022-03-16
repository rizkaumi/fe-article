import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { 
  CCard, 
  CCardBody, 
  CCardHeader, 
  CCol, 
  CRow, 
  CNav,  CNavItem,  CNavLink, CTabContent, CTabPane, 
  CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton, CSpinner,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPencil,
  cilTrash,
} from '@coreui/icons'
// import { getAllPublish, getAllDraft, getAllTrash } from 'src/redux/actions/PostsAction'

const Select = () => {
  const [activeKey, setActiveKey] = useState(1)
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const post = useSelector(state => state.article.posts)
  // const loading = useSelector(state => state.article.isLoading)
  
  const getAllPublish = async() =>{
    setLoading(true);
    console.log("2. Masuk action getList");
    const response = await axios.get(`http://127.0.0.1:8080/articles/`)
    const updatedPost = (response.data.data).filter(x => x.status === "publish")
    setPost(updatedPost)  
    setLoading(false)
  }
  const getAllDraft = async() =>{
    setLoading(true);
    console.log("2. Masuk action getList");
    const response = await axios.get(`http://127.0.0.1:8080/articles/`)
    const updatedPost = (response.data.data).filter(x => x.status === "draft")
    setPost(updatedPost)
    setLoading(false)
  }
  const getAllTrash = async() =>{
    setLoading(true);
    console.log("2. Masuk action getList");
    const response = await axios.get(`http://127.0.0.1:8080/articles/`)
    const updatedPost = (response.data.data).filter(x => x.status === "trash")
    setPost(updatedPost)
    setLoading(false)
  }

  useEffect(()=>{
    getAllDraft()
    getAllTrash()
    getAllPublish()
    
  },[])
  
  
  const showPublish =()=>{
    setActiveKey(1)
    getAllPublish()
  }
  
  const showDraft =()=>{
    setActiveKey(2)
    getAllDraft()
  }

  const showTrash =()=>{
    setActiveKey(3)
    getAllTrash()
  }

  const editPost = (id) => {
    navigate(`/edit/post/${id}`)
  }
  
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>All Posts</strong>
          </CCardHeader>
          <CCardBody>
          <CNav variant="tabs" role="tablist">
            <CNavItem>
              <CNavLink
                active={activeKey === 1}
                onClick={() => showPublish()}
              >
                Published
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                active={activeKey === 2}
                onClick={() => showDraft()}
              >
                Drafted
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                active={activeKey === 3}
                onClick={() => showTrash()}
              >
                Trashed
              </CNavLink>
            </CNavItem>
          </CNav>

          <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="All-Posts-tab" visible={activeKey === 1}>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="col-3">Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody> 
                    {
                      !loading && post? post.map((posts)=>{
                        return (
                        <CTableRow key={posts.id}>
                        <CTableDataCell>
                          {posts.title}
                        </CTableDataCell>
                        <CTableDataCell>
                          {posts.category}
                        </CTableDataCell>
                        <CTableDataCell className="d-grid gap-2 d-md-flex justify-content-md">
                          <CButton color="dark" onClick={() => editPost(posts.id)}>
                            <CIcon icon={cilPencil}/>
                            Edit
                          </CButton>
                          <CButton color="danger">
                            <CIcon icon={cilTrash}/>
                            Trash
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                      )
                      }) : (
                        <CTableRow>
                          <CTableDataCell>
                            <CSpinner color="primary" />
                          </CTableDataCell>
                        </CTableRow>
                      )
                    }
                  </CTableBody>
                </CTable>
            </CTabPane>
            <CTabPane visible={activeKey === 2}>
            <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="col-3">Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody> 
                    {
                      !loading && post? post.map((posts)=>{
                        return (
                        <CTableRow key={posts.id}>
                        <CTableDataCell>
                          {posts.title}
                        </CTableDataCell>
                        <CTableDataCell>
                          {posts.category}
                        </CTableDataCell>
                        <CTableDataCell className="d-grid gap-2 d-md-flex justify-content-md">
                          <CButton color="dark" onClick={() => editPost(posts.id)}>
                            <CIcon icon={cilPencil}/>
                            Edit
                          </CButton>
                          <CButton color="danger">
                            <CIcon icon={cilTrash}/>
                            Trash
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                      )
                      }) : (
                        <CTableRow>
                          <CTableDataCell>
                            <CSpinner color="primary" />
                          </CTableDataCell>
                        </CTableRow>
                      )
                    }    
                  </CTableBody>
                </CTable>
            </CTabPane>
            <CTabPane visible={activeKey === 3}>
            <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                      <CTableHeaderCell scope="col" className="col-3">Action</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody> 
                    {
                      !loading && post? post.map((posts)=>{
                        return (
                        <CTableRow key={posts.id}>
                        <CTableDataCell>
                          {posts.title}
                        </CTableDataCell>
                        <CTableDataCell>
                          {posts.category}
                        </CTableDataCell>
                        <CTableDataCell className="d-grid gap-2 d-md-flex justify-content-md">
                          <CButton color="dark" onClick={() => editPost(posts.id)}>
                            <CIcon icon={cilPencil}/>
                            Edit
                          </CButton>
                          <CButton color="danger">
                            <CIcon icon={cilTrash}/>
                            Trash
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                      )
                      }) : (
                        <CTableRow>
                          <CTableDataCell>
                            <CSpinner color="primary" />
                          </CTableDataCell>
                        </CTableRow>
                      )
                    }
                  </CTableBody>
                </CTable>
            </CTabPane>
          </CTabContent>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Select
