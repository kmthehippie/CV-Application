import {useState} from "react"
import EduForm from "./EducationForm"
import HeaderCV from "./Headercv"
import Details from "./Details"
import Skills from "./Skills"
import EmploymentHx from "./EmploymentHx"
import Profile from "./Profile"
import Education from "./Education"
import SkillForm from "./SkillForm"
import "./form.css"
function Form() {


const [name, setName] = useState("Bob Ross")
const [city, setCity] = useState("Happy Land")
const [title, setTitle] = useState("Manager")
const [phone, setPhone] = useState("+6012-3456789")
const [image, setImage] = useState("https://i.imgur.com/jWNnRh7.jpeg")
const [email, setEmail] = useState("BobRoss@gmail.com")
const [address, setAddress] = useState("9, Road of Opportunities 1")
const [profile, setProfile] = useState("Having recently graduated from the University of London with a 2:1 degree in marketing, I have completed several internships within the retail and fashion industries. I developed a keen eye for detail whilst assisting in the production of global marketing campaigns. I excel in digital design and have received three student awards for my work since beginning freelance projects in 2014.")

    const [skills, setSkills] = useState(["Communication",
    "Problem Solving", 
    "Active Listener", 
    "Teamwork", 
    "Customer Service",
    "Willing to Learn",])
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
        let name = data[0].firstName + " " + data[0].lastName
        let title = data[0].title
        let city = data[0].city
        let phone = data[0].phone
        let img = data[0].image
       
        setName (name)
        setCity (city)
        setTitle (title)
        setPhone (phone)
        setImage(img)

        console.log(name, title, city, phone, img)
    }

    const handleClick2 = (e) =>{
        e.preventDefault()
        let email = data[0].email
        let address = data[0].address + " " + data[0].city + " " + data[0].postalCode + " " + data[0].country 
        setEmail (email)
        setAddress (address)
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
        <>
        <form>
            {
            data.map((val)=>
            <>                
            <fieldset>
                <legend>Header Information</legend>
            <div>
            <label htmlFor="first-name">First Name: </label>
            <input required type="text" id="first-name" name="firstName" autoComplete="given-name" value={val.firstName} onChange={(e)=>handleChange(e)} placeholder="Bob"  />
            </div>
            <div>
            <label htmlFor="last-name">Last Name: </label>
            <input required type="text" id="last-name" name="lastName" autoComplete="family-name" value={val.lastName} onChange={(e)=>handleChange(e)} placeholder="Ross" />
            </div>
            <div>
            <label htmlFor="title">Job Title: </label>
            <input required type="text" id="title" name="title" value={val.title} onChange={(e)=>handleChange(e)} placeholder="Manager" />
            </div>
            <div>
            <label htmlFor="image">Image Link: </label>
            <p className="instructions">Please upload to <a href="https://www.imgur.com/upload" target="_blank" rel="noreferrer">imgur</a>. Right-click your image and select COPY IMAGE ADDRESS. Then paste that in the below field.</p>
            <input type="text" id="image" name="image" value={val.image} onChange={(e)=>handleChange(e)} placeholder="imgur.com/RiCyOSP" />
            </div>
            <div>
            <label htmlFor="phone">Phone Number: </label>
            <input required type="phone" id="phone" name="phone" autoComplete="phone" value={val.phone} onChange={(e)=>handleChange(e)} placeholder="+6012-32323232" />
            </div>
            <div>
            <label required htmlFor="city">City: </label>
            <input type="text" id="city" name="city" autoComplete="city" value={val.city} onChange={(e)=>handleChange(e)} placeholder="Happy Land" />
            </div>
            <button onClick={(e)=>{handleClick1(e)}}>Update</button>
            </fieldset>
            <fieldset>
                <legend>Contact Details</legend>
            <div>
            <label htmlFor="email">Email: </label>
            <input required type="email" id="email" name="email" autoComplete="email"  value={val.email} onChange={(e)=>handleChange(e)} placeholder="BobRoss@gmail.com" />
            </div>
            
            <div>
            <label htmlFor="street-address">Street Address: </label>
            <input required type="text" id="street-address" name="address" autoComplete="street-address" value={val.address} onChange={(e)=>handleChange(e)} placeholder="9, Road of Opportunities 1" />
            </div>
            <div>
            <label htmlFor="postal-code">Postal Code <p className="optional">*Optional</p> </label>
            <input type="text" id="postal-code" name="postalCode" autoComplete="postal-code" value={val.postalCode} onChange={(e)=>handleChange(e)} placeholder="21222" />
            </div>
            <div>
            <label htmlFor="country">Country: </label>
            <input required type="text" id="country" name="country" autoComplete="country" value={val.country} onChange={(e)=>handleChange(e)} placeholder="Malaysia" />
            </div>
            <button onClick={(e)=>{handleClick2(e)}}>Update</button>
            </fieldset>
            <fieldset>
                <legend>Profile</legend>
                <textarea required id="profile" name="profile" autoComplete="profile" value={val.profile} onChange={(e)=>handleChange(e)} placeholder="Having recently graduated from the University of London with a 2:1 degree in marketing..."></textarea>
                <button onClick={(e)=>{handleClick3(e)}}>Update</button>
            </fieldset>
            
            </>
            )}
            
            <SkillForm setSkills = {setSkills}/>
            <EduForm/>
          
            
          
        </form>
<div className="right">
           
    <div className="cv">
        <HeaderCV 
        name = {name}
        city = {city}
        title = {title}
        phone = {phone}
        image = {image}
        key = {name+city+title+phone+image}
        />
    <div className="CVbody">
        <div className="left">
        <Details 
        email = {email}
        address = {address}
        phone = {phone}
        key = {email+address+phone}/>
        <Skills 
        skills = {skills}
        key = {skills}
        /> 
        {console.log(skills)}

        
    

        </div>
        <div className="right">
        <Profile 
        profile = {profile}
        key = {profile[2]}
        />
        <Education />
        <EmploymentHx />
        </div>
    </div>
   
    </div>
</div>
        </>
    )
}

export default Form