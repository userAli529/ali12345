import React from 'react'
import './SignUp.css'
import { useTranslation } from 'react-i18next'

const Signin = () => {
  const { t } = useTranslation()
  return (
    <div className='sign-up'>
      <div className='sign-up-card'>
        <div>
          <h1>{t("Join the club and get the benefits")}</h1>
          <p>{t("Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more")}</p>
        </div>
        <div>
          <input type="text" placeholder='your@email.com' />
          <button>{t("Sign up")}</button>
        </div>
      </div>
    </div>
  )
}

export default Signin