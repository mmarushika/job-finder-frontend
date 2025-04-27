import './Home.css';

import { useState, useEffect } from "react";
import { useLocation } from 'react-router';

import CheckBox from '../../components/CheckBox/CheckBox';
import DropDown from '../../components/DropDown/DropDown';
import FilterBar from './FilterBar/FilterBar';
import JobList from './JobList/JobList';

function Home({ user }) {
    const location = useLocation();
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            const res = await fetch(`http://localhost:8000/jobs/all`);
            const data = await res.json();
            setJobs(data);
            setFilteredJobs(data);
        }
        fetchJobs();
        console.log(jobs);
    }, [location.pathname]);

    return (
        <div className="view home">
            <div className="wrapper">
                <FilterBar username={user} setFilteredJobs={setFilteredJobs} allJobs={jobs}/>
                <JobList user={user} jobs={filteredJobs} />
            </div>
        </div>
    )
}

export default Home;