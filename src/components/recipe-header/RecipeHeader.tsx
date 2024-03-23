import styles from './RecipeHeader.module.scss';

interface RecipeHeaderProps {
  title: string;
  description: string;
}

const RecipeHeader = ({ title, description }: RecipeHeaderProps) => {
  return (
    <header className={styles.recipeHeader}>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

export default RecipeHeader;
