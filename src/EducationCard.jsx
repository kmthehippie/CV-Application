import PropTypes from "prop-types"
import "./educationCard.css"

function EducationCard(props){
    const p = props.props
   
    const today = new Date()

    function convertDate(date){
        let d = new Date(date);
        d = d.toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
          })

        return d
    }
    

    // date = date.toLocaleDateString('en-GB', {
    //     day: 'numeric', month: 'short', year: 'numeric'
    //   })
    const graduated = <p>Graduated in {convertDate(p.gradYear)} at {p.school}</p>
    const graduating = <p>Graduating in {convertDate(p.gradYear)} from {p.school}</p>
    
    return(
        <>
        <div className="card">
        <h3>{p.degreeName}</h3>
        {new Date(p.gradYear) < today ?  graduated : graduating}
       
        
        <p>{p.text}</p>
        </div>
        </>
    )
}


EducationCard.propTypes = {
    props: PropTypes.object
}



export default EducationCard