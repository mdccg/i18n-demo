import styles from './App.module.css';
import Header from './components/Header';
import { useTranslation } from 'react-i18next'; 

const foodsMap = new Map<string, string>([
  ['en', 'fish and chips'],
  ['es', 'paella'],
  ['fr', 'ratatouille'],
  ['pt', 'arroz e feijão'],
]);

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Header />

      <div className={styles.container}>
        <span className={styles.slogan}>{t('appTitle.slogan')}</span>
        <span className={styles.slogan}>
          {t('content.foodSentence', { bestFood: foodsMap.get(i18n.language) })}
        </span>
        <span className={styles.slogan}>
          {t('content.currentDateTime', { date: new Date() })}
        </span>
      </div>
    </>
  );
}

export default App;
