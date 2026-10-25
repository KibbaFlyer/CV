import { getImageUrl } from '../../utils';
import styles from './Education.module.css';
import educationsData from "../../data/education.json";
import { useTranslation } from 'react-i18next';

interface Education {
  educationName: {
    [key: string]: string;
  };
  school: {
    [key: string]: string;
  };
  startDate: string;
  endDate: string;
  courses: {
    [key: string]: string[];
  };
  imageSrc?: string;
}

const educations: Education[] = educationsData as unknown as Education[];

const Education = () => {
  const { t, i18n } = useTranslation('Education');
  const currentLanguage = i18n.resolvedLanguage || 'en';

  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>{t('education')}</h2>
      <div className={styles.content}>
        <ul className={styles.educations}>
        {[...educations].sort((a, b) => b.startDate.localeCompare(a.startDate)).map((education, id) => {
            return (
              <li key={id} className={styles.education}>
                <div className={styles.educationDetails}>
                {education.imageSrc != null && <img
                  src={getImageUrl(education.imageSrc!)}
                  alt={`${education.school[currentLanguage]} Logo`}
                />}
                  <h3>{`${education.educationName[currentLanguage]}, ${education.school[currentLanguage]}`}</h3>
                  <p>{`${education.startDate} - ${education.endDate}`}</p>
                  <ul>
                    {education.courses[currentLanguage].map((courses, id) => {
                      return <li key={id}>{courses}</li>;
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

export default Education;
