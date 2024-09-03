'use client';
import '../styles/Input.scss'

interface InputProps {
    name: string,
    label: string,
    type?: string
}

const Input = ({name, label, type}: InputProps) => {
    return (
        <label>
            {label}
            <input name={name} type={type ? type : 'text'}/>
        </label>
    );
};
export default Input;
