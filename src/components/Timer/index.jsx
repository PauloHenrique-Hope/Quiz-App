import { useEffect } from "react";

export function Timer({ secondsRemaining, dispatch }) {
  const min = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "timer" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <footer>
      <span className="text-3xl mb-2 text-purple-700">
        {min < 10 && "0"}
        {min}: {seconds < 10 && "0"}
        {seconds}
      </span>
    </footer>
  );
}
