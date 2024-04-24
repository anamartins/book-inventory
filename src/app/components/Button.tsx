'use client';
const SubmitButton = ({ label, onClick }) => {

    function onButtonClick(){
        onClick();
    }

    return <button onClick={onButtonClick}>{label}</button>;
};
export default SubmitButton;
