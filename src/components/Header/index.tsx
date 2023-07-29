import { useTranslation } from 'react-i18next';
import esAr from './../../assets/argentina.png';
import ptBr from './../../assets/brasil.png';
import enUs from './../../assets/eua.png';
import frFr from './../../assets/franca.png';
import styles from './styles.module.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>{t('appTitle.main')}</h1>

      <button className={styles.flagButton} onClick={() => i18n.changeLanguage('en')}>
        <img src={enUs} alt="English" />
      </button>

      <button className={styles.flagButton} onClick={() => i18n.changeLanguage('pt')}>
        <img src={ptBr} alt="Português brasileiro" />
      </button>
      
      <button className={styles.flagButton} onClick={() => i18n.changeLanguage('es')}>
        <img src={esAr} alt="Español" />
      </button>

      <button className={styles.flagButton} onClick={() => i18n.changeLanguage('fr')}>
        <img src={frFr} alt="Français" />
      </button>
    </div>
  );
}

export default Header;