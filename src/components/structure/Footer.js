import React from "react";
import "./menu.css";

export default function Footer() {
    return (
        <div className="footer_home">

                <div className="footer">
                    <p>Телефон:</p>
                    <p>0 800 303 123</p>
                    <p>Пн.-Нд.: з 09:00 до 18:00</p>
                </div>
                <div className="footer">
                    <p>Факс: 0 800 303 123</p>
                    <p>E-mail:</p>
                    <p>aaaaaaaaaa@gmail.com</p>
                </div>
                <div className="footer">
                     <p>Адреса:</p>
                     <p>123456, м. Київ, вул. Миру, б. 1</p>
                </div>
                <div className="footer">
                     <p>Документація:</p>
                     <a  href="http://127.0.0.1:8000/">       
                     http://127.0.0.1:8000/
                </a>
                </div>
</div>

    );
}
