import React from 'react'

function Career() {
  return <>
  
 

  <header className="header">
    <h1>Careers at Our Educational Institute</h1>
    <p>Join us in shaping the future of education. Inspire, teach, and grow with us.</p>
  </header>

  <section className="about-us">
    <h2>About Us</h2>
    <p>Our educational institute is dedicated to fostering a vibrant learning environment. We believe in the power of education to transform lives and are committed to providing high-quality education to our students.</p>
  </section>

  <section className="team-introduction">
    <h2>Meet Our Team</h2>
    <div className="team-members">
      <div className="team-member">
        <img src="team-member1.jpg" alt="Team Member 1"/>
        <h3>Dr. Jane Doe</h3>
        <p>Senior Developer</p>
      </div>
      <div className="team-member">
        <img src="team-member2.jpg" alt="Team Member 2"/>
        <h3>Mr. John Smith</h3>
        <p>Senior Developer</p>
      </div>
      {/* <!-- Add more team members as needed --> */}
    </div>
  </section>

  <section className="job-openings">
    <h2>Current Job Openings</h2>
    <div className="job-listing">
      <h3>Web Developer</h3>
      <p>Location: On-site</p>
      <p>Responsibilities: Builds, designs, and maintains all websites and software applications. Regulates exposure to business stakeholders and executive management as well as other authorities.... </p>
      <button className="apply-button">Apply Now</button>
    </div>
    <div className="job-listing">
      <h3>Software Engineer</h3>
      <p>Location: On-site</p>
      <p>Responsibilities: Research, Design and write new software programs (e.g. business applications or computer games) and computer operating systems.  evaluate the software and systems that make computers and hardware work. develop existing programs by analysing and identifying areas for modification....</p>
      <button className="apply-button">Apply Now</button>
    </div>
    {/* <!-- Add more job listings as needed --> */}
  </section>


  <section className="benefits">
    <h2>Benefits and Perks</h2>
    <ul>
      <li>Hybrid</li>
      <li>Health insurance</li>
      <li>Professional development opportunities</li>
      <li>Infrastructure</li>
      {/* <!-- Add more benefits as needed --> */}
    </ul>
  </section>

  <section className="application-process">
    <h2>Application Process</h2>
    <p>To apply, click on the Apply Now button next to the job listing. Youll be directed to our application form. Once submitted, our HR team will review your application and get back to you within a week.</p>
  </section>
  
  </>
}

export default Career
