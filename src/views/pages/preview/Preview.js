import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSpinner, CCard, CCardBody, CCardTitle, CCardText, CCardHeader, CRow, CCol, CPagination, CPaginationItem} from '@coreui/react'
import { getAllPublish } from 'src/redux/actions/PostsAction'


const Tooltips = () => {
  const cards = useSelector(state => state.article.posts)
  const loading = useSelector(state => state.article.isLoading)
  const dispatch = useDispatch()
  const [page, setPage] = useState(2);

  useEffect(()=>{
    dispatch(getAllPublish())
  },[dispatch])

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
          <CPagination
            className="justify-content-center"
            activePage={setPage}
            pages={page}
            onActivePageChange={(i) => setPage(i)}
            limit={cards.length}
            
          >
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
