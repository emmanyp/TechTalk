import React, { useState } from 'react'
import { useNavigate } from 'react-router'

// Components
import JobCard from './JobCrad'
//Services
import * as jobService  from '../../services/jobService'

  const Jobs = (props) => {
  // const navigate = useNavigate()

  const searchJob = async (e) => {
    e.preventDefault()
    console.log(e.target.value)
    try {
      const jobs = await jobService.getAllJobs(e.target.value)
      console.log(jobs) 
    } catch (error) {
      throw error
    }
  }

  // const jobList= jobs.map((ele, idx)=>{
  //   return(
  //     // <JobCard 
  //     <h1>Jobs here</h1>
  //     // />
  //   )
  // })

  return (
    <div className="layout">
    <select name="jobs" onChange={searchJob}>
      <option value="">select job</option>
      <option value="IT">IT</option>
      <option value="Software Engineer">Software Engineer</option>
    </select>
   
    
    </div>
  )
}

export default Jobs