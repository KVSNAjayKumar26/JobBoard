import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../styles/jobCard.scss';
const JobCard = ({ job }) => {
  return (
    <motion.div
    className='job-card'
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
    >
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <Link to={`http://localhost:5000/jobs/${job.id}`} className='view-details'>
      View Details
      </Link>
    </motion.div>
  );
};

export default JobCard;