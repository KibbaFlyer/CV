import { getImageUrl } from '../../utils';
import styles from './Intro.module.css';
import { useTranslation } from 'react-i18next';

const Intro = () => {
    const { t } = useTranslation('Intro');
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{t('introStart')}</h1>
                <p className={styles.description}>
                    {t('introText')}
                </p>
                <a href="mailto:kristoffer.flygare@gmail.com" className={styles.contact}>{t('contactMe')}</a>
            </div>
            <img className={styles.image} src={getImageUrl("intro/memoji.png")} alt="Memoji of me" />
            <div className={styles.topBlur} />
        </section>
    )
}

export default Intro;