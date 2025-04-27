import './Profile.css';

import {useState, useEffect} from 'react';

import { getQualificationsOptions, getYOEOptions, getProfessionalCategories } from '../../services/listServices';
import { get, post } from '../../services/fetchServices';

import CheckBox from '../../components/CheckBox/CheckBox';
import DropDown from '../../components/DropDown/DropDown';

function Profile({username}) {
    const [update, setUpdate] = useState(0);
    const [profile, setProfile] = useState({
        name : "",
        email : "",
        city : "",
        phone_no : "",
        yoe : "",
        qualification : "",
        description : "",
        fields : null
    });

    useEffect(() => {
        async function fetchProfile() {
            const data = await get(`http://localhost:8000/profile?user=${username}`);
            console.log(data);
            setProfile(data);
        }
        fetchProfile();
    }, [update, location.pathname]);
    function updateProfile(formData) {
        const data = {
            username: username,
            name : formData.get("name"),
            email : formData.get("name"),
            phone_no : formData.get("phone_no"),
            city : formData.get("city"),
            yoe : formData.get("yoe"),
            qualification : formData.get("qualification"),
            description : formData.get("description"),
            fields : formData.getAll("fields")
        }
        console.log(data)
        post("http://localhost:8000/profile/update", data)
            .then(setUpdate(x => x + 1));
        setUpdate(x => x + 1);
    }

    function updateInput(e) {
        setProfile({...profile, [e.target.name] : e.target.value})
    }

    const categories = getProfessionalCategories();

    return (
        <div className="profile-setup view">
            <form className="wrapper" action={updateProfile}>
                <div className="general">
                    <input name="name" value={profile.name} type="text" placeholder="Name" onChange={updateInput}></input>
                    <input name="email" value={profile.email} type="text" placeholder="Email" onChange={updateInput} ></input>
                    <input name="phone_no" value={profile.phone_no}type="text" placeholder="Phone No." onChange={updateInput}></input>
                    <input name="city" value={profile.city}type="text" placeholder="City" onChange={updateInput}></input>
                    <DropDown name="yoe" value={profile.yoe} placeholder={'Years of Experience'} 
                        list={getYOEOptions()} onChange={updateInput} />
                    <DropDown name="qualification" value={profile.qualification} placeholder={'Highest Qualification'} 
                        list={getQualificationsOptions()} onChange={updateInput} />
                    <textarea placeholder='Description' name="description" value={profile.description} onChange={updateInput}></textarea>
                </div>
                <div className="fields">
                    <div className="sub-header">Fields</div>
                    <div className="list">
                        {profile.fields != null ? getProfessionalCategories().map(i => <CheckBox name="fields" value={i} 
                            isChecked={profile.fields.includes(i)}/>) 
                        : <></>}
                    </div>
                    <div className="done-wrapper">
                        <button className="medium-button left">Done</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Profile;

// https://stackoverflow.com/questions/68448822/react-input-dont-change-when-i-set-a-initial-value