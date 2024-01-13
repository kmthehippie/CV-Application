import "./headercv.css"
import React from "react"
import PropTypes from "prop-types"

function HeaderCV({name, city, phone, title, image}){
    //need to get input for uploaded image for now create the template first.
    //the info below need to be passed through by prop. call this fn using usestate later. for now create template.

    const [n, setName] = React.useState(name)
    const [c, setCity] = React.useState(city)
    const [t, setTitle] = React.useState(title)
    const [i, setImage] = React.useState(image)
    const [p, setPhone] = React.useState(phone)

    return(
           
        <>
        <div className="header">
        <img src={i} />
        <h1 className="header-name">{n}</h1>
        <div className="header-info">
            
                <p>{t}</p>
                <p><span className="material-symbols-outlined">home_pin</span>
                {c}</p>
                <p><span className="material-symbols-outlined">call</span>
                {p}</p>
        </div>
        </div>
        </>

    )
}

HeaderCV.propTypes = {
    name: PropTypes.string,
    image:  PropTypes.string,
    title: PropTypes.string,
    city:  PropTypes.string,
    phone:  PropTypes.string
}


export default HeaderCV