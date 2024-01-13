import PropTypes from "prop-types"
import "./educationCard.css"

function EducationCard(props){
    const today = new Date()
    const convertGradYear = Number(props.gradYear)
    const graduated = <p>Graduated in {convertGradYear} at {props.educationalInstitution}</p>
    const graduating = <p>Graduating in {convertGradYear} from {props.educationalInstitution}</p>
    
    return(
        <div className="card">
        <h3>{props.degreeName}</h3>
        {convertGradYear < today.getFullYear() ?  graduated : graduating}
        <p>{props.text}</p>
        </div>
    )
}


EducationCard.propTypes = {
    degreeName: PropTypes.string,
    gradYear: PropTypes.string,
    text: PropTypes.string,
    educationalInstitution: PropTypes.string
}

EducationCard.defaultProps = {
    degreeName: "MSc Accounting and Dreaming",
    gradYear: "2004",
    educationalInstitution: "University of Otago",
    text: "Summa cum laude. ABC Award for outstanding journalism major. Certified in Level 1 Strategic Communication Certification. Involved as Conference Coordinator, XYZ Journalism Association of America"
}

export default EducationCard