import React from 'react'
import Data from './Data'



function Home() {


let datas = [


  //Full Stack Development///

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


  //Data Science//



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


  //Cyber Security//

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



  return<>
  
  
 <div className= 'row' style={{justifyContent:'center'}}>
   {
    datas.map((e,i)=>{
      return <Data datas ={e} key={i}/>
    })
   }
   
  
  </div>





  
  </>
}

export default Home

















// let datas = [


//   //Full Stack Development///

//     {
//       image: "Img/person-front-computer-working-html.jpg",
//       title: "Best Full-Stack Development Project Ideas in 2024",
//       name: "Isha Sharma",
//       date: "14 Jun 2024"
     
//     },
  
//     {
//       image: "Img/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
//       title: "How Long It Would Take to Be a Full Stack Developer ?",
//       name: "Meghana D",
//       date: "26 Mar 2024"
//     },
  
//     {
//       image: "Img/What-Is-Apache-1.jpg",
//       title: "How Does Apache Work ? A detailed introduction to Apache",
//       name: "Tushar Vinocha",
//       date: "26 Mar 2024"
//     },
  
//     {
//       image: "Img/DBMS1.webp",
//       title: "10 Best Database Management Systems For Software Developers",
//       name: "Isha Sharma",
//       date: "22 March 2024"
//     },
  
//     {
//       image: "Img/Full-Stack-Developer-course-syllabus.webp",
//       title: "Hot Topics That You Need To know In Full Stack Developers Syllabus| 2024",
//       name: "Archana",
//       date: "26 Mar 2024"
//     },
  
//     {
//       image: "Img/html-css-collage-concept-with-person.jpg",
//       title: "Top 10 Full Stack Developer Frameworks in 2024",
//       name: "Isha Sharma",
//       date: "16 Apr 2024"
//     },
  
//     {
//       image: "Img/react-768x402.jpg",
//       title: "6 Essential Prerequisites For Learning RaectJS",
//       name: "Ramkumar",
//       date: "25 Mar 2024"
//     },
  
//     {
//       image: "Img/1.jpg",
//       title: "Best Web Development Roadmap For Beginners 2024",
//       name: "Isha Sharma",
//       date: "16 Apr 2024"
//     },
  
//     {
//       image: "Img/full_stack_developer_roadmap_in_2024.webp",
//       title: "Full Stack Developer Roadmap: A Complete Guide [2024]",
//       name: "Meghana D",
//       date: "19 Mar 2024"
//     },


//   //Data Science//



//     {
//       image: "Img/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
//       title: "Top 10 High Paying Non Coding Jobs in Data Science 2024",
//       name: "Meghana D",
//       date: "19 Mar 2024"
//     },

//     {
//       image: "Img/Real-World-Data-Science-Examples-2048x1072.webp",
//       title: "12 Real-World Data Science Example: Power of Data Science",
//       name: "Lukesh S",
//       date: "25 Mar 2024"
//     },

//     {
//       image: "Img/5.-data-science-2048x1072.png",
//       title: "Can a Commerce Student Do Data Science?",
//       name: "Saskshi Priyadharshini",
//       date: "16 Apr 2024"
//     },

//     {
//       image: "Img/image-4.webp",
//       title: "Roles and Responsibilities of a Data Scientist",
//       name: "Jaishree Tomar",
//       date: "16 Apr 2024"
//     },

//     {
//       image: "Img/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
//       title: "Top Product Based Companies For Data Scientists in 2024",
//       name: "Jaishree Tomar",
//       date: "26 Mar 2024"
//     },

//     {
//       image: "Img/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
//       title: "10 Best Data Science Online Course For Beginners| 2024",
//       name: "Srinithi Shankar",
//       date: "02 Apr 2024"
//     },

//     {
//       image: "Img/How-Long-Would-It-Take-to-Learn-Data-Science-2048x1072.png",
//       title: "How Long Would it Take to Learn Data Science ?",
//       name: "Meghana D",
//       date: "16 Apr 2024"
//     },

//     {
//       image: "Img/Everything-about-Data-Scientist-Salary-in-India-2023-2048x1072.png",
//       title: "Everything about Data Scientist Salary in India | 2024",
//       name: "Srinithi Shankar",
//       date: "02 Apr 2024"
//     },

//     {
//       image: "Img/paper-analysis-2-2048x1365.jpg",
//       title: "How to become a Data Scientist after Mechanical Engineering", 
//       name: "Lahari Chandana",
//       date: "16 Apr 2024"
//     },


//   //Cyber Security//

//   {
//     image: "Img/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.webp",
//     title: "How to become a Data Scientist after Mechanical Engineering", 
//     name: "Lahari Chandana",
//     date: "16 Apr 2024"
//   },

//   {
//     image: "Img/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
//     title: "How to become a Data Scientist after Mechanical Engineering", 
//     name: "Lahari Chandana",
//     date: "16 Apr 2024"
//   },

//   {
//     image: "Img/maxresdefault.jpg",
//     title: "How to become a Data Scientist after Mechanical Engineering", 
//     name: "Lahari Chandana",
//     date: "16 Apr 2024"
//   },

//   {
//     image: "Img/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
//     title: "How to become a Data Scientist after Mechanical Engineering", 
//     name: "Lahari Chandana",
//     date: "16 Apr 2024"
//   },

//   {
//     image: "Img/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.webp",
//     title: "How to become a Data Scientist after Mechanical Engineering", 
//     name: "Lahari Chandana",
//     date: "16 Apr 2024"
//   },

//   {
//     image: "Img/cybersecuity-.gif",
//     title: "How to become a Data Scientist after Mechanical Engineering", 
//     name: "Lahari Chandana",
//     date: "16 Apr 2024"
//   },

//   {
//     image: "Img/8bfd01c18be1b5059bc0d7770d9dabf1.webp",
//     title: "How to become a Data Scientist after Mechanical Engineering", 
//     name: "Lahari Chandana",
//     date: "16 Apr 2024"
//   },

//   {
//     image: "Img/The-Ultimate-Cybersecurity-Roadmap-for-Beginners.webp",
//     title: "How to become a Data Scientist after Mechanical Engineering", 
//     name: "Lahari Chandana",
//     date: "16 Apr 2024"
//   },

//   {
//     image: "Img/Blog-9-768x402.webp",
//     title: "How to become a Data Scientist after Mechanical Engineering", 
//     name: "Lahari Chandana",
//     date: "16 Apr 2024"
//   },



//   ]