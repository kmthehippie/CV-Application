
import EmploymentCard from "./EmploymentCard.jsx"
import "./employmentHx.css"

function EmploymentHx(){
    return(
    <div className="profile">
        <span className="divider-employment"></span>
        <span className="material-symbols-outlined edu-logo">
        work
        </span>
        <h2> &#9733; Employment History  &#9733;</h2>
        <EmploymentCard />
        <EmploymentCard />
        <EmploymentCard /> 
        <EmploymentCard />
    </div>
    )
}




export default EmploymentHx