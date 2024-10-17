import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Jobs.scss'; // Custom styling for the Jobs component

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch jobs from the API
    axios.get('http://localhost:5000/jobs')
      .then(response => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching jobs.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="jobs-page">
      <h1>Available Jobs</h1>
      <div className="jobs-container">
        {jobs.length > 0 ? (
          jobs.map(job => (
            <div className="job-card" key={job.id}>
              <h2>{job.title}</h2>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <Link to={`http://localhost:5000/jobs/${job.id}`} className="btn-view-details">View Details</Link>
            </div>
          ))
        ) : (
          <p>No jobs available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
