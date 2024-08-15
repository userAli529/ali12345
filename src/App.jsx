import React from 'react'
import Layout from './components/layout/Layout'
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t }=useTranslation()
  return (
    <div>
      <Layout/>
    </div>
  )
}

export default App