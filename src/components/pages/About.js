import React from "react";
import { useEffect, useState } from "react";
import Header from "../structure/Header";
import Footer from "../structure/Footer";
import "./pages.css";

function About() {

  const [productbrends, setProductbrends] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/productbrend")
      .then((response) => response.json())
      .then((json) => setProductbrends(json));
  }, []);

  return (
 
     <div className="About">

          <Header />

          <div className="about_home">
             <div>
                 <img className="about_image" src="/images/image_about.jpg" alt="" />
             </div>
             <div className="about">
                 <p>Компанія "Майстер" на протязі 10 років надає професійні послуги по ремонту техніки багатогалузевого направлення</p>
                 <p>Наші працівники мають великий досвід по ремонту як мобільної, так і домашньої техніки.</p>
                 <p>Щоб зробити замовлення, зайдіть, будь ласка, на сторінку "Контакти".</p>
             </div>
             <div className="about">
                 <p>Бренди, з якими ми працюємо:</p>
                 {productbrends.map((productbrend) => (
                     <div className="productbrend" key={productbrend.id}>
                              {productbrend.name}
                     </div>
          ))}
             </div>

          </div>
       
          <Footer />
    </div>
  );

}

export default About;