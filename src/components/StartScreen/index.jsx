export function StartScreen({ numberOfQuestions, dispatch }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h2 className="text-2xl">Welcome to The React Quiz!</h2>
      <p className="text-xl">
        {numberOfQuestions} questions to test your React mastery
      </p>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition 
                    duration-300 transform 
                    focus:outline-none focus:ring-2 focus:ring-blue-300 
                    focus:ring-opacity-50 focus:scale-105 
                    hover:bg-blue-600"
      >
        Let's start
      </button>
    </div>
  );
}
