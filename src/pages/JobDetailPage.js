import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/JobDetailPage.scss'; // Add your CSS for styling

const JobDetailPage = () => {
  const { id } = useParams(); // Get job id from the URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch job details from the API using the job id
    axios.get(`http://localhost:5000/jobs/${id}`)
      .then(response => {
        setJob(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching job details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <div className="job-detail-page">
      <h1>{job.title}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>

      <div className="job-actions">
        <Link to={`http://localhost:5000/jobs/apply/${job.id}`} className="btn-apply">Apply for this Job</Link>
      </div>
    </div>
  );
};

export default JobDetailPage;
