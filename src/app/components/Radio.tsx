const RadioGroup = ({ title, options }) => {
    return (
        <div className="radio-group">
            <p>{title}</p>
            {options.map((option) => (
                <label>
                    {option.label}
                    <input
                        type="radio"
                        name={option.name}
                        id={option.id}
                        value={option.value}
                    />
                </label>
            ))}
        </div>
    )
}

export default RadioGroup
