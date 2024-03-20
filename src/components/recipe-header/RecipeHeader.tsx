interface RecipeHeaderProps {
  title: string;
  description: string;
}

const RecipeHeader = ({ title, description }: RecipeHeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

export default RecipeHeader;
