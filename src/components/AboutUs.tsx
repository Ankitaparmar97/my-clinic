// src/App.jsx
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
function AboutUs() {
  return (
    <div>
      <h2 style={{ color: 'blue', display: 'flex' }}>About BHAVNAGAR DENTAL AND IMPLANT HOSPITAL</h2>
      <div className='about-container'>
      <p className='intro' >
        The morning sun filtered through the tall pine trees, casting golden patterns on the forest floor. Birds chirped overhead as a soft breeze rustled the leaves, creating a gentle, rhythmic sound. A narrow path wound its way through the woods, inviting anyone passing by to explore its quiet mysteries. The scent of damp earth and wildflowers filled the air, grounding every step in nature’s calm. It was one of those rare moments where time seemed to pause, allowing the world to simply breathe.
      </p>
      <div className='image-profile'>

      </div>
      </div>
      <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
      Delete
    </Button>
    </div>
  );
}

export default AboutUs;
