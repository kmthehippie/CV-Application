import "./footer.css"

export default function Footer (){
    const credits = [
        {id: 1, name: "Rawpixel.com on Freepik", 
        link: "https://www.freepik.com/free-vector/illustration-businesswoman_2606518.htm#query=profile%20placeholder&position=31&from_view=keyword&track=ais&uuid=0a1e52bb-cd1a-4604-9778-e594663bd37a"},
        {id: 2, name: "Photo by Sora Shimazaki", 
        link: "https://www.pexels.com/photo/focused-woman-writing-in-clipboard-while-hiring-candidate-5668869/"},
        {id: 3, name: "Something", 
        link: "https://www.pexels.com/photo/woman-in-black-blazer-sitting-at-the-table-7845470/"},
        {id: 4, name: "YOOOOO", 
        link: "https://www.pexels.com/photo/woman-in-black-blazer-sitting-at-the-table-7845470/"},
        {id: 5, name: "RDNE Stock project", 
        link: "https://www.pexels.com/photo/woman-in-black-blazer-sitting-at-the-table-7845470/"},
      ]

  

    const listCredits = credits.map(credit => 
    <p key={credit.id}> <a href={credit.link}> {credit.name} </a> </p>)

    return (
        <div className="footer">
            <p> &copy; {new Date().getFullYear()} KM CV Application </p>
            <div className="credits">
              {listCredits}
            </div>
        </div>
    )

}


