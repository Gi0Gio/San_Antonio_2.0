import React from 'react'
import ReactDOM from 'react-dom/client'

import AppHeader from './components/appheader.jsx'
import Index from './asset/Index.jsx'
import AboutUs from './asset/aboutUs.jsx'
import Contacts from './asset/contacts.jsx'
import Activites from './asset/activities.jsx'
import Footer from './components/footer.jsx'


import './scss/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppHeader />
    <Index />
    <AboutUs />
    <Contacts />
    <Activites />
    <Footer />
  </React.StrictMode>
)
