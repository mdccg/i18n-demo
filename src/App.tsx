import styles from './App.module.css';
import Header from './components/Header';
import { useTranslation } from 'react-i18next'; 

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <div className={styles.container}>
        <span className={styles.slogan}>{t('appTitle.slogan')}</span>
      </div>
    </>
  );
}

export default App;
