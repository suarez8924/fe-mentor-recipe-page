import styles from './Ingredients.module.scss';
interface IngredientsProps {
  ingredients: Array<string>;
}

const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <section className={styles.ingredients}>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
};

export default Ingredients;
