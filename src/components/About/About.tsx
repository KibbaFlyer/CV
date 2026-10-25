import { getImageUrl } from '../../utils';
import styles from './About.module.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const About = () => {
    const { t } = useTranslation('About');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
                    entry.target.classList.remove(styles.hidden);
                } else {
                    entry.target.classList.add(styles.hidden);
                    entry.target.classList.remove(styles.show);
                  }
            });
        })

        const hiddenElements = document.querySelectorAll(`.${styles.hidden}`);
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, [])



    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>{t("about")}</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/memoji.png")}
                    alt="Memoji of me with a computer"
                    className={styles.imageBig} />
                <ul className={styles.items}>
                    <li className={`${styles.aboutItem} ${styles.hidden}`}>
                        <img
                            src={getImageUrl("about/crane.png")}
                            alt="Cursor"
                            className={styles.image} />
                        <div>
                            <h3>{t('background')}</h3>
                            <p>
                                {t('backgroundText')}
                            </p>
                        </div>
                    </li>
                    <li className={`${styles.aboutItem} ${styles.hidden}`}>
                        <img
                            src={getImageUrl("about/frontend.png")}
                            alt="Cursor"
                            className={styles.image} />
                        <div>
                            <h3>{t('frontend')}</h3>
                            <p>
                                {t('frontendText')}
                            </p>
                        </div>
                    </li>
                    <li className={`${styles.aboutItem} ${styles.hidden}`}>
                        <img
                            src={getImageUrl("about/server.png")}
                            alt="Backend"
                            className={styles.image} />
                        <div>
                            <h3>{t('backend')}</h3>
                            <p>
                                {t('backendText')}
                            </p>
                        </div>
                    </li>
                    <li className={`${styles.aboutItem} ${styles.hidden}`}>
                        <img
                            src={getImageUrl("about/lowcode.png")}
                            alt="UI"
                            className={styles.image} />
                        <div>
                            <h3>{t('lowcode')}</h3>
                            <p>
                                {t('lowcodeText')}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;