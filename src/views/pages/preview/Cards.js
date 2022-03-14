import React from 'react'
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

const Cards = () => {
  return (
    <CRow>
      <CCol sm={6}>
        <CCard className="mb-4">
          <CCard className="mb-3" color='light' style={{ width: '20rem' }}>
            <CCardHeader>Category</CCardHeader>
            <CCardBody>
            <CCardTitle>Article title</CCardTitle>
            <CCardText>
             Article content of the
            </CCardText>
            </CCardBody>
          </CCard>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Cards
