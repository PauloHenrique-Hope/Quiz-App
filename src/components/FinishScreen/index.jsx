export function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <div className="flex flex-col gap-5 text-2xl text-white bg-gray-800 rounded-lg p-5">
      <p>
        You scored {points} out of {maxPossiblePoints} - {Math.ceil(percentage)}
        %
      </p>
      <button
        className="bg-blue-500 p-2"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </div>
  );
}
