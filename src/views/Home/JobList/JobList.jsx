import "./JobList.css";
import {useState, useEffect} from 'react';
import JobListing from '../../../components/JobListing/JobListing';

function JobList({user, jobs}) {
    return (
        <div className="job-list">
            {jobs.map(i => <JobListing key={i.poster} job={i} user={user} mode="viewer"></JobListing>)}
        </div>
    )
}

export default JobList;