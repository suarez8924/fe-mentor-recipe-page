interface RecipeHeaderProps {
  title: string;
  description: string;
  headerImage: {
    src: string;
    alt?: string;
  };
}

const RecipeHeader = ({
  title,
  description,
  headerImage,
}: RecipeHeaderProps) => {
  return (
    <header>
      <picture>
        <img src={headerImage.src} alt={headerImage.alt || ''} />
      </picture>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
};

export default RecipeHeader;
