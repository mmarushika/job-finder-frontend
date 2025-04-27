import Field from "../Field/Field";
import { post } from "../../services/fetchServices";
import { useState } from "react";
import "./JobListing.css";

function JobListing({ job, user, mode }) {
    const [deleted, setDeleted] = useState(false);
    function deleteJob() {
        post(`http://localhost:8000/jobs/delete`, { username: user, job_id: job.id });
        setDeleted(true);
    }
    return (

        <>
            {deleted ? <></> :
                <div className="job-wrapper">
                    <div className="job-info">
                        <div className="largest"><b>{job.title}</b></div>
                        <div className="larger">{job.employer_name}</div>
                        <div className="gray">{job.employer_email}</div>
                        <div className="gray">{job.employer_phone_no}</div>
                        <br></br>
                        <div>{job.yoe}</div>
                        <div>{job.qualification}</div>
                        <div>{job.city}</div>
                        <div>{job.description}</div>
                        <div className="scroll-x">
                            {job.fields.map(i => <Field name={i} />)}
                        </div>
                        <div className="job-button-wrapper">
                            {mode == "poster" ?
                                <button className="medium-button right" onClick={deleteJob}>Delete</button> : <></>
                            }
                        </div>
                    </div>

                </div>
            }
        </>
    );
}

export default JobListing;