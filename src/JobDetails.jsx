
import {useState} from "react"
import PropTypes from "prop-types"
import "./jobdetails.css"


function JobDetails ({index, data, setData}){
    const [jobDetails, setJobDetails] = useState([
        {id: "", text: ""}
    ])
    const handleUpdateJobDets = (e) =>{

        e.preventDefault()
        let d = [ ... data]
        let dets = [...jobDetails]
        d[index].details = [...dets]
        setData(d)
    }

    const handleAddJobDetail = (e)=>{
        e.preventDefault()
        setJobDetails([...jobDetails, {id: "", text: ""}])
    }
    const handleDetailRemove = (e, index)=>{

        e.preventDefault()
        let list = [...jobDetails]

        list.splice(index, 1)
        
        setJobDetails(list)
    }
    const handleChangeDets = (e, index)=>{
        e.preventDefault()

        const {value} = e.target
        const list = [...jobDetails]
        list[index].text = value

        setJobDetails(list)
    }

    return (

        <>
        <label htmlFor="jobDetails">Details: </label>
        <br />
        {/* HERE WE ARE ADDING DETAILS PRN */}
        {jobDetails.map((val, index)=>{

            return (
            <>
            <input className = "input-field-details" name="jobDetails" value={val.text} onChange={(e)=>handleChangeDets(e, index)} placeholder="Execute top quality customer service, including greeting guests in a friendly manner during arrival, receiving orders and accommodating to their needs and requests of 30+ customers per day." />
            {jobDetails.length > 1 && 
            (<button 
                className="remove-detail"
                onClick={(e) => {handleDetailRemove(e, index)}}
            > - </button>)}
            {jobDetails.length -1 === index && jobDetails.length < 6 && (
            <button className="add-job-details" onClick={(e, index)=>handleAddJobDetail(e, index)}>+</button>
            )}
            <br />
            </>
            )  
        }
        )}
        <p className="skills-text">When you have completed adding ALL your details regarding your employment, please click this button to upload the details.</p>
       <button className="updateDets" onClick = {(e,index) => handleUpdateJobDets (e,index)}>
               Update Details
        </button>
           

        </>
    )
}
JobDetails.propTypes = {
    index : PropTypes.number,
    data: PropTypes.array,
    setData: PropTypes.func
}

export default JobDetails