import React from 'react'
import Nav from 'react-bootstrap/Nav';





function NavBar() {
  return <>


<div id="wrapper">
  <Nav  variant="underline" className="justify-content-center"  defaultActiveKey="/home"  style={{ height:'100px', padding:'20px 20px', marginBottom:'30px' , backgroundColor:'white', color:'', borderBottomLeftRadius:'15px' , borderBottomRightRadius:'15px', boxShadow:' 0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Nav.Item>
        <Nav.Link href="/common" style={{color:'#555555'}} ><b>HOME</b></Nav.Link>
      </Nav.Item>
      &nbsp; 
      <Nav.Item>
        <Nav.Link href="/stack" style={{color:'#555555'}}><b>FULL STACK DEVELOPMENT</b></Nav.Link>
      </Nav.Item>
      &nbsp; 
      <Nav.Item>
      <Nav.Link href="/science"  style={{color:'#555555'}} ><b>DATA SCIENCE</b></Nav.Link>
      </Nav.Item>
      &nbsp; 
      <Nav.Item>
      <Nav.Link href="/security" style={{color:'#555555'}} ><b>CYBER SECURITY</b></Nav.Link>
      </Nav.Item>
      &nbsp; 
      <Nav.Item>
      <Nav.Link href="/career" style={{color:'#555555'}} ><b>CAREER</b></Nav.Link>
      </Nav.Item>
      &nbsp; 
    </Nav>
    </div>


  </>
}

export default NavBar
