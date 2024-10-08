export function Button({ dispatch, index, questions }) {
  return (
    <>
      {index < questions.length - 1 && (
        <button
          className="bg-purple-600 rounded-lg p-2 mt-2 mx-auto w-[100px] hover:bg-purple-900"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}

      {index === questions.length - 1 && (
        <button
          className="bg-purple-600 rounded-lg p-2 mt-2 mx-auto w-[100px] hover:bg-purple-900"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      )}
    </>
  );
}
