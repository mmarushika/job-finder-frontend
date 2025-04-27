import "./CurrentJobListings.css";

import {useState, useEffect } from "react";
import { useLocation } from "react-router";

import { get } from "../../../services/fetchServices";
import JobListing from "../../../components/JobListing/JobListing";

function CurrentJobListings({user, currentJobListings}) {
    return (
        <div className="current-job-listings">
            <div className="sub-header">Jobs Posted</div>
            <div className="list">
                {currentJobListings.map(i => <JobListing job={i} user={user} mode="poster"/>)}
            </div>
        </div>
    );
}

export default CurrentJobListings;