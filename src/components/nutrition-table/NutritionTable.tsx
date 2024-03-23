import styles from './NutritionTable.module.scss';
interface NutritionTableProps {
  nutritionItems: Array<{
    title: string;
    value: string;
  }>;
}

const NutritionTable = ({ nutritionItems }: NutritionTableProps) => {
  return (
    <section className={styles.nutritionTable}>
      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table>
        {nutritionItems.map((nutritionItem) => (
          <tr>
            <td>{nutritionItem.title}</td>
            <td>{nutritionItem.value}</td>
          </tr>
        ))}
      </table>
    </section>
  );
};

export default NutritionTable;
