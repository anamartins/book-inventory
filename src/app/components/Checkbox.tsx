'use client';
const Checkbox = ({ name, label }) => {
    return (
        <label>
            {label}
            <input name={name} type="checkbox" />
        </label>
    );
};
export default Checkbox;
