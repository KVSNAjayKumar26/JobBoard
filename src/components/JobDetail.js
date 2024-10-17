import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/JobDetail.scss'
const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/jobs/${id}`).then(response => setJob(response.data));
  }, [id])

  if (!job) return <div>Loading...</div>
  return (
    <div className='job-detail'>
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
      <button className='apply-btn'>Apply Now</button>
    </div>
  );
};

export default JobDetail;