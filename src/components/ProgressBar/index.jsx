export function ProgressBar({ index, questions, points, maxPossiblePoints }) {
  return (
    <div className="flex justify-between mb-2">
      <p>
        {index + 1}/{questions.length}
      </p>
      <p>
        {points}/{maxPossiblePoints}
      </p>
    </div>
  );
}
