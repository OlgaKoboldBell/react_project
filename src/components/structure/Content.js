import React from "react";
import { Link } from "react-router-dom";
// import Menu from "./Menu";

function Content() {
    return (
        <div className="content_home">

        <div className="content">
        <img src="/images/image_home1.jpg" alt="" />
        </div>
        <div className="content">
            <p>Компанія "Майстер" має великий досвід по ремонту техніки багатогалузевого направлення</p>
            <p>Якщо Вам потрібно швидка та якісна допомога по ремонту техніки, ви можете замовити послуги нашої компанії</p>
            <p>Ми врятуємо Вашу техніку від недоліків та проблем любої складності!</p>
        </div>
        <div className="content">
             <p>Наші майстри - справжні професіонали свого діла. Мають великий досвід по ремонту як мобільної, так і домашньої техніки.</p>
             <p>Переваги компанії "Майстер":</p> 
             <p>гарантія 6 місяців,</p>
             <p>безкоштовна доставка,</p>
             <p>виїзд до місця замовлення.</p>
        </div>
        <div className="content">
        <img src="/images/image_home2.jpg" alt="" />
        </div>
</div>
    );
}

export default Content;

