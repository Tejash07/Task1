import React from "react";
import Footer from "./footer"; 
import Navbar from "./navbar";
import Rightbar from "./rightside";
import Middlecontent from "./middlecontent";
function App() {
  return (
    <div className=" ">
      <div>
        <div className="flex justify-center">
          <div>
          <Navbar className="bg-[#964B00]" />
          </div>
          <div >
          <Middlecontent className='mt-96 '/>
          </div>
          
        </div>
        
        <Footer className="bg-[#964B00]" />
      </div>
    </div>
  );
}

export default App;
