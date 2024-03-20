interface IngredientsProps {
  ingredients: Array<string>;
}

const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <section>
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
