import axios from 'axios';
import React, { useEffect, useState } from 'react'
import JobCard from './JobCard';
import '../styles/JobCard.scss';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/jobs').then(response => setJobs(response.data));
    }, []);
  return (
    <div className='job-list'>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export default JobList