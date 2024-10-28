const QuestionAnalysis = ({ score = 10, total = 15 }) => {
  const percentage = (score / total) * 100;
  const circleRadius = 30;
  const circumference = 2 * Math.PI * circleRadius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="p-6 bg-white rounded-lg text-left border-[1px]">
      <div className="flex justify-between">
        <h2 className="text-[1rem] font-bold mb-8">Question Analysis</h2>
        <div className="text-[#6366F1]">
          <span className="text-[1rem] font-bold">{score}</span>
          <span className="text-[1rem] font-bold">{` / ${total}`}</span>
        </div>
      </div>
      <p className="text-gray-700 mb-6 text-[1rem]">
        <span className="font-bold">
          You scored {score} question{score > 1 ? "s" : ""} correct out of{" "}
          {total}.
        </span>{" "}
        However, it still needs some improvements.
      </p>

      <div className="relative flex justify-center items-center mb-4">
        <svg className="transform rotate-90 w-60 h-60" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={circleRadius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="13"
          />
          <circle
            cx="50"
            cy="50"
            r={circleRadius}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="13"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap=""
          />
        </svg>
        <div className="absolute">
          <div className="text-[2rem]">🎯</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
