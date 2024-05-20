import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import styled from '@emotion/styled'

function Layout({ children }) {

  const LayoutWrapper = styled.div`
     display:flex;
     width: 100%;
     justify-content: space-between;
  `;

  return (
    <LayoutWrapper>
      <LeftSidebar></LeftSidebar>
      {children}
      <RightSidebar></RightSidebar>
    </LayoutWrapper>
  )
}

export default Layout