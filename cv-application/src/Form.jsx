import {useState} from "react"
import EduForm from "./EducationForm"
import HeaderCV from "./Headercv"
import Details from "./Details"
import Skills from "./Skills"
import EmploymentHx from "./EmploymentHx"
import Profile from "./Profile"
import Education from "./Education"
import SkillForm from "./SkillForm"
import EmployForm from "./EmployForm"
import "./form.css"
function Form() {


const [headerData, setHeaderData] = useState({
    name: "Bob Ross",
    city: "Happy Land",
    title: "Manager",
    phone: "+6012-3456789",
    img: "https://i.imgur.com/jWNnRh7.jpeg"
})

const [detsData, setDetsData] = useState({
    email: "BobRoss@gmail.com",
    address:"9, Road of Opportunities 1",
})

const [profile, setProfile] = useState("Having recently graduated from the University of London with a 2:1 degree in marketing, I have completed several internships within the retail and fashion industries. I developed a keen eye for detail whilst assisting in the production of global marketing campaigns. I excel in digital design and have received three student awards for my work since beginning freelance projects in 2014.")

const [skills, setSkills] = useState([
        "Communication",
        "Problem Solving", 
        "Active Listener", 
        "Teamwork", 
        "Customer Service",
        "Willing to Learn",
    ])

const [edus, setEdus] = useState([
        {degreeName: "A-Level", 
        gradYear:"2000", 
        text:"EDEXCEL Results: Chemistry A, Math A, Biology A, Chemistry B, Physics B", 
        educationalInstitution:"HELP University College"},
        {degreeName: "SPM High School",
        gradYear: "1998", 
        text: "SPM results for Science Stream: Biology A, Chemistry A, Physics B, Math A, AddMath A, Malay A, English A, History B, Moral A.",
        educationalInstitution: "Sekolah Menengah Kebangsaan Sri Baiduri"},
        {degreeName: "UPSR Middle School", 
        gradYear:"1993", text:"English A, Math A, Science A, Malay A, Moral A", 
        educationalInstitution:"Sekolah Kebangsaan Bukit Onetwothree"},
        {degreeName: "MSc Accounting and Dreaming", 
        gradYear:"2004", text:"Summa cum laude. ABC Award for outstanding journalism major. Certified in Level 1 Strategic Communication Certification. Involved as Conference Coordinator, XYZ Journalism Association of America", 
        educationalInstitution:"University of Otago", 
        id: 4},

    ])

const [emps, setEmps] = useState([
    {jobTitle: "Waitperson",
    company: "Outback Steakhouse NU Sentral",
    startDateJob: "2023-01-01 ",
    endDateJob: "2023-02-21",
    details: [
        {id: 1, text: "Execute top quality customer service, including greeting guests in a friendly manner during arrival, receiving orders and accommodating to their needs and requests of 30+ customers per day."},
        {id: 2, text: "Assisted with supply restock by contacting vendors as instructed."},
        {id: 3, text: "Learnt how to maintain cleanliness within a eatery"},
        {id: 4, text: "Competently utilize the POS to process customer orders, complete payment transactions and issue receipts"}
    ]},
    {jobTitle: "Barista",
    company: "Starbucks Damansara Heights",
    startDateJob: "2021-06-01",
    endDateJob: "2021-08-02",
    details: [
        {id: 1, text: "Learnt how to follow strict rules, instructions and processes."},
        {id: 2, text: "Learnt how to maintain good customer relations when pressed on time."},
        {id: 3, text: "Learnt to be efficient and prompt during work."},
        {id: 4, text: "Competently used the POS to process orders, payments and issue receipts."}
    ]},
    {jobTitle: "Internship as accountant",
    company: "YoYo Accounting Firm",
    startDateJob: "2020-12-01",
    endDateJob: "2021-01-01",
    details: [
        {id: 1, text: "Learnt that what I learn at school is rarely applied"},
        {id: 2, text: "But how I am able to efficiently adapt to my surrounding was useful"},
        {id: 3, text: "I learnt how REAL accounts was done"},
        {id: 4, text: "Dolla dolla dolla"}
    ]},
    {jobTitle: "Tuition Teacher",
    company: "Murni Teaching Center",
    startDateJob: "2019-10-01",
    endDateJob: "2020-01-01",
    details: [
        {id: 1, text: "Children are very difficult to control"},
        {id: 2, text: "I learnt to go with the flow"},
        {id: 3, text: "And use other ways to trigger their curiosities in order for them to learn."},
        {id: 4, text: "Competition between students also gave them motivation to learn better"}
    ]}
])
   
const [data, setData] = useState([{
        firstName:"", 
        lastName:"",
        image: "",
        title: "",
        email:"", 
        phone:"", 
        address:"",
        city:"",
        postalCode:"",
        country:"",
        profile: ""
    }])

const handleClick1 = (e)=>{
        e.preventDefault()
        let headerData = {
        name: data[0].firstName + " " + data[0].lastName,
        title: data[0].title,
        city: data[0].city,
        phone: data[0].phone,
        img: data[0].image
        }
        setHeaderData(headerData)

    }

const handleClick2 = (e) =>{
        e.preventDefault()

        let dets = {
            email: data[0].email,
            address: data[0].address + " " + data[0].city + " " + data[0].postalCode + " " + data[0].country 
        }

        setDetsData(dets)
    }

const handleClick3 = (e) =>{
        e.preventDefault()
        let profile = data[0].profile
        setProfile (profile)
    }

const handleChange = (e)=>{
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        const onChangeVal = [...data]
        onChangeVal[0][name] = value
        setData(onChangeVal)
    }


    return (
<div className="formoutput">
    <form>
        {/* ? May want to create a component for below form items (3x fieldset) */}
        {
        data.map((val)=>
        <>                
        <fieldset>
            <legend>Header Information</legend>
        <div>
        <label htmlFor="first-name" className = "label-input">First Name: </label>
        <input required className = "input-field" type="text" id="first-name" name="firstName" autoComplete="given-name" value={val.firstName } onChange={(e)=>handleChange(e)} placeholder="Bob"  />
        </div>
        <div>
        <label htmlFor="last-name" className = "label-input">Last Name: </label>
        <input required className = "input-field" type="text" id="last-name" name="lastName" autoComplete="family-name" value={val.lastName} onChange={(e)=>handleChange(e)} placeholder="Ross" />
        </div>
        <div>
        <label htmlFor="title" className = "label-input">Job Title: </label>
        <input required className = "input-field" type="text" id="title" name="title" value={val.title} onChange={(e)=>handleChange(e)} placeholder="Manager" />
        </div>
        <div>
        <label htmlFor="image" className = "label-input">Image Link: </label>
        <p className="instructions">Please upload your image to <a href="https://www.imgur.com/upload" target="_blank" rel="noreferrer">IMGUR</a>. Right-click your image and select COPY IMAGE ADDRESS. Then paste that in the below field.</p>
        <input className = "input-field" type="text" id="image" name="image" value={val.image} onChange={(e)=>handleChange(e)} placeholder="imgur.com/RiCyOSP" />
        </div>
        <div>
        <label htmlFor="phone" className = "label-input">Phone Number: </label>
        <input required className = "input-field" type="tel" id="phone" name="phone" autoComplete="phone" value={val.phone} onChange={(e)=>handleChange(e)} placeholder="6012-32323232" />
        </div>
        <div>
        <label required htmlFor="city" className = "label-input">City: </label>
        <input className = "input-field" type="text" id="city" name="city" autoComplete="city" value={val.city} onChange={(e)=>handleChange(e)} placeholder="Happy Land" />
        </div>
        <button className="final-update" onClick={(e)=>{handleClick1(e)}}>Update Header</button>
        </fieldset>
        <fieldset>
            <legend>Contact Details</legend>
        <div>
        <label htmlFor="email" className = "label-input">Email: </label>
        <input required className = "input-field" type="email" id="email" name="email" autoComplete="email"  value={val.email} onChange={(e)=>handleChange(e)} placeholder="BobRoss@gmail.com" />
        </div>
        
        <div>
        <label htmlFor="street-address" className = "label-input">Street Address: </label>
        <input className = "input-field" type="text" id="street-address" name="address" autoComplete="street-address" value={val.address} onChange={(e)=>handleChange(e)} placeholder="9, Road of Opportunities 1" required />
        </div>
        <div>
        <label htmlFor="postal-code" className = "label-input">Postal Code <p className="optional">*Optional</p> </label>
        <input className = "input-field" type="number" id="postal-code" name="postalCode" autoComplete="postal-code" value={val.postalCode} onChange={(e)=>handleChange(e)} placeholder="21222" />
        </div>
        <div>
        <label htmlFor="country" className = "label-input">Country: </label>
        <input required className = "input-field" type="text" id="country" name="country" autoComplete="country" value={val.country} onChange={(e)=>handleChange(e)} placeholder="Malaysia" />
        </div>
        <button className="final-update" onClick={(e)=>{handleClick2(e)}}>Update Details</button>
        </fieldset>
        <fieldset>
            <legend>Profile</legend>
            <textarea required id="profile" name="profile" autoComplete="profile" value={val.profile} onChange={(e)=>handleChange(e)} placeholder="Having recently graduated from the University of London with a 2:1 degree in marketing..."></textarea>
            <div>
            <button className="final-update" onClick={(e)=>{handleClick3(e)}}>Update Profile</button>
            </div>
           
        </fieldset>
        </>
        )}
        
        <SkillForm setSkills = {setSkills}/>
        <EduForm setEdus ={setEdus}/>
        <EmployForm emp = {emps} setEmps = {setEmps}/>
        
        
    </form>

    <div className="cv">
        <HeaderCV 
        headerData = {headerData}
        key = {headerData.name}
        />
        <div className="CVbody">
            <div className="left">
                <Details 
                detsData = {detsData}
                key = {detsData.email}/>
                <Skills 
                skills = {skills}
                key = {skills}
                /> 

            </div>
            <div className="right">
                <Profile 
                profile = {profile}
                key = {profile[2]}
                />
                <Education 
                props = {edus}
                keys = {edus.length}/>
                <EmploymentHx 
                props = {emps}
                keys = {emps.length} />
            </div>
        </div>
    </div>
</div>
    )
}

export default Form