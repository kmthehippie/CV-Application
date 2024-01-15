
import "./education.css"
import PropTypes from "prop-types"
import EducationCard from "./EducationCard.jsx"

function Education(props){
    const eduList = props.props
    
    return(
        <div className="profile">
        <span className="divider-edu"></span>
        <span className="material-symbols-outlined edu-logo">
        import_contacts
        </span>
        <h2> &#9733; Education  &#9733;</h2>
        
        {eduList.map((edu) => {
            return(
                <EducationCard props={edu} key ={edu.degreeName} />
            )
        })}
    </div>
           
    )
}

Education.propTypes = {
    props: PropTypes.array
}

export default Education
