import { getImageUrl } from '../../utils';
import styles from './Experience.module.css';
import skills from "../../data/skills.json";
import historyData from "../../data/history.json";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

interface History {
  role: {
    [key: string]: string;
  };
  organisation: string,
  startDate: string;
  endDate: {
    [key: string]: string;
  };
  experiences: {
    [key: string]: string[];
  };
  imageSrc?: string;
}

const history: History[] = historyData as unknown as History[];

const Experience = () => {
  const { t, i18n } = useTranslation('Experience');
  const currentLanguage = i18n.resolvedLanguage || 'en';

  // Animation history
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

  // Animation image skills
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.showImg);
          entry.target.classList.remove(styles.hiddenImg);
        }
      });
    })

    const hiddenElements = document.querySelectorAll(`.${styles.hiddenImg}`);
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [])

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t('experience')}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {[...skills].sort((a, b) => a.title.localeCompare(b.title)).map((skill, id) => {
            return (
              <div key={id} className={`${styles.skill} ${styles.hiddenImg}`}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc!)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={`${styles.historyItem} ${styles.hidden}`}>
                <img
                  src={getImageUrl(historyItem.imageSrc!)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role[currentLanguage]}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate[currentLanguage]}`}</p>
                  <ul>
                    {historyItem.experiences[currentLanguage].map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
