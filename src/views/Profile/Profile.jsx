import './Profile.css';

import { getQualificationsOptions, getYOEOptions, getProfessionalCategories } from '../../services/listServices';
function Profile() {
    function test(formData) {
        console.log(formData.get("qualification"));
    }

    const categories = getProfessionalCategories();
    const categoriesCol1 = categories.slice(0, categories.length / 2);
    const categoriesCol2 = categories.slice(categories.length / 2);
    return (
        <div className="profile-setup view">
            <form className="wrapper" action={test}>
                <div className="general">
                    <input name="name" type="text" placeholder="Name"></input>
                    <input name="email" type="text" placeholder="Email"></input>
                    <input name="phone" type="text" placeholder="Phone No."></input>
                    <select required name="yeo">
                        <option className="gray" value="" disable selected>Years of Experience</option>
                        {getYOEOptions().map(i => <option value={i}>{i}</option>)}
                    </select>
                    <select required name="qualification">
                        <option className="gray" value="" disable selected>Highest Qualification</option>
                        {getQualificationsOptions().map(i => <option value={i}>{i}</option>)}
                    </select>
                    <textarea placeholder='Description'></textarea>
                </div>
                <div className="fields">
                    <div className="sub-header">Fields</div>
                    <div className="list">
                    {categories.map(i =><div className='checkbox'><input type="checkbox"></input>{i}</div>)}
                </div>
                </div>
            </form>
            <button className="medium-button">Done</button>
        </div>
    )
}

export default Profile;
