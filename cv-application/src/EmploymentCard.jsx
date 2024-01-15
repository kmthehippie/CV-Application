import PropTypes from "prop-types"
import "./employmentCard.css"

function EmploymentCard(props){
    const p = props.props
    const details =p.details


    function convertDate(date){
        let d = new Date(date);
        d = d.toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
          })

        return d
    }
   
    return(
        <div className="card">
        <h3 className="jobtitle">{p.jobTitle}</h3>
        <h4>{p.company}</h4>
        <p className="date-worked">{convertDate(p.startDateJob)} to {convertDate(p.endDateJob)}</p>
        <ul>
        { details.map(detail=>
        <li key={detail.id}>{detail.text}</li>) }
        </ul>
        </div>
    )
}


EmploymentCard.propTypes = {
    props: PropTypes.object
}

EmploymentCard.defaultProps = {
    jobTitle: "Waitperson",
    company: "Outback Steakhouse NU Sentral",
    startDateJob: "2024-01-17",
    endDateJob: "2024-01-03",
    details: [
        {id: 1, text: "Execute top quality customer service, including greeting guests in a friendly manner during arrival, receiving orders and accommodating to their needs and requests of 30+ customers per day."},
        {id: 2, text: "Assisted with supply restock by contacting vendors as instructed."},
        {id: 3, text: "Learnt how to maintain cleanliness within a eatery"},
        {id: 4, text: "Competently utilize the POS to process customer orders, complete payment transactions and issue receipts"}
    ]
}

export default EmploymentCard