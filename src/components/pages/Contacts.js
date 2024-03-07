import React, { useState } from 'react';
import Header from "../structure/Header";
import Footer from "../structure/Footer";

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    message: ''
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();

    // Ваш код для обробки та відправки даних, наприклад, за допомогою fetch
    fetch('http://127.0.0.1:8000/api/messege', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Успішно відправлено:', data);
    })
    .catch(error => {
        console.error('Помилка:', error);
    });
};

  return (
 
     <div className="Contacts">
          <Header />
          <div class="container_contacts">
          <div class="contacts">
    <h2 className='contactsh2'>Вас вітає ремонтне агенство "Майстер"</h2>
    <p>Адреса: м. Київ, вул. Миру, буд. 1</p>
    <p>Телефон: 0 800 303 123</p>
    <p>Факс: 0 800 303 123</p>
    <p>E-mail: aaaaaaaaaa@gmail.com</p>
    <p>Пн.-Нд.: з 09:00 до 18:00</p>
    <p>Документація: http://127.0.0.1:8000/</p>
    </div>
    <div class="contacts">
    <h2 className='contactsh2'>Щоб зробити замовлення, використовуйте форму нижче:</h2>
    <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="label1">Прізвище, ім'я:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            /><br />

<label htmlFor="tel" className="label1">Телефон:</label>
            <input
                type="tel"
                id="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                required
            /><br />

            <label htmlFor="email" className="label1">Електронна пошта:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            /><br />

<label htmlFor="message" className="label2">Повідомлення:</label>
            <input
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            /><br />

            <input type="submit" value="Відправити" className="submit" />
        </form>
    </div>
  </div>
          <Footer />
    </div>
  );

}

export default Contacts;