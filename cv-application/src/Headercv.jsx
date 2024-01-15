import "./headercv.css"
import PropTypes from "prop-types"

function HeaderCV(headerData){
    //need to get input for uploaded image for now create the template first.
    //the info below need to be passed through by prop. call this fn using usestate later. for now create template.



    const data = headerData.headerData

    return(
           
        <>
        <div className="header">
        <img src={data.img} />
        <h1 className="header-name">{data.name}</h1>
        <div className="header-info">
            <p>{data.title}</p>
            <p><span className="material-symbols-outlined">home_pin</span>
            {data.city}</p>
            <p><span className="material-symbols-outlined">call</span>
            {data.phone}</p>
        </div>
        </div>
        </>

    )
}

HeaderCV.propTypes = {
   headerData: PropTypes.object
}


export default HeaderCV