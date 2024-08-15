import React from 'react'
import '../../styles/Hero.css'
import { useTranslation } from 'react-i18next'

const Hero = () => {
    const { t }=useTranslation()
    return (
        <div className='hero'>
            <div className='banner'>
                <div className='text'>
                    <h1>{t("The furniture brand for the future, with timeless designs")}</h1>
                    <button>{t("View collection")}</button>
                    <p>{t("A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.")} </p>
                </div>
                <div className='hero-img'><img src="./src/assets/heroimg.jpg" alt="" /></div>
            </div>
        </div>
    )
}

export default Hero