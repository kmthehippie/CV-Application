import {useState} from "react"

function EduForm (){

    const [data, setData] = useState([{
        degree:"", 
        school:"", 
        startDate:"", 
        endDate:"", 
        description:""}])
    const handleClick = (e)=>{
        e.preventDefault()
        setData([...data, {
        degree:"", 
        school:"", 
        startDate:"", 
        endDate:"", 
        description:""}])
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

    return (
        <fieldset>
                <legend>Education History</legend>
            
            <button onClick={(e)=> {handleClick(e)}}>Add 1 More Education Card</button>
            {
                data.map((val, i)=>
                <>
                
                <div>
                <label htmlFor="degree">Degree: </label>
                <input type="text" id="degree" name="degree" value={val.degree} onChange={(e)=>handleChange(e, i)} placeholder="SPM" />
                </div>
                <div>
                <label htmlFor="school">School: </label>
                <input type="text" id="school" name="school" value={val.school} onChange={(e)=>handleChange(e, i)} placeholder="SMK TTDI" />
                </div>
                <div>
                <label htmlFor="date">Start & End Dates: </label>
                <input type="date" id="start-date" name="startDate" value={val.startDate} onChange={(e)=>handleChange(e, i)}/>
                <input type="date" id="end-date" name="endDate" value={val.endDate} onChange={(e)=>handleChange(e, i)} />
                </div>
                <div>
                <label htmlFor="description">Description: </label>
                <input type="textarea" id="description" name="description" value={val.description} onChange={(e)=>handleChange(e, i)}placeholder="Results for SPM were Math: A; Physics: A; Chemistry A; Biology B; English: A; BM: B; Moral: A; History: B; Geography: B.
                I was the treasurer for the Scouts Club." />
                </div>
                <button onClick={()=>handleDelete(i)}>Delete the above of the education form</button>
                </>
                )
            }
            <p>{JSON.stringify(data)}</p>
        </fieldset>
    )
}

export default EduForm