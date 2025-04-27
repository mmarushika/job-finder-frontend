import "./PostJobListing.css";

import {useState} from "react";

import { post } from "../../../services/fetchServices";
import DropDown from "../../../components/DropDown/DropDown";
import CheckBox from "../../../components/CheckBox/CheckBox";
import { getYOEOptions,getProfessionalCategories, getQualificationsOptions } from "../../../services/listServices";
import generateId from "../../../utils/utils";

function PostJobListing({user, setUpdate}) {
    const [jobListing, setJobListing] = useState({
        title : "",
        employer_name : "",
        employer_email : "",
        employer_phone_no : "",
        city : "", 
        yoe : "",
        qualification : "",
        description : "",
        fields : []
    });
    function updateJobListing(formData) {
        const data = {
            poster : user,
            id : generateId(),
            timestamp : JSON.stringify(new Date()),
            title: formData.get("title"),
            employer_name: formData.get("employer_name"),
            employer_email: formData.get("employer_email"),
            employer_phone_no: formData.get("employer_phone_no"),
            city: formData.get("city"),
            yoe: formData.get("yoe"),
            qualification: formData.get("qualification"),
            description: formData.get("description"),
            fields: formData.getAll("fields")
        }
        console.log(data)
        post("http://localhost:8000/jobs/post", data)
            .then(setUpdate(x => x + 1));
        setUpdate(x => x + 1);
    }

    function updateInput(e) {
        setJobListing({ ...jobListing, [e.target.name]: e.target.value })
    }

    return (
        <div className="post-job-listing">
            <form className="wrapper" action={updateJobListing}>
                <div className="general">
                <input name="title" value={jobListing.title} type="text" placeholder="Job Title" onChange={updateInput}></input>
                    <input name="employer_name" value={jobListing.employer_name} type="text" placeholder="Employer Name" onChange={updateInput}></input>
                    <input name="employer_email" value={jobListing.email} type="text" placeholder="Employer Email" onChange={updateInput} ></input>
                    <input name="employer_phone_no" value={jobListing.phone} type="text" placeholder="Employer Phone No." onChange={updateInput}></input>
                    <input name="city" value={jobListing.city}type="text" placeholder="City" onChange={updateInput}></input>
                    <DropDown name="yoe" value={jobListing.yoe} placeholder={'Minimum Years of Experience'}
                        list={getYOEOptions()} onChange={updateInput} />
                    <DropDown name="qualification" value={jobListing.qualification} placeholder={'Minimum Qualification'}
                        list={getQualificationsOptions()} onChange={updateInput} />
                    <textarea placeholder='Job Description' name="description" value={jobListing.description} onChange={updateInput}></textarea>
                </div>
                <div className="fields">
                    <div className="sub-header">Fields</div>
                    <div className="list">
                        {getProfessionalCategories().map(i => <CheckBox name="fields" value={i} isChecked={jobListing.fields.includes(i)
                        } />)}
                    </div>
                    <div className="done-wrapper">
                        <button className="medium-button left">Post</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PostJobListing;