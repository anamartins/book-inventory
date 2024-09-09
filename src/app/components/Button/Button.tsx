'use client';
import './Button.scss'

const SubmitButton = ({ label, onClick }) => {

    return <button onClick={onClick}>{label}</button>;
};
export default SubmitButton;
