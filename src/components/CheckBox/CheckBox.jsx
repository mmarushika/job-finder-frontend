import './CheckBox.css';

function CheckBox({name, value, isChecked, onChange}) {
    return (
        <div className='checkbox'>
            <input type="checkbox" value={value} name={name} defaultChecked={isChecked} onChange={onChange}></input>
            {value}
        </div>
    )
}

export default CheckBox;