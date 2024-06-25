import React from 'react'
import SecurityData from './SecurityData'

function Security() {

let security = [
    {
        image: "Img/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.webp",
        title: "Cyber Security Vs Ethical Hacking: Top 10 Differences", 
        name: "Tushar Vinocha",
        date: "16 Apr, 2024"
      },
    
      {
        image: "Img/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        title: "Non-Coding Jobs on Cybersecurity: A Comprehensive Guide", 
        name: "JaiShree Tomar",
        date: "26 Mar, 2024"
      },
    
      {
        image: "Img/maxresdefault.jpg",
        title: "Cybersecurity Vs Artificial Intelligence | Better Career", 
        name: "Admin",
        date: "16 Apr, 2024"
      },
    
      {
        image: "Img/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
        title: "What is Hacking ? Types of Hacking & More", 
        name: "Meghana D",
        date: "25 Mar, 2024"
      },
    
      {
        image: "Img/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.webp",
        title: "8 Different Types Of Cybersecurity and Threats Involved", 
        name: "Tushar Vinocha",
        date: "08 Sep, 2023"
      },
    
      {
        image: "Img/cybersecuity-.gif",
        title: "What is Cybersecurity? Importance and its uses & the growing challenge...", 
        name: "Tushar Vinocha",
        date: "04 Oct, 2023"
      },
    
      {
        image: "Img/8bfd01c18be1b5059bc0d7770d9dabf1.webp",
        title: "Is Coding required for Cybersecurity ? if Yes , how crucial is coding for cyb...", 
        name: "Tushar Vinocha",
        date: "25 Mar, 2024"
      },
    
      {
        image: "Img/The-Ultimate-Cybersecurity-Roadmap-for-Beginners.webp",
        title: "The Ultimate Cybersecurity Roadmap for Beginners", 
        name: "Srinithi Sankar",
        date: "23 Mar, 2024"
      },
    
      {
        image: "Img/Blog-9-768x402.webp",
        title: "The Cybersecurity Surge : 5 Must-Have Cybersecurity Certifications", 
        name: "Tushar Vinocha",
        date: "25 Mar, 2024"
      },
    
]    
    


  return <>
  
  <div className= 'row' style={{justifyContent:'center'}}>
   {
    security.map((e,i)=>{
      return <SecurityData security ={e} key={i}/>
    })
   }
   
  
  </div>  
  
  
  </>
}

export default Security
