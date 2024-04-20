"use client"
const SubmitButton = ({label}) => {
    return(
      <div> 
        <input type="submit" value={label} />
      </div>
    )
}
export default SubmitButton;