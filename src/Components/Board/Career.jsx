import React from 'react'

function Career() {
  return <>
  
  <form className="career-form">
      <h2>Apply for a Position</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          required
        />
      </div>
      <div>
        <label htmlFor="experience">Years of Experience:</label>
        <input
          type="number"
          id="experience"
          required
        />
      </div>
      <div>
        <label htmlFor="skills">Skills:</label>
        <input
          type="text"
          id="skills"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
 
  
  </>
}

export default Career
