import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t} = useTranslation()
  return (
    <div className='footer'>
      <div className='footer-wrap'>
        <div className='top'>
          <div>
            <p>{t("Menu")}</p>
            <a href="">{t("New arrivals")}</a>
            <a href="">{t("Best sellers")}</a>
            <a href="">{t("Recently viewed")}</a>
            <a href="">{t("Popular this week")}</a>
            <NavLink to={'/products'}><a href="">{("All products")}</a></NavLink>
          </div>
          <div>
            <p>{t("Categories")}</p>
            <a href="">{t("Crockery")}</a>
            <a href="">{t("Furniture")}</a>
            <a href="">{t("Homeware")}</a>
            <a href="">{t("Plant pots")}</a>
            <a href="">{t("Chairs")}</a>
          </div>
          <div>
            <p>{t("Our company")}</p>
            <NavLink to={'/about'}>{t("About us")}</NavLink>
            <a href="">{t("Vacancies")}</a>
            <a href="">{t("Contact us")}</a>
            <a href="">{t("Privacy")}</a>
            <a href="">{t("Returns policy")}</a>
          </div>
          <div>
            <p>{t("Join our mailing list")}</p>
            <span>
              <input type="text" placeholder='your@email.com' />
              <button>{t("Sign up")}</button>
            </span>
          </div>
        </div>
        <div className='bottom'>
          <p>Copyright 2022 Avion LTD</p>
          <div className='socials'>
            <img src="./src/assets/linkedin.svg" alt="" />
            <img src="./src/assets/facebook.svg" alt="" />
            <img src="./src/assets/instagram.svg" alt="" />
            <img src="./src/assets/skype.svg" alt="" />
            <img src="./src/assets/twitter.svg" alt="" />
            <img src="./src/assets/pinterest.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer