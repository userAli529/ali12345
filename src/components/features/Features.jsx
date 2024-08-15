import React from 'react'
import '../../styles/Features.css'
import { useTranslation } from 'react-i18next'

const Features = () => {
    const { t } = useTranslation()
  return (
    <div className='features'>
        <h3>{t("What makes our brand different")}</h3>
        <div className='blocks'>
            <div>
                <img src="./src/assets/Delivery.svg" alt="" />
                <h4>{t("Next day as standard")}</h4>
                <p>{t("Order before 3pm and get your order the next day as standard")}</p>
            </div>
            <div>
                <img src="./src/assets/Checkmark.svg" alt="" />
                <h4>{t("Made by true artisans")}</h4>
                <p>{t("Handmade crafted goods made with real passion and craftmanship")}</p>
            </div>
            <div>
                <img src="./src/assets/Purchase.svg" alt="" />
                <h4>{t("Unbeatable prices")}</h4>
                <p>{t("For our materials and quality you won’t find better prices anywhere")}</p>
            </div>
            <div>
                <img src="./src/assets/Sprout.svg" alt="" />
                <h4>{t("Recycled packaging")}</h4>
                <p>{t("We use 100% recycled packaging to ensure our footprint is manageable")}</p>
            </div>
        </div>
    </div>
  )
}

export default Features