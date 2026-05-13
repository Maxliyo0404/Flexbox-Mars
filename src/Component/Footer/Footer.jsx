import { useTranslation } from "react-i18next";
import "./Footer.css";
import React from 'react'
import footer_1 from "./image/footer_1.svg";

function Footer() {
    const {t, i18n} = useTranslation();
  return (
   <>  
     <div className="footer">
        <div className="container">
            <div className="footer-wrapper">
                <a href="#"><img src={footer_1} alt="rasm" /></a>
                <ul className="footer-list">
                    <li><a className="header-link">{t("footer.home")}</a></li>
                    <li><a className="header-link">{t("footer.about")}</a></li>
                    <li><a className="header-link">{t("footer.services")}</a></li>
                    <li><a className="header-link">{t("footer.work")}</a></li>
                    <li><a className="header-link">{t("footer.blog")}</a></li>
                </ul>
            </div>
        </div>
     </div>
   </>
  )
}

export default Footer