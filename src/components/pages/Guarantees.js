import React from "react";
import Header from "../structure/Header";
import Footer from "../structure/Footer";

function Guarantees() {
  return (
 
     <div className="Guarantees">
          <Header />
     <div className="guarantees_home">
      <div className="guarantees">
        <div className="guarant">
        <img className="guarant_image" src="/images/image_garant1.jpg" alt="" />
        </div>
        <div className="guarant">
          <p></p>
          <p></p>
          <p></p>
        <h1>Гарантії для наших клієнтів - безпека та надійність</h1>
        </div>
        <div className="guarant">
        <p>
             Ми турбуємося про авторитет власної компанії, тому виконуємо усі послуги
             на високому рівні. До техніки клієнтів ставимося з великою обережністю, розуміючи, що від 
             довготривалості та якості наданих умов залежить імедж кожного з наших працівників.
          </p>
          <p>
            У разі виникнення питань, претензій чи пропозицій - звертайтеся:   Телефони: 123456789 
          </p>
          <p>E-mail: aaaaaaaaaa@gmail.com </p>
        </div>
     </div>
     <div className="guarant_table">
           <div>
               <img className="guarant_table1" src="/images/image_garant.png" alt="" />
           </div>
           <div>
               <img className="guarant_table2" src="/images/image_garant2.png" alt="" />
           </div>

     </div>


     </div>
          <Footer />
    </div>
  );

}

export default Guarantees;