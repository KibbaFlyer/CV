import { getImageUrl } from '../../utils';
import styles from './Projects.module.css';
import projectsData from "../../data/projects.json";
import { useTranslation } from 'react-i18next';

interface Project {
  title: {
    [key: string]: string;
  };
  description: {
    [key: string]: string;
  };
  skills: {
    [key: string]: string[];
  };
  imageSrc?: string;
  demo?: string;
  source?: string;
}

const projects: Project[] = projectsData as unknown as Project[];

const Projects = () => {
  const { t, i18n } = useTranslation('Projects');
  const currentLanguage = i18n.resolvedLanguage || 'en';

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t('projects')}</h2>
      <div className={styles.content}>
        <ul className={styles.projects}>
          {[...projects].sort((a, b) => a.title[currentLanguage].localeCompare(b.title[currentLanguage])).map((project, id) => {
            return (
              <li key={id} className={styles.project}>
                <div className={styles.projectDetails}>
                  {project.imageSrc != null && <img
                    src={getImageUrl(project.imageSrc!)}
                    alt={`${project.title[currentLanguage]} Logo`}
                  />}
                  {project.imageSrc == null && <div
                  />}
                  <h3>{`${project.title[currentLanguage]}`}</h3>
                  <p>{`${project.description[currentLanguage]}`}</p>
                  <ul>
                    {[...project.skills[currentLanguage]].sort((a, b) => a.localeCompare(b)).map((skill, id) => {
                      return <li key={id}>{skill}</li>;
                    })}
                  </ul>
                  <div className={styles.linkDiv}>
                    <a href={project.demo}>
                      {project.demo != null && <button>{t('demo')}</button>}
                    </a>
                    <a href={project.source}>
                      {project.source != null && <button>{t('source')}</button>}
                    </a>
                  </div>
                </div>

              </li>

            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Projects
