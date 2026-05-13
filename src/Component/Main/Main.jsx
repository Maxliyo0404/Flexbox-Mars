import { useTranslation } from "react-i18next";
import "./Main.css";
import React from 'react'

function Main() {
    const {t, i18n} = useTranslation();
  return (
   <>
     <div className="main">
        <div className="container">
            <div className="main-wrapper">
                <ul  className="main-list">
                    <li className="main-item">
                        <img src={} alt="main" />
                        <h2 className="main-title"></h2>
                        <p className="main-text"></p>
                    </li>
                </ul>
            </div>
        </div>
     </div>
   
   </>
  )
}

export default Main