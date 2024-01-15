import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
// import SampleBtn from "./SampleBtn.jsx"
// import ResultBtn from "./ResultBtn.jsx"
// import FormBtn from "./FormBtn.jsx"
import Form from "./Form.jsx"
import "./App.css"


function App() {

  
 return(
  <>
  {/* Add a header here */}
  
    <div className="top-btm">
      <div className="top">
        <Header />
      </div>
      <div className="body">
      
        <Form />
        
      </div>
    </div>
    
    <Footer />

 </>
 )
}

export default App
