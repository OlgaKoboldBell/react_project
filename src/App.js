import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Guarantees from "./components/pages/Guarantees";
import Prices from "./components/pages/Prices";
import Reviews from "./components/pages/Reviews";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Accessories from "./components/pages/Accessories";
import HouseholdAppliances from "./components/pages/HouseholdAppliances";
import ComputerEngineering from "./components/pages/ComputerEngineering";
import CommunicationTechnique from "./components/pages/CommunicationTechnique";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/guarantees" element={<Guarantees />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/reviews" element={<Reviews />} />


        <Route path="/communicationTechnique" element={<CommunicationTechnique />} />
        <Route path="/computerEngineering" element={<ComputerEngineering />} />
        <Route path="/householdAppliances" element={<HouseholdAppliances/>} />

      </Routes>
    </BrowserRouter>
  );

}

export default App;
