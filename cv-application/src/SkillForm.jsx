import { useState } from "react"
import Skills from "./Skills"

function SkillForm({setSkills}) {


    const [skillList, setSkillList] = useState([
        ""
    ])


    const handleSkillAdd = (e)=>{
        e.preventDefault()
        setSkillList([...skillList, ""])
    }

    const handleSkillRemove = (e, index) =>{
        e.preventDefault()
        const list = [...skillList]
        list.splice(index, 1)
        setSkillList(list)
    }

    const handleSkillChange = (e, index) =>{
        const {value} = e.target
        const list = [...skillList]
        list[index] = value
        setSkillList(list)
        
    }
    
    const handleSkillClick = (e) => {
        e.preventDefault()
        console.log(skillList)
        setSkills(skillList)
    }

    return(
        <fieldset>
                <legend>Skills</legend>
                <p>Include 5 important skills to show that you fit the position. Make sure they match skills that are mentioned in the job listing.</p>
                {skillList.map((singleSkill, i)=>{
                    return(
                        <>
                    <div key={i} className="skill-div">
                        <div className="skill-left">
                            <label htmlFor="skill">Skill: </label>
                            <input type="text" name="skill" id="skill" required value={skillList[i]} onChange = {(e) => {handleSkillChange(e,i)}} />
                            {skillList.length -1 === i && skillList.length < 5 && 
                            (<button 
                                type="button"
                                className="add-skill" 
                                onClick ={handleSkillAdd}>
                                Add a skill
                            </button>)}
                        </div>
                        <div className="skill-right">
                            {skillList.length > 1 && 
                            (<button 
                                className="remove-skill"
                                onClick={(e,i) => {handleSkillRemove(e,i)}}
                            > - </button>)}
                        </div>
                    </div>
                        </> 
                    )
                   
                })}
                <button onClick={(e)=>{handleSkillClick (e)}}>Update</button>
               
        </fieldset>
    )
}

export default SkillForm