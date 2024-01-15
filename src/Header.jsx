
import "./header.css"
function Header(){
return(
    <div className="header-forReal">
    <div className="header-opacity">
    <div className="header-top">
    
    <h1>The Resume Maker</h1>
    
    <div className="header-bottom">
    <div className="instructions header-ins">
    <p>Instructions: </p>
       <ol>
        <li>Fill out the form. Be sure to have a look at the sample as you fill it out to get an idea of what should be included.</li>
        <li>As you complete each section, hit the dark update button to see your details appear on the form.</li>
        <li>Once you have completed the form, hit CTRL+P to print out your resume!</li>
       </ol>
    </div>
    <div className="subText">
    <p>A quick and easy way to prepare your resume</p>
    <p>Immediately see what your final resume looks like</p>
    <span className="mini">Best used on widescreen monitors. If on phone, scroll to bottom to see your resume.</span>
    </div>
    </div>
    
    </div>
    </div>
    </div>
)
}

export default Header