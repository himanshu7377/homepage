import React from 'react'

function Layout({children}) {
  console.log("layout.js")
  return (
    <div>
     <p>layout component</p> 
     {children}
    </div>
  )
}

export default Layout
