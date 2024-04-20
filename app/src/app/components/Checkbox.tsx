"use client"
const Checkbox = ({name, label}) => {
    return (
        <div>
            <label htmlFor={name}>{label}<input type="checkbox"/></label>
        </div>
    )
}
export default Checkbox;