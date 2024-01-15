import {useState} from "react"
import JobDetails from "./JobDetails"
import PropTypes from "prop-types"

function EmployForm ({setEmps}){

   

    // const [jobDets, setJobDets] = useState([""])
    const [data, setData] = useState([{
        jobTitle:"", 
        company:"", 
        startDateJob:"", 
        endDateJob:"",
        details: []
    }])


    

    const handleAddCard = (e)=>{
        e.preventDefault()
        setData([...data, {
            jobTitle:"", 
            company:"", 
            startDateJob:"", 
            endDateJob:"",
            details: []
        }])
        
    }

    

    const handleChangeData = (e, i)=>{
        e.preventDefault()
        const {value, name} = e.target
        const list = [...data]
        list[i][name] = value
        setData(list)
    }

    
    const handleDelete = (e)=>{
        e.preventDefault()
    }

    const handleUpdateClick = (e)=>{
        e.preventDefault()

        setEmps(data)
    }
    
    return (
        <fieldset>
            <legend>Employment History</legend>
            
            <button className="addBtn" onClick={(e)=> {handleAddCard(e)}}>Add Employment Section</button>
            
            {
                data.map((val, i)=>
                <>
                {/* HERE WE ARE ADDING CARDS PRN */}
                <div >
                <label htmlFor="jobTitle" className = "label-input">Job Title: </label>
                <input className = "input-field" type="text" id="jobTitle" name="jobTitle" value={val.jobTitle} onChange={(e)=>handleChangeData(e, i)} placeholder="Waitperson" />
                </div>
                <div>
                <label htmlFor="company" className = "label-input">Company: </label>
                <input className = "input-field" type="text" id="company" name="company" value={val.company} onChange={(e)=>handleChangeData(e, i)} placeholder="Outback Steakhouse NU Sentral" />
                </div>
                <div>
                <label htmlFor="date" className = "label-input">Start & End Dates: </label>
                <br />
                <input type="date" id="start-date-job" name="startDateJob" value={val.startDateJob} onChange={(e)=>handleChangeData(e, i)}/>
                <input type="date" id="end-date-job" name="endDateJob" value={val.endDateJob} onChange={(e)=>handleChangeData(e, i)} />
                </div>

                <JobDetails index = {i} data = {data} setData = {setData} />
                <div>
                <button className="deleteBtn" onClick={()=>handleDelete(i)}>Delete the above of the employment section</button>
                </div>
                
                </>
                )
            }
            <div>
            <button className="final-update" onClick = {(e)=>handleUpdateClick(e)}>Update Employment</button>
            </div>
            
        </fieldset>
    )
}

EmployForm.propTypes = {
    setEmps: PropTypes.func
}

export default EmployForm