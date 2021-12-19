import React, { useState } from 'react'
import { useNavigate } from 'react-router'

// Components

//Services
import { findJob } from '../../services/jobService'

  const Findjobs = (props) => {
  const navigate = useNavigate()

  const searchJob = async (e) => {
    e.preventDefault()
    console.log(e.target.value)
    try {
      const jobs = await findJob(e.target.value)
      console.log(jobs) 
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="layout">
      <select name="jobs" onChange={searchJob}>
        <option value="">select job</option>
        <option value="IT">IT</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Data science">Data science</option>
    </select>

    </div>
  )
}

export default Findjobs
