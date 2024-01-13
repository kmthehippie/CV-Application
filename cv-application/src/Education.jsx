
import "./education.css"
import EducationCard from "./EducationCard.jsx"

function Education(){
    
    return(
        <div className="profile">
        <span className="divider-edu"></span>
        <span className="material-symbols-outlined edu-logo">
        import_contacts
        </span>
        <h2> &#9733; Education  &#9733;</h2>
        
        <EducationCard />
        <EducationCard degreeName= "A-Level"
        gradYear= "2000"
        educationalInstitution= "HELP University College"
        text= "EDEXCEL Results: Chemistry A, Math A, Biology A, Chemistry B, Physics B"/>
        <EducationCard degreeName= "SPM High School"
        gradYear= "1998"
        educationalInstitution= "Sekolah Menengah Kebangsaan Sri Baiduri"
        text= "SPM results for Science Stream: Biology A, Chemistry A, Physics B, Math A, AddMath A, Malay A, English A, History B, Moral A."/>
        <EducationCard degreeName= "UPSR Middle School"
        gradYear= "1993"
        educationalInstitution= "Sekolah Kebangsaan Bukit Onetwothree"
        text= "English A, Math A, Science A, Malay A, Moral A"/>
    </div>
           
    )
}

export default Education
