function ResultBtn() {

    const handleClick = (e) => {
        e.target.classList.length > 2 ? e.target.classList.remove("active") : e.target.classList.add("active")    
    }
    return(
        <div className="result btn" onClick={(e)=>{handleClick(e)}}>
            Result
        </div>
    )
}

export default ResultBtn