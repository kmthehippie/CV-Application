import "./details.css"
import PropTypes from "prop-types"

export default function Details(props) {

    return(
        <div className="card details">
            <h2> &#9733; Details  &#9733;</h2>
            <h3 className="det-subtitle">Address</h3>
            <p>{props.address}</p>
            <h3 className="det-subtitle">Contact Number</h3>
            <p>{props.phone}</p>
            <h3 className="det-subtitle">Email Address</h3>
            <p>{props.email}</p>
        </div>
    )
}


Details.propTypes = {
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
}

