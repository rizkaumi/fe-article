import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow, CCol, CPagination, CPaginationItem} from '@coreui/react'
import Cards from './Cards'

const Tooltips = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Preview Published Article</strong>
          </CCardHeader>
          <CCardBody>
            <Cards></Cards>
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
