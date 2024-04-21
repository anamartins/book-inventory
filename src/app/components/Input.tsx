'use client';
const Input = ({ name, label }) => {
    return (
        <label>
            {label}
            <input name={name} />
        </label>
    );
};
export default Input;
