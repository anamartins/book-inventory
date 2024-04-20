"use client"
const Input = ({name, label}) => {
    return(
        <div>
            <label htmlFor={name}>{label}<input name={name}/></label>
        </div>
    )
}
export default Input;