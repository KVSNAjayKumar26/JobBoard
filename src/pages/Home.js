import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/HomePage.scss'; // Add your CSS here for styling

const HomePage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job listings from the API
    axios.get('http://localhost:5000/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
      });
  }, []);

  return (
    <div className="home-page">
      <header className="header">
        <h1>Job Board</h1>
        <nav className="nav-links">
          <Link to="/post-job" className="btn-post-job">Post a Job</Link>
        </nav>
      </header>

      <section className="job-listings">
        <h2>Available Jobs</h2>
        {jobs.length > 0 ? (
          <div className="jobs-container">
            {jobs.map(job => (
              <div className="job-card" key={job.id}>
                <h3>{job.title}</h3>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p>{job.description}</p>
                <Link to={`/jobs/${job.id}`} className="btn-apply">View & Apply</Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No job listings available at the moment.</p>
        )}
      </section>
    </div>
  );
};

export default HomePage;
