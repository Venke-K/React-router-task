import React from 'react'
import Card from 'react-bootstrap/Card'

function SecurityData({security}) {
  return <>
  
  <Card  className = 'hoverable-card' style={{ width: '19rem', margin:'10px', display:'grid', marginTop:'25px' }}>
      <Card.Img variant="top"  src= {security.image} alt='mob.img' style={{height:'150px', width:'290px', marginRight:'9px'}} />
      <Card.Body>
        <Card.Title style={{display:'grid',   fontFamily:'sans-serif', fontSize:'17px'}} ><strong>{security.title}</strong></Card.Title>
       <br />
        <Card.Text style={{width:'180px'}}>By&nbsp; {security.name}</Card.Text>
        <h6>{security.date}</h6>
      </Card.Body>
    </Card>  
  
  </>
}

export default SecurityData
