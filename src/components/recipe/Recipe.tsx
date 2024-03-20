import RecipeHeader from '../recipe-header/RecipeHeader';
import imageOmelette from '../../assets/images/image-omelette.jpeg';
import RecipeImage from '../recipe-image/RecipeImage';
import PreparationTime from '../preparation-time/PreparationTime';
import Ingredients from '../ingredients/Ingredients';
import Instructions from '../instructions/Instructions';
import NutritionTable from '../nutrition-table/NutritionTable';

const Recipe = () => {
  return (
    <article>
      <RecipeImage
        src={imageOmelette}
        alt="Photo of an omelette in a plate with salad inside"
      />
      <RecipeHeader
        title="Simple Omelette Recipe"
        description="An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats."
      />
      <PreparationTime preparationDuration={5} cookingDuration={5} />
      <Ingredients
        ingredients={[
          '2-3 large eggs',
          'Salt, to taste',
          'Pepper, to taste',
          '1 tablespoon of butter or oil',
          'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
        ]}
      />
      <Instructions
        instructions={[
          {
            title: 'Beat the eggs',
            description:
              'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
          },
          {
            title: 'Heat the pan',
            description:
              'Place a non-stick frying pan over medium heat and add butter or oil.',
          },
          {
            title: 'Cook the omelette',
            description:
              'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
          },
          {
            title: 'Add fillings (optional)',
            description:
              'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
          },
          {
            title: 'Fold and serve',
            description:
              'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
          },
          {
            title: 'Enjoy',
            description:
              'Serve hot, with additional salt and pepper if needed.',
          },
        ]}
      />
      <NutritionTable
        nutritionItems={[
          { title: 'Calories', value: '277kcal' },
          { title: 'Carbs', value: '0g' },
          { title: 'Protein', value: '20g' },
          { title: 'Far', value: '22g' },
        ]}
      />
    </article>
  );
};

export default Recipe;
