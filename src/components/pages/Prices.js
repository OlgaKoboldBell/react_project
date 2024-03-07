import React from "react";
import { useEffect, useState } from "react";
import Header from "../structure/Header";
import Footer from "../structure/Footer";

function Prices() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/pricedetail")
      .then((response) => response.json())
      .then((json) => setPrices(json));
  }, []);

  const [productrepairs, setProductrepair] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/typerepair")
      .then((response) => response.json())
      .then((json) => setProductrepair(json));
  }, []);


  return (
 
     <div className="Prices">
          <Header />
          <div className="prices">
          <div className="prices_home1">
               <div>
                   <h1>Види ремонтних робіт</h1>
               </div>
               <div>
                   <table>
                      <thead>
                         <tr>
                             <th>Номер</th>
                             <th>Вид ремонтних робіт</th>
                         </tr>
                     </thead>
                     <tbody>
                        {productrepairs.map((productrepair) => (
                         <tr key={productrepair.id}>
                            <td>{productrepair.id}</td>
                            <td>{productrepair.name}</td>
                         </tr>
                        ))}
                    </tbody>
                   </table>
               </div>
          </div>
          <div className="prices_home2">
               <div>
                   <h1>Вартість послуг</h1>
               </div>
               <div>
                   <table>
                      <thead>
                         <tr>
                             <th>Номер послуги</th>
                             <th>Послуга</th>
                             <th>Ціна</th>
                         </tr>
                     </thead>
                     <tbody>
                        {prices.map((price) => (
                         <tr key={price.id}>
                            <td>{price.id}</td>
                            <td>{price.name}</td>
                            <td>{price.price}</td>
                         </tr>
                        ))}
                    </tbody>
                   </table>
               </div>
          </div>
     </div>
          <Footer />
    </div>
  );

}

export default Prices;