import React from "react";
import Header from "../structure/Header";
import Footer from "../structure/Footer";
import "./pages.css";

function Reviews() {
   const stringReviews = ["Усе сподобалося. Телефон відремонтували швидко. Надали гарантію на півроку. Дякую!", 
   "Попросила відремонтувати пральну машинку терміново. Майстер приїхав через 30 хвилин. Задоволена.", 
   "Не думала, що отримаю гарантію на пральну машинку. Майстер відремонтував пральну машинку терміново. Спасибі!", 
   "Майстри відремонтували хлібопічку терміново. Ввечері вже пекла хліб. Надали гарантію на півроку. Дякую!", 
   "Для ремонту холодильника треба були деталі та запчастини. Майстер знайшов все необхідне, надав чеки.",
    "Коли тріснув корпус ноутбука, думала, що прийдеться відправляти на деталі. Майстер відремонтував все акуратно. Дякую!",
    "Попросила відремонтувати пральну машинку терміново. Майстер приїхав через 30 хвилин. Задоволена."];

  return (
 
     <div className="Reviews">
          <Header />
          <div className="reviews">
          <div>
          <h1>Відгуки</h1>
          </div>
          <div>
          <table>
            <thead>
                <tr>
                   <th>Номер відгуку</th>
                   <th>Відгук</th>
                 </tr>
             </thead>
             <tbody>
             {stringReviews.map((value, index) => (
                 <tr key={index}>
                    <td>{index +1}</td>
                    <td>{value}</td>
                 </tr>
              ))}
             </tbody>
          </table>
          </div>
          </div>
          <Footer />
    </div>
  );

}

export default Reviews;