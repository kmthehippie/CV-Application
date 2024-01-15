import PropTypes from "prop-types"
import "./profile.css"

function Profile(props){
   
    return(
        <>
        
        <div className="profile">


            <span className="divider-profile"></span>
            <span className="material-symbols-outlined person-logo">
                person
            </span>


            <div className="content">
                <h2> &#9733; Profile  &#9733;</h2>
                <p>{props.profile}</p>
            </div>
            
            
            </div>
       
        </>
    )
}


Profile.propTypes = {
    profile: PropTypes.string
}



export default Profile