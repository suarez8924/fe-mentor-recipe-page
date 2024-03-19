import RecipeHeader from '../recipe-heading/RecipeHeader';
import imageOmelette from '../../assets/images/image-omelette.jpeg';

const Recipe = () => {
  return (
    <article>
      <RecipeHeader
        title="Simple Omelette Recipe"
        description="An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats."
        headerImage={{
          src: imageOmelette,
          alt: 'Photo of an omelette in a plate with salad inside',
        }}
      />
    </article>
  );
};

export default Recipe;
