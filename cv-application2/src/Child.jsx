import React from "react"
import PropTypes from "prop-types"
import Parent from "./Parent"

export default function Child ({name, city, phone, title, key}) {

    // let data = handleChange;
    // data = JSON.parse(handleChange)
  const [n, setName] = React.useState(name)
  const [c, setCity] = React.useState(city)
  const [t, setTitle] = React.useState(title)
  const [p, setPhone] = React.useState(phone)



    return (
        <>
        {/* <h3>This is in child: {user}</h3> */}
        <h3>This is in child: {n} {c} {t} {p}</h3>
      
        
        <div className="header"></div>
        <h1 className="header-name">{n}</h1>
        <div className="header-info">
                <p>{t}</p>
                <p><span className="material-symbols-outlined">home_pin</span>
                {c}</p>
                <p><span className="material-symbols-outlined">call</span>
                {p}</p>
            </div>

        </>
    )
}

Child.propTypes = {
    name: PropTypes.string,
    img:  PropTypes.string,
    title: PropTypes.string,
    state:  PropTypes.string,
    contact:  PropTypes.string
}

Child.defaultProps = {
        name: "Guest Sample",
        img: "../src/assets/PFP-placeholder.jpg",
        title: "Manager",
        state: "Happy State",
        contact: "+6012-3456789"
}