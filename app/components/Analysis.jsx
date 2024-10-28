const data = [
  {
    label: "HTML Tools, Forms, History",
    percentage: 80,
    color: "bg-blue-500",
    remainingColor: "bg-blue-100",
  },
  {
    label: "Tags & References in HTML",
    percentage: 60,
    color: "bg-orange-500",
    remainingColor: "bg-orange-100",
  },
  {
    label: "Tables & References in HTML",
    percentage: 24,
    color: "bg-red-500",
    remainingColor: "bg-red-100",
  },
  {
    label: "Tables & CSS Basics",
    percentage: 96,
    color: "bg-green-500",
    remainingColor: "bg-green-100",
  },
];

const SyllabusAnalysis = () => {
  return (
    <div className="p-6 bg-white rounded-lg border-[1px]">
      <h2 className="text-[1rem] font-bold mb-8">Syllabus Wise Analysis</h2>
      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-700">{item.label}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-[77%] flex">
                <div className="w-full h-2.5 relative rounded-full overflow-hidden flex-1 mr-2 gap-4">
                  <div
                    className={`${item.color} h-2.5 absolute`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                  <div
                    className={`${item.remainingColor} h-2.5 absolute`}
                    style={{
                      width: `${100 - item.percentage}%`,
                      left: `${item.percentage}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="text-gray-700 font-semibold">
                {item.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusAnalysis;
