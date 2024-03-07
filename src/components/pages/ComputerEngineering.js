import React from "react";
import Header from "../structure/Header";
import Footer from "../structure/Footer";

function ComputerEngineering() {
  return (
 
     <div className="ComputerEngineering">
          <Header />
          <div className="accessories">

              <div className="accessoriesh2">Ремонт комп'ютерної техніки</div>
              <div className="remont_comp">
                    <div className="">
                        <img className="remont_comp1" src="/images/remont_comp.png" alt="" />
                    </div>
                    <div className="">
                        <img className="remont_comp1" src="/images/remont_comp2.png" alt="" />
                    </div>
              </div>
         </div>
          <Footer />
    </div>
  );

}

export default ComputerEngineering;