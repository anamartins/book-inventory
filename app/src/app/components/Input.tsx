"use client"
const Input = ({name, label}) => {
    return(
        <div>
            <label>{label}<input name={name}/></label>
        </div>
    )
}
export default Input;