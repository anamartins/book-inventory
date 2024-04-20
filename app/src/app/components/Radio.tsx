const RadioGroup = ({title, options}) => {
    return(
        <div className="radio-group">
            <p>{title}</p>
            {options.map((option) => (
                <label htmlFor={option.name}>{option.label}<input type="radio" id={option.id} value={option.value}/></label>
            ))}
        </div>
    )
}

export default RadioGroup;