interface RecipeImageProps {
  src: string;
  alt?: string;
}

const RecipeImage = ({ src, alt = '' }: RecipeImageProps) => {
  return (
    <picture>
      <img src={src} alt={alt} />
    </picture>
  );
};

export default RecipeImage;
