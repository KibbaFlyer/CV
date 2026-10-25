import { getImageUrl } from '../../utils';
import React, { useState } from "react";
import styles from './Navbar.module.css';
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation('Navbar');

    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <a className={styles.header} href="#top">Kristoffer Flygare</a>
                <div className={styles.menu}>
                    <button
                        type="button"
                        className={styles.menuBtn}
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={menuOpen}
                        aria-controls="navigation-links"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                    <img
                        src={
                            menuOpen
                                ? getImageUrl("navbar/closeIcon.png")
                                : getImageUrl("navbar/menuIcon.png")
                        }
                        alt="menu-button"
                    />
                    </button>
                    <ul id="navigation-links" onClick={(event) => { if ((event.target as HTMLElement).closest("a")) setMenuOpen(false); }} className={`${styles.items} ${menuOpen && styles.menuOpen}`}>
                        <li><a href="#about">{t('about')}</a></li>
                        <li><a href="#education">{t('education')}</a></li>
                        <li><a href="#experience">{t('experience')}</a></li>
                        <li><a href="#projects">{t('projects')}</a></li>
                        <li><a href="#contact">{t('contact')}</a></li>
                        <li><LanguageSwitcher /></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;