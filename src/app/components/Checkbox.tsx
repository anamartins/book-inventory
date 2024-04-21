'use client'
const Checkbox = ({ name, label }) => {
    return (
        <div>
            <label>
                {label}
                <input name={name} type="checkbox" />
            </label>
        </div>
    )
}
export default Checkbox
