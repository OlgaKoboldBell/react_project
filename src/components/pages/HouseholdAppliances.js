import React from "react";
import { useEffect, useState } from "react";
import Header from "../structure/Header";
import Footer from "../structure/Footer";

function HouseholdAppliances() {

    const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/productrepair")
      .then((response) => response.json())
      .then((json) => setAccessories(json));
  }, []);


  return (
 
     <div className="HouseholdAppliances">
         <Header />
         <div className="accessories">

<div className="accessoriesh2">Ремонт побутової техніки</div>
<div className="remont_HouseholdAppliances">
      <div className="housestechniques_div">
          Ми ремонтуємо:
          
          {accessories.map((accessorie) => (
            <div key={accessorie.id}>
              * {accessorie.name}
              </div>
          ))}
      </div>
      <div className="housestechniques_div">
          <img className="housestechniques" src="/images/housestechniques.jpg" alt="" />
      </div>
</div>
<div className="accessoriesh2">Ремонт побутової техніки, в тому числі ремонт пральної машини, – це складна задача у всіх відношеннях, за яку візьмуться спеціалісти компанії “МайстерОк”. Ми працюємо у Львові вже не перший рік.

Наші спеціалісти розуміють, наскільки важливою для Вас є побутова техінка, а тому ремонт холодильників, порохотягів чи мікрохвильових печей виконують швидко та якісно. Ми ремонтуємо побутову техніку, в тому числі проводимо ремонт пральних машин у Львові,всіх марок. Зокрема це Zanussi, LG, Indesit, Bosch, Ariston, Elektrolux, Samsung, Ardo та ін.</div>

</div>

          <Footer />
    </div>
  );

}

export default HouseholdAppliances;