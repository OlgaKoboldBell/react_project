import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../structure/Header";
import Footer from "../structure/Footer";
import "./pages.css";
import ComputerEngineering from "./ComputerEngineering";
import HouseholdAppliances from "./HouseholdAppliances";
import CommunicationTechnique from "./CommunicationTechnique";

function Accessories() {


  return (
 
     <div className="Accessories">
          <Header />
          <div className="accessories">

            <div className="accessoriesh2">Категорії товарів</div>
            <div className="accessories1">
                <div className="accessories2">
                    <Link to="/communicationTechnique">Засоби зв'язку</Link>
                </div>
                <div className="accessories2">
                    <Link to="/computerEngineering">Комп'ютерна техніка</Link>
                </div>
                <div className="accessories2">
                    <Link to="/householdAppliances">Побутова техніка</Link>
                </div>
            </div>
            <div className="accessories1">
                <div className="accessories3">
                     <img className="guarant_image" src="/images/telefons.jpg" alt="" />
                </div>
                <div className="accessories3">
                     <img className="guarant_image" src="/images/computers.jpg" alt="" />
                </div>
                <div className="accessories3">
                     <img className="guarant_image" src="/images/homestechniques.jpg" alt="" />
                </div>
            </div>

          </div>
          <Footer />
    </div>
  );

}

export default Accessories;