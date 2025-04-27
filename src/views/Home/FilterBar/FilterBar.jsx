import "./FilterBar.css";

import { useState, useEffect } from 'react';

import { get } from "../../../services/fetchServices";
import CheckBox from "../../../components/CheckBox/CheckBox";
import DropDown from "../../../components/DropDown/DropDown";

import {
    getFilterOptions, getYOEOptions, getQualificationsOptions,
    getProfessionalCategories
} from "../../../services/listServices";
function FilterBar({ username, setFilteredJobs, allJobs }) {
    const [update, setUpdate] = useState(0);
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        city: "",
        phone_no: "",
        yoe: "",
        qualification: "",
        description: "",
        fields: null
    });

    const [choices, setChoices] = useState({
        filterMode: "",
        city: "",
        yoe: "",
        qualification: "",
        fields: []
    });

    useEffect(() => {
        async function fetchProfile() {
            const data = await get(`http://localhost:8000/profile?user=${username}`);
            setProfile(data);
        }
        fetchProfile();
    }, [update, location.pathname]);


    useEffect(() => {
        if(choices.filterMode == "All" ) {
            setFilteredJobs(allJobs);
            return;
        }
        let filteredJobs = allJobs.filter(job => {
            return choices.fields.some(field => job.fields.includes(field))
        });
        console.log(filteredJobs);
        filteredJobs = filteredJobs.filter(job => 
            (job.city == choices.city && (job.qualification == choices.qualification)));
        console.log(filteredJobs);
        setFilteredJobs(filteredJobs);
    }, [choices]);

    function updateInput(e) {
        setChoices({ ...choices, [e.target.name]: e.target.value })
    }

    function updateFilter(e) {

        if(e.target.value == "All") {
            setChoices({
                filterMode: "All",
                city: "",
                yoe: "",
                qualification: "",
                fields: []
            });
            setFilteredJobs(allJobs);
        }else if (e.target.value == "User Profile") {
            setChoices({
                filterMode: "User Profile",
                city: profile.city,
                yoe: profile.yoe,
                qualification: profile.qualification,
                fields: profile.fields
            });
        } else {
            setChoices({
                filterMode: "Custom",
                city: "",
                yoe: "",
                qualification: "",
                fields: []
            });
        }
    }

    function updateFields(e) {
        console.log(e.target.value);
        if(choices.fields.includes(e.target.value)) {
            setChoices({...choices, ["fields"] : choices.fields.filter(i => i != e.target.value)});
        } else {
            setChoices({...choices, ["fields"] : [...choices.fields, e.target.value]});
        }
    }
    return (
        <div className="filter-bar">
            <DropDown name="filterMode" value={choices.filterMode} placeholder={'Filter by...'}
                list={getFilterOptions()} onChange={updateFilter} />
            <input name="city" value={choices.city} type="text" placeholder="City" onChange={updateInput}></input>
            <DropDown name="yoe" value={choices.yoe} placeholder={'Years of Experience'}
                list={getYOEOptions()} onChange={updateInput} />
            <DropDown name="qualification" value={choices.qualification} placeholder={'Highest Qualification'}
                list={getQualificationsOptions()} onChange={updateInput} />
            <div className="sub-header">Fields</div>
            <div className="list">
                {choices.filterMode == "User Profile" ? 
                    profile.fields != null ? getProfessionalCategories().map(i => <CheckBox name="fields" value={i} 
                        isChecked={profile.fields.includes(i)} onChange={updateFields}/>) 
                : <></>
                    : 
                getProfessionalCategories().map(i => <CheckBox name="fields" value={i}
                    isChecked={false} onChange={updateFields}/>)
                }
            </div>
        </div>
    )
}

export default FilterBar;