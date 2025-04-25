

import {useState, useEffect} from 'react';
import JobListing from './JobListing/JobListing';

function JobList() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            const res = await fetch(`http://localhost:8000/jobs`);
            const data = await res.json();
            setJobs(data);
        }
        fetchJobs();
        console.log(jobs);
    }, []);
    return (
        jobs.map(i => <JobListing data={i}></JobListing>)
    )
}

export default JobList;