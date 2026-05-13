import { useTranslation } from "react-i18next";
import "./Hero.css";
import React from 'react'

function Hero() {
    const {t, i18n} = useTranslation();
  return (
    <>
      <div className="hero">
        <div className="container">
            <div className="hero-wrapper">
                <h1 className="hero-title">{t("hero.hero-title")}</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero