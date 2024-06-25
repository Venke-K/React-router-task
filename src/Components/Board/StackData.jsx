import React from 'react'
import Card from 'react-bootstrap/Card';

function StackData({development}) {





  return<>


  
  <Card  className = 'hoverable-card' style={{ width: '19rem', margin:'10px', display:'grid', marginTop:'25px' }}>
      <Card.Img variant="top"  src= {development.image} alt='mob.img' style={{height:'150px', width:'290px', marginRight:'9px'}} />
      <Card.Body>
        <Card.Title style={{display:'grid',   fontFamily:'sans-serif', fontSize:'17px'}} ><strong>{development.title}</strong></Card.Title>
       <br />
        <Card.Text style={{width:'180px'}}>By&nbsp; {development.name}</Card.Text>
        <h6>{development.date}</h6>
      </Card.Body>
    </Card>
  
  
  </>
}

export default StackData
