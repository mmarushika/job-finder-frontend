import "./DropDown.css";

function DropDown({name, value, placeholder, list, onChange}) {
    return (
        <select required name={name} value={value} onChange={onChange}>
            <option className="gray" value="" disable selected>{placeholder}</option>
            {list.map(i => <option key={i} name={i} value={i}>{i}</option>)}
        </select>
    );
}

export default DropDown;