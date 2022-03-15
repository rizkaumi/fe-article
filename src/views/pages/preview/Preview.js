import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { CSpinner, CCard, CCardBody, CCardTitle, CCardText, CCardHeader, CRow, CCol, CPagination, CPaginationItem} from '@coreui/react'


const Tooltips = () => {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
  
  const getAllPublish = async() =>{
    setLoading(true);
    console.log("2. Masuk action getList");
    const response = await axios.get(`http://127.0.0.1:8080/articles/`)
    const updatedPost = (response.data.data).filter(x => x.status === "publish")
    setCards(updatedPost)
    setLoading(false)
  }

  useEffect(()=>{
    getAllPublish()
  },[])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Preview Published Article</strong>
          </CCardHeader>
          <CCardBody>
          <CRow>
            
                {
                !loading && cards? cards.map((card)=>{
                  return (
                  <CCol lg={4} key={card.id}>
                  {/* <CCard className="mb-4"> */}
                  <CCard className="mb-3" color='light' style={{ width: '20rem' }}>
                  <CCardHeader>{card.category}</CCardHeader>
                  <CCardBody>
                  <CCardTitle>{card.title}</CCardTitle>
                  <CCardText>
                  {card.content}
                  </CCardText>
                  </CCardBody>
                  {/* </CCard> */}
                  </CCard>
                  </CCol>
                  )
                }) : (
                  <CSpinner color="primary" />
                )
              }
                
              
          </CRow>
            
            
            <CPagination className="justify-content-center" aria-label="Page navigation example">
              <CPaginationItem disabled>Previous</CPaginationItem>
              <CPaginationItem>1</CPaginationItem>
              <CPaginationItem>2</CPaginationItem>
              <CPaginationItem>3</CPaginationItem>
              <CPaginationItem>Next</CPaginationItem>
            </CPagination>
          </CCardBody>
        </CCard>
      </CCol>
      
    </CRow>
  )
}

export default Tooltips
