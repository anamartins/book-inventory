'use client';
import './Checkbox.scss'

interface CheckboxProps {
    name: string,
    label: string,
}

const Checkout = ({name, label}: CheckboxProps) => {
    return (
        <div className="checkbox-wrapper">
            <label className="checkbox-label">
                    <input name={name} type='checkbox' className="checkbox" />
                    <span>{label}</span>
            </label>  
        </div>
    );
};
export default Checkout;
