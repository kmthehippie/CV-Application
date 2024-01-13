import PropTypes from "prop-types"
import {useState} from "react"
import "./skills.css"

function Skills(skills) {
    console.log(skills.skills)
    const [s, setS] = useState(skills.skills)

return (
        <div className="card skills">
            <h2> &#9733; Skills  &#9733;</h2>
            <ul>
               {s.map(skill => 
                <li key={skill}>{skill}</li>)}
            </ul>
        </div>
)
}

Skills.propTypes = {
    skills: PropTypes.array
}


export default Skills