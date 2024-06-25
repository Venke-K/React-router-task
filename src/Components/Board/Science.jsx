import React from 'react'
import ScienceData  from './ScienceData'

function Science() {

let science = [
    
    {
        image: "Img/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
        title: "Top 10 High Paying Non Coding Jobs in Data Science 2024",
        name: "Meghana D",
        date: "19 Mar, 2024"
      },
  
      {
        image: "Img/Real-World-Data-Science-Examples-2048x1072.webp",
        title: "12 Real-World Data Science Example: Power of Data Science",
        name: "Lukesh S",
        date: "25 Mar, 2024"
      },
  
      {
        image: "Img/5.-data-science-2048x1072.png",
        title: "Can a Commerce Student Do Data Science?",
        name: "Saskshi Priyadharshini",
        date: "16 Apr, 2024"
      },
  
      {
        image: "Img/image-4.webp",
        title: "Roles and Responsibilities of a Data Scientist",
        name: "Jaishree Tomar",
        date: "16 Apr, 2024"
      },
  
      {
        image: "Img/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
        title: "Top Product Based Companies For Data Scientists in 2024",
        name: "Jaishree Tomar",
        date: "26 Mar, 2024"
      },
  
      {
        image: "Img/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
        title: "10 Best Data Science Online Course For Beginners| 2024",
        name: "Srinithi Shankar",
        date: "02 Apr, 2024"
      },
  
      {
        image: "Img/How-Long-Would-It-Take-to-Learn-Data-Science-2048x1072.png",
        title: "How Long Would it Take to Learn Data Science ?",
        name: "Meghana D",
        date: "16 Apr, 2024"
      },
  
      {
        image: "Img/Everything-about-Data-Scientist-Salary-in-India-2023-2048x1072.png",
        title: "Everything about Data Scientist Salary in India | 2024",
        name: "Srinithi Shankar",
        date: "02 Apr, 2024"
      },
  
      {
        image: "Img/paper-analysis-2-2048x1365.jpg",
        title: "How to become a Data Scientist after Mechanical Engineering", 
        name: "Lahari Chandana",
        date: "16 Apr, 2024"
      },
]


  return<>
  
  <div className= 'row' style={{justifyContent:'center'}}>
   {
    science.map((e,i)=>{
      return <ScienceData science ={e} key={i}/>
    })
   }
   
  
  </div>
  
  </>
}

export default Science
