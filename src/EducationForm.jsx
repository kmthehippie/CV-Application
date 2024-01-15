import {useState} from "react"
import PropTypes from "prop-types"

function EduForm ({setEdus}){

    const [data, setData] = useState([{
        degree:"", 
        school:"", 
        gradYear:"", 
        text:""}])

    const handleClick = (e)=>{
        e.preventDefault()
        setData([...data, {
        degree:"", 
        school:"", 
        gradYear:"", 
        text:""}])
    }
    const handleChange = (e,i)=>{
        const name = e.target.name
        const value = e.target.value
        const onChangeVal = [...data]
        onChangeVal[i][name] = value
        setData(onChangeVal)
    }
    const handleDelete = (i)=>{
        const deleteVal = [...data]
        deleteVal.splice(i,1)
        setData(deleteVal)
    }

    const handleUpdateClick = (e)=>{
        e.preventDefault() 
        console.log(data)
        setEdus(data)
    }

    return (
        <fieldset>
                <legend>Education History</legend>
            
            <button className="addBtn" onClick={(e)=> {handleClick(e)}}>Add Education Section</button>
            {
                data.map((val, i)=>
                <>
                
                <div>
                <label htmlFor="degree" className = "label-input">Degree: </label>
                <input className = "input-field" type="text" id="degree" name="degree" value={val.degree} onChange={(e)=>handleChange(e, i)} placeholder="SPM" />
                </div>
                <div>
                <label htmlFor="school" className = "label-input">School: </label>
                <input className = "input-field" type="text" id="school" name="school" value={val.school} onChange={(e)=>handleChange(e, i)} placeholder="SMK TTDI" />
                </div>
                <div>
                <label htmlFor="date" className = "label-input">Graduate on: </label>
                <br />
                <input className = "input-field" type="date" id="grad-year" name="gradYear" value={val.gradYear} onChange={(e)=>handleChange(e, i)} />
                </div>
                <div>
                <label htmlFor="text" className = "label-input">Description: </label>
                <br />
                <textarea id="text" name="text" value={val.text} onChange={(e)=>handleChange(e, i)}placeholder="Results for SPM were Math: A; Physics: A; Chemistry A; Biology B; English: A; BM: B; Moral: A; History: B; Geography: B. I was the treasurer for the Scouts Club...." > </textarea>
                </div>
                <div>
                <button className="deleteBtn"  onClick={()=>handleDelete(i)}>Delete the above of the education section</button>
                </div>
                </>
                )
            }
            <button className="final-update" onClick = {(e)=>handleUpdateClick(e)}>Update Education</button>
        </fieldset>
    )
}

EduForm.propTypes = {
    setEdus: PropTypes.func
}

export default EduForm