import React from 'react';
import Search from './Search';
import initialDetails from '../data/initialDetails';
import './jobgal.css'

function JobsGal() {
    return (
      <div className="tc bg-green ma0 pa4 min-vh-100">
        <Search details={initialDetails}/>
      </div>
    );
  }
  
  export default JobsGal;