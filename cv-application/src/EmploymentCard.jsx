import PropTypes from "prop-types"
import "./employmentCard.css"

function EmploymentCard(props){
    const details = props.details
   
    return(
        <div className="card">
        <h3 className="jobtitle">{props.jobTitle}</h3>
        <h4>{props.company}</h4>
        <p className="date-worked">{props.date}</p>
        <ul>
        { details.map(detail=>
        <li key={detail.id}>{detail.text}</li>)}
        </ul>
        </div>
    )
}


EmploymentCard.propTypes = {
    jobTitle: PropTypes.string,
    company: PropTypes.string,
    date: PropTypes.string,
    details: PropTypes.array
}

EmploymentCard.defaultProps = {
    jobTitle: "Waitperson",
    company: "Outback Steakhouse NU Sentral",
    date: "15 January 2023 to 15 March 2023",
    details: [
        {id: 1, text: "Execute top quality customer service, including greeting guests in a friendly manner during arrival, receiving orders and accommodating to their needs and requests of 30+ customers per day."},
        {id: 2, text: "Assisted with supply restock by contacting vendors as instructed."},
        {id: 3, text: "Learnt how to maintain cleanliness within a eatery"},
        {id: 4, text: "Competently utilize the POS to process customer orders, complete payment transactions and issue receipts"}
    ]
}

export default EmploymentCard