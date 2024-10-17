import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetailPage from './pages/JobDetailPage'
import PostJob from './pages/PostJob'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/jobs/:id' element={<JobDetailPage />} />
        <Route path='/post-job' element={<PostJob />} />
      </Routes>
    </Router>
  )
}

export default App