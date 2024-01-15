
import EmploymentCard from "./EmploymentCard.jsx"
import "./employmentHx.css"
import PropTypes from "prop-types"


function EmploymentHx(props){
    const empList = props.props

    return(
    <div className="profile">
        <span className="divider-employment"></span>
        <span className="material-symbols-outlined edu-logo">
        work
        </span>
        <h2> &#9733; Employment History  &#9733;</h2>
        {empList.map ((emp)=>{
            return (
                <EmploymentCard props={emp} key={emp.company + emp.startDate} />
            )
        })}
    </div>
    )
}

EmploymentHx.propTypes = {
    props: PropTypes.array
}



export default EmploymentHx