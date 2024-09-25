'use client';
import './Checkbox.scss';

interface CheckboxProps {
    name: string;
    label: string;
    value: boolean;
    onChange: Function;
}

const Checkbox = ({ name, label, value, onChange }: CheckboxProps) => {
    function onCheckboxChange(event) {
        onChange(name, event.target.checked);
    }

    return (
        <div className="checkbox-wrapper">
            <label className="checkbox-label">
                <input
                    name={name}
                    type="checkbox"
                    className="checkbox"
                    checked={value}
                    onChange={onCheckboxChange}
                />
                <span>{label}</span>
            </label>
        </div>
    );
};
export default Checkbox;
