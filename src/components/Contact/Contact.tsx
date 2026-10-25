import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('Contact');
  return (
    <div className={styles.container} id="contact">
      <h2 className={styles.title}>{t('contact')}</h2>
      <div className={styles.detailsDiv}>
        <div>
          <div className={styles.detailsSubDiv}>
            <img src={getImageUrl("contact/icons8-email-64.png")} alt=""></img>
            <a href="mailto:kristoffer.flygare@gmail.com">kristoffer.flygare@gmail.com</a>
          </div>
          <div className={styles.detailsSubDiv}>
            <img src={getImageUrl("contact/icons8-linkedin-64.png")} alt=""></img>
            <a href="https://www.linkedin.com/in/kristoffer-flygare-b43115b1/">https://www.linkedin.com/in/kristoffer-flygare-b43115b1/</a>
          </div>
          <div className={styles.detailsSubDiv}>
            <img src={getImageUrl("contact/icons8-github-64.png")} alt=""></img>
            <a href="https://github.com/KibbaFlyer">https://github.com/KibbaFlyer</a>
          </div>
        </div>
        <div className={styles.infoDiv}>
          <p>90408 Nürnberg, {t('germany')}</p>
          <p>
            <a href="https://icons8.com">{t('icons8')}</a>
          </p>
        </div>
      </div>
    </div>


  )
}

export default Contact;
