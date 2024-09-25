'use client';
import './FormInput.scss';

interface FormInputProps {
    name: string;
    label: string;
    value: string | number;
    type?: string;
    onChange: Function;
}

const FormInput = ({ name, label, value, type, onChange }: FormInputProps) => {
    function onInputChange(event) {
        onChange(name, event.target.value);
    }

    return (
        <label className="input-label">
            {label}
            <input
                name={name}
                type={type}
                value={value}
                className="generic-input"
                onInput={onInputChange}
            />
        </label>
    );
};
export default FormInput;
