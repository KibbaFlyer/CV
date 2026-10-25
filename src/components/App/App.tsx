import appStyles from './App.module.css'
import Navbar from '../Navbar/Navbar.tsx'
import Intro from '../Intro/Intro.tsx'
import About from '../About/About.tsx'
import Education from '../Education/Education.tsx'
import Experience from '../Experience/Experience.tsx'
import Projects from '../Projects/Projects.tsx'
import Contact from '../Contact/Contact.tsx'
import CookieConsent, { Cookies } from "react-cookie-consent";
import { useTranslation } from 'react-i18next';


function App() {

  const handleAcceptCookie = () => {
    const script1 = document.createElement('script');
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-KY8SZVYSLN";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KY8SZVYSLN');
    `;
    document.head.appendChild(script2);
  }

  const handleDeclineCookie = () => {
    Cookies.remove("_ga");
    Cookies.remove("_ga_KY8SZVYSLN");
  };

  const { t } = useTranslation('App');

  return (
    <>
      <div className={appStyles.App} id="top">
        <Navbar />
        <Intro />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <CookieConsent
          enableDeclineButton
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
        >
          {t('cookieConsent')}
        </CookieConsent>
      </div>
    </>
  )
}

export default App
