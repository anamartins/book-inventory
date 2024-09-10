'use client';
import './Input.scss'

interface InputProps {
    name: string,
    label: string,
    type?: string
}

const Input = ({name, label, type}:InputProps) => {
    return (
        <label className="input-label">
            {label}
            <input name={name} type={type} className="generic-input"/>
        </label>
    );
};
export default Input;
