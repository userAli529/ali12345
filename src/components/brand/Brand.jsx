import React from 'react'
import './Brand.css'
import { useTranslation } from 'react-i18next'

const Brand = () => {
    const { t } = useTranslation()
    return (
        <div className='brand'>
            <div className='left'>
                <div>
                    <h3>{t("From a studio in London to a global brand with over 400 outlets")}</h3>
                    <p>{t("When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.")}<br /><br />{t("Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.")}</p>
                </div>
                <button>{t("Get in touch")}</button>
            </div>
            <div className='right'>
                <img src="./src/assets/sofa.png" alt="" />
            </div>
        </div>
    )
}

export default Brand