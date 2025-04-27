import './UserJobListings.css';

import {useState, useEffect } from "react";
import { get } from '../../services/fetchServices';
import {useLocation} from "react-router";
import PostJobListing from './PostJobListing/PostJobListing';
import CurrentJobListings from './CurrentJobListings/CurrentJobListings';

function UserJobListings({user}) {

    const location = useLocation();
    const [currentJobListings, setCurrentJobListings] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        async function fetchCurrentJobListings() {
            const data = await get(`http://localhost:8000/jobs?user=${user}`);
            console.log(data);
            setCurrentJobListings([...data]);
        }
        fetchCurrentJobListings();
    }, [location.pathname, update]);

    return (
        <div className="user-job-listings view">
            <PostJobListing user={user} setUpdate={setUpdate}/>
            <CurrentJobListings user={user} currentJobListings={currentJobListings}/>
        </div>
    )
}

export default UserJobListings;