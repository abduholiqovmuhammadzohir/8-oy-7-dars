import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'

function Layout({children}) {
  return (
    <div>
        <LeftSidebar></LeftSidebar>
        {children}
        <RightSidebar></RightSidebar>
    </div>
  )
}

export default Layout