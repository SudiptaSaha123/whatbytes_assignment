const Statistics = ({ rank, percentile, correct }) => {
  return (
    <div className="flex flex-col border-[1px] rounded-lg px-4 py-3 gap-6">
      <h1 className="text-[1rem] font-bold">Quick Statistics</h1>

      <div className="flex gap-4 justify-around pb-6">
        <div className="flex gap-4 items-center justify-center">
          <div className="rounded-full w-14 h-14 flex items-center justify-center bg-gray-100 text-[1.3rem]">
            🏆
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-[1.3rem]">{rank}</div>
            <div className="text-[0.9rem] text-gray-500">YOUR RANK</div>
          </div>
        </div>
        <div className="w-[0.4px] h-20 bg-gray-200" />
        <div className="flex gap-4 items-center justify-center">
          <div className="rounded-full w-14 h-14 flex items-center justify-center bg-gray-100 text-[1.3rem]">
            📋
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-[1.3rem]">{`${percentile} %`}</div>
            <div className="text-[0.9rem] text-gray-500">PERCENTILE</div>
          </div>
        </div>
        <div className="w-[0.4px] h-20 bg-gray-200" />
        <div className="flex gap-4 items-center justify-center">
          <div className="rounded-full w-14 h-14 flex items-center justify-center bg-gray-100 text-[1.3rem]">
            ✅
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-[1.3rem]">{`${correct} / 15`}</div>
            <div className="text-[0.9rem] text-gray-500">CORRECT ANSWERS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
