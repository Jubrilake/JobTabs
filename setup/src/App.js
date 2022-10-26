import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [jobs,setJobs]= useState([])
  const [loading, setLoading] = useState(true)
   const [value, setValue] = useState(0)

   const fetchJobs = async () => {
    setLoading(true)
     const res = await fetch(url)
     const newJobs = await res.json()
     setJobs(newJobs)
     setLoading(false)
     console.log(newJobs)
   }

   useEffect(()=>{
    fetchJobs()
   },[])
  
   if(loading){
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
   }
   const {company,dates,duties,title} = jobs[value]
   const handleClick = (index) => {
    setValue(index)

   }
  
  return <section className='section'>
    <div className="title">
      <h2>experince</h2>
      <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* {btn container} */}
        <div className="btn-container">
          {
            jobs.map((job,index) => {
              console.log(index)
              return <button className={`job-btn ${index === value && "active-btn"}`} onClick={()=> handleClick(index)} key={job.id}>
                {job.company}
              </button>
            })
          }
        </div>
        {/* {job info} */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty,index) => {
            return <div key={index} className='job-desc'>
              <FaAngleDoubleRight  className='job-icon'/>
              <p>{duty}</p>

            </div>

          })}
        </article>
      </div>
   

           
        </section>
}

export default App
