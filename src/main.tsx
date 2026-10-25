import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
