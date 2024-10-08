export function Options({ question, answer, dispatch }) {
  const hasAnswerd = answer !== null;
  console.log(question);
  return (
    <div className="flex flex-col gap-4">
      {question.options.map((option, index) => (
        <button
          className={`${
            hasAnswerd
              ? question.correctOption === index
                ? "bg-blue-500 p-3"
                : "bg-red-400 p-3"
              : "bg-gray-500 p-3"
          }
          `}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswerd}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
