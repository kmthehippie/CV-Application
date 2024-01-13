

function SampleBtn() {

    const handleClick = (e) => {
        e.target.classList.length > 2 ? e.target.classList.remove("active") : e.target.classList.add("active")
    }
    return(
        <div className="sample btn" onClick={(e)=>{handleClick(e)}}>
            Sample
        </div>
    )
}

export default SampleBtn