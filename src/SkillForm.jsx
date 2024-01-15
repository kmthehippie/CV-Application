import { useState } from "react"
import PropTypes from "prop-types"


function SkillForm({setSkills}) {


    const [skillList, setSkillList] = useState([""])



    const handleSkillAdd = (e)=>{
        e.preventDefault()
        setSkillList([...skillList, ""])
    }

    const handleSkillRemove = (e, i) =>{
        e.preventDefault()
        const list = [...skillList]
        list.splice(i, 1)
        setSkillList(list)
    }

    const handleSkillChange = (e, i) =>{
        console.log(e.target.value,i)
        const {value} = e.target
        const list = [...skillList]
        list[i] = value
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
                <p className="skills-text">Include a few important skills to show that you fit the position. Make sure they match skills that are mentioned in the job listing.</p>
                
                {skillList.map((singleSkill, i)=>{
                    return(
                    <>
                    <div key={i} className="skill-div">
                       
                        <div className="skill">
                            <label htmlFor="skill" className = "label-input">Skill: </label>
                            <div>
                            <input className = "input-field-details" type="text" name="skill" id="skill" required value={singleSkill} onChange = {(e) => handleSkillChange(e,i)} />
                            {skillList.length > 1 && 
                            (<button 
                                className="remove-skill small-button"
                                onClick={(e) => {handleSkillRemove(e,i)}}
                            > - </button>)}
                            {skillList.length -1 === i && skillList.length < 10 && 
                            (<button 
                                type="button"
                                className="add-skill small-button" 
                                onClick ={handleSkillAdd}>
                                +
                            </button>)}
                            </div>
                            
                        </div>
                    
                    </div>
                        </> 
                    )
                   
                })}
                <button className="final-update" onClick={(e)=>{handleSkillClick (e)}}>Update Skills</button>
               
        </fieldset>
    )
}
SkillForm.propTypes = {
    setSkills: PropTypes.func
}

export default SkillForm