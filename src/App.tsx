import styles from './App.module.scss';
import Recipe from './components/recipe/Recipe';

function App() {
  return (
    <main className={styles.mainContainer}>
      <Recipe />
    </main>
  );
}

export default App;
