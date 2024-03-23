import styles from './RecipeImage.module.scss';
interface RecipeImageProps {
  src: string;
  alt?: string;
}

const RecipeImage = ({ src, alt = '' }: RecipeImageProps) => {
  return (
    <picture className={styles.imageWrapper}>
      <img src={src} alt={alt} />
    </picture>
  );
};

export default RecipeImage;
