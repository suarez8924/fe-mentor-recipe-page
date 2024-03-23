import styles from './PreparationTime.module.scss';

interface PreparationTimeProps {
  preparationDuration: 5;
  cookingDuration: 5;
}

const getMinutesString = (minutes: number) => {
  return `${minutes} minute${minutes > 1 ? 's' : ''}`;
};

const PreparationTime = ({
  preparationDuration,
  cookingDuration,
}: PreparationTimeProps) => {
  const totalDurationString = `Approximately ${getMinutesString(
    preparationDuration + cookingDuration
  )}`;

  return (
    <section className={styles.preparationTime}>
      <div className={styles.contentWrapper}>
        <h2>Preparation time</h2>
        <ul>
          <li>
            <strong>Total:</strong> {totalDurationString}
          </li>
          <li>
            <strong>Preparation:</strong>{' '}
            {getMinutesString(preparationDuration)}
          </li>
          <li>
            <strong>Cooking:</strong> {getMinutesString(cookingDuration)}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PreparationTime;
