import React from 'react'
//import JobsGal from '../App/JobsGal/JobsGal'
import Search from '../App/JobsGal/Search';
import initialDetails from '../App/data/initialDetails';
import JCard from '../App/Card/JCard';

function Jobs() {
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <JCard/>
    <Search details={initialDetails}/>
  </div>
  )
}

export default Jobs