import "./details.css"
import PropTypes from "prop-types"

export default function Details(detsData) {

    const data = detsData.detsData
    
    return(
        <div className="card details">
            <h2> &#9733; Details  &#9733;</h2>
            <h3 className="det-subtitle">Address</h3>
            <p>{data.address}</p>
            <h3 className="det-subtitle">Contact Number</h3>
            <p>{data.phone}</p>
            <h3 className="det-subtitle">Email Address</h3>
            <p>{data.email}</p>
        </div>
    )
}


Details.propTypes = {
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
}

