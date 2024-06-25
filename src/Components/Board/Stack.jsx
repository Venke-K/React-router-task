import React from 'react'
import StackData  from './StackData'


function Stack() {

let development = [
  {
    image: "Img/person-front-computer-working-html.jpg",
    title: "Best Full-Stack Development Project Ideas in 2024",
    name: "Isha Sharma",
    date: "14 Jun, 2024"
   
  },

  {
    image: "Img/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
    title: "How Long It Would Take to Be a Full Stack Developer ?",
    name: "Meghana D",
    date: "26 Mar, 2024"
  },

  {
    image: "Img/What-Is-Apache-1.jpg",
    title: "How Does Apache Work ? A detailed introduction to Apache",
    name: "Tushar Vinocha",
    date: "26 Mar, 2024"
  },

  {
    image: "Img/DBMS1.webp",
    title: "10 Best Database Management Systems For Software Developers",
    name: "Isha Sharma",
    date: "22 March, 2024"
  },

  {
    image: "Img/Full-Stack-Developer-course-syllabus.webp",
    title: "Hot Topics That You Need To know In Full Stack Developers Syllabus| 2024",
    name: "Archana",
    date: "26 Mar, 2024"
  },

  {
    image: "Img/html-css-collage-concept-with-person.jpg",
    title: "Top 10 Full Stack Developer Frameworks in 2024",
    name: "Isha Sharma",
    date: "16 Apr, 2024"
  },

  {
    image: "Img/react-768x402.jpg",
    title: "6 Essential Prerequisites For Learning RaectJS",
    name: "Ramkumar",
    date: "25 Mar, 2024"
  },

  {
    image: "Img/1.jpg",
    title: "Best Web Development Roadmap For Beginners 2024",
    name: "Isha Sharma",
    date: "16 Apr, 2024"
  },

  {
    image: "Img/full_stack_developer_roadmap_in_2024.webp",
    title: "Full Stack Developer Roadmap: A Complete Guide [2024]",
    name: "Meghana D",
    date: "19 Mar, 2024"
  },
]


  return <>
  
   
  
  <div className= 'row' style={{justifyContent:'center'}}>
   {
    development.map((e,i)=>{
      return <StackData development ={e} key={i}/>
    })
   }
   
  
  </div>

  

   
  
  
  </>
}

export default Stack
