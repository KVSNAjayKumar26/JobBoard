import axios from 'axios';

import React, { useState } from 'react'
import '../styles/forms.scss';

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/jobs', formData).then((response) => {
      alert('Job Posted successfully!')
    });
  };
  return (
    <form className='post-job-form' onSubmit={handleSubmit}>
      <input
      type='text'
      placeholder='Job Title'
      value={formData.title}
      onChange={(e) => setFormData({ ...formData, title: e.target.value})}
      required
      />
      <input
      type='text'
      placeholder='Company'
      value={formData.company}
      onChange={(e) => setFormData({ ...formData, company: e.target.value})}
      required
      />
      <input
      type='text'
      placeholder='Location'
      value={formData.location}
      onChange={(e) => setFormData({ ...formData, location: e.target.value})}
      required
      />
      <textarea
      placeholder='Job Description'
      value={formData.description}
      onChange={(e) => setFormData({ ...formData, description: e.target.value})}
      required
      />
      <button type='submit'>Post Job</button>
    </form>
  )
}

export default PostJobForm