import { useTranslation } from "react-i18next";
import "./Main.css";
import React from 'react'
import main_1 from "./image/main_1.svg";
import main_2 from "./image/main_2.svg";


function Main() {
    const {t, i18n} = useTranslation();
  return (
   <>
     <div className="main">
        <div className="container">
            <div className="main-wrapper">
                <ul  className="main-list">
                    <li className="main-item">
                        <img src={main_1} alt="main" />
                        <h2 className="main-title">{t("main.main-title1")}</h2>
                        <p className="main-text">{t("main.main-text")}</p>
                    </li>
                    <li className="main-item">
                        <img src={main_2} alt="main" />
                        <h2 className="main-title">{t("main.main-title2")}</h2>
                        <p className="main-text">{t("main.main-text")}</p>
                    </li>
                    <li className="main-item">
                        <img src={} alt="main" />
                        <h2 className="main-title">{t("main.main-title3")}</h2>
                        <p className="main-text">{t("main.main-text")}</p>
                    </li>
                    <li className="main-item">
                        <img src={} alt="main" />
                        <h2 className="main-title">{t("main.main-title1")}</h2>
                        <p className="main-text">{t("main.main-text")}</p>
                    </li>
                    <li className="main-item">
                        <img src={} alt="main" />
                        <h2 className="main-title">{t("main.main-title2")}</h2>
                        <p className="main-text">{t("main.main-text")}</p>
                    </li>
                    <li className="main-item">
                        <img src={} alt="main" />
                        <h2 className="main-title">{t("main.main-title3")}</h2>
                        <p className="main-text">{t("main.main-text")}</p>
                    </li>
                </ul>
            </div>
        </div>
     </div>
   
   </>
  )
}

export default Main