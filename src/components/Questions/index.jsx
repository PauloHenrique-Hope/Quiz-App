import { Button } from "../Button";
import { Options } from "../Options";
import { ProgressBar } from "../ProgressBar";
import { Timer } from "../Timer";

export function Questions({
  question,
  answer,
  dispatch,
  index,
  questions,
  maxPossiblePoints,
  points,
  secondsRemaining,
}) {
  console.log(question);
  return (
    <div className="p-2">
      {index <= questions.length - 1 && (
        <>
          <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
          <h3 className="mb-5 text-center text-3xl">{question.question}</h3>
          <ProgressBar
            index={index}
            questions={questions}
            maxPossiblePoints={maxPossiblePoints}
            points={points}
            answer={answer}
          />
          <Options question={question} answer={answer} dispatch={dispatch} />
        </>
      )}

      <Button index={index} questions={questions} dispatch={dispatch} />
    </div>
  );
}
