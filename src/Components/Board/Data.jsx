import React from 'react'
import Card from 'react-bootstrap/Card';

function Data ({datas}) {


  

  return <>

   <Card  className = 'hoverable-card' style={{ width: '19rem', margin:'15px', display:'grid' }}>
      <Card.Img variant="top"  src= {datas.image} alt='mob.img' style={{height:'150px', width:'290px', marginRight:'9px'}} />
      <Card.Body>
        <Card.Title style={{display:'grid',   fontFamily:'sans-serif', fontSize:'17px'}} ><strong>{datas.title}</strong></Card.Title>
       <br />
        <Card.Text style={{width:'180px'}}>By&nbsp; {datas.name}</Card.Text>
        <h6>{datas.date}</h6>
      </Card.Body>
    </Card>



  
  </>
}

export default Data
