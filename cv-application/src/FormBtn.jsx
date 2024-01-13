function FormBtn() {

    const handleClick = (e) => {
        e.target.classList.length > 2 ? e.target.classList.remove("active") : e.target.classList.add("active")
    }
    return(
        <div className="form btn" onClick={(e)=>{handleClick(e)}}>
            Form
        </div>
    )
}

export default FormBtn