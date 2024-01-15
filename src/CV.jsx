import HeaderCV from "./Headercv.jsx"
import Details from "./Details.jsx"
import Profile from "./Profile.jsx"
import Education from "./Education.jsx"
import Skills from "./Skills.jsx"
import EmploymentHx from "./EmploymentHx.jsx"
import "./cv.css"

function CVRender () {

    return(
    <div className="cv">
        
    <HeaderCV />

    <div className="CVbody">
        <div className="left">
        <Details />
        <Skills />

        </div>
        <div className="right">
        <Profile />
        <Education />
        <EmploymentHx />
        </div>
    </div>
   
    </div>
    )
}


export default CVRender