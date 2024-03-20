interface InstructionsProps {
  instructions: Array<{ title: string; description: string }>;
}

const Instructions = ({ instructions }: InstructionsProps) => {
  return (
    <section>
      <h2>Instructions</h2>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>
            <strong>{instruction.title}:</strong> {instruction.description}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Instructions;
