import { useState, useEffect } from "react";
import Child from "./Child"

export default function Parent(){
    
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [title, setTitle] = useState("")
    const [phone, setPhone] = useState("")
   


    const [data, setData] = useState([{
        firstName:"", 
        lastName:"",
        title: "",
        email:"", 
        phone:"", 
        address:"",
        city:"",
        postalCode:"",
        country:""
    }])


    const handleChange = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        const onChangeVal = [...data]
        onChangeVal[0][name] = value
        setData(onChangeVal)
    }

    const handleClick = () =>{
        let name = data[0].firstName + " " + data[0].lastName
        let title = data[0].title
        let city = data[0].city
        let phone = data[0].phone

        setName (name)
        setCity (city)
        setTitle (title)
        setPhone (phone)
    }

    

    return (
<div>
        <h1>Hello: {name + city}</h1>
        <Child 
        name = {name}
        city = {city}
        title = {title}
        phone = {phone}
        key = {name}
        />
    {
        data.map((val)=>
        <>                
        <fieldset>
            <legend>Name</legend>
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
            
        </fieldset>
        <fieldset>
                <legend>Contact Details</legend>
            <div>
            <label htmlFor="email">Email: </label>
            <input required type="email" id="email" name="email" autoComplete="email"  value={val.email} onChange={(e)=>handleChange(e)} placeholder="BobRoss@gmail.com" />
            </div>
            <div>
            <label htmlFor="phone">Phone Number: </label>
            <input required type="phone" id="phone" name="phone" autoComplete="phone" value={val.phone} onChange={(e)=>handleChange(e)} placeholder="+6012-32323232" />
            </div>
            <div>
            <label htmlFor="street-address">Address: </label>
            <input required type="text" id="street-address" name="street-address" autoComplete="street-address" value={val.address} onChange={(e)=>handleChange(e)} placeholder="9, Road of Opportunities 1" />
            </div>
            <div>
            <label required htmlFor="city">City: </label>
            <input type="text" id="city" name="city" autoComplete="city" value={val.city} onChange={(e)=>handleChange(e)} placeholder="HappyLand" />
            </div>
            <div>
            <label htmlFor="postal-code">Postal Code <p className="optional">*Optional</p> </label>
            <input type="text" id="postal-code" name="postalCode" autoComplete="postal-code" value={val.postalCode} onChange={(e)=>handleChange(e)} placeholder="21222" />
            </div>
            <div>
            <label htmlFor="country">Country: </label>
            <input required type="text" id="country" name="country" autoComplete="country" value={val.country} onChange={(e)=>handleChange(e)} placeholder="Malaysia" />
            </div>
        </fieldset>
        </>
        )
    }

    <button onClick={() => handleClick()}>Click this to test</button>
</div>
    )
}