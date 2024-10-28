"use client";
import { useState } from "react";
import Image from "next/image";
import Statistics from "../components/Statistics";
import Analysis from "../components/Analysis";
import QuestionAnalysis from "../components/QuestionAnalysis";
import Graph from "../components/Graph";
import { FaArrowRight } from "react-icons/fa6";

const SkillTest = () => {
  let [rank, setRank] = useState(1);
  let [percentile, setPercentile] = useState(30);
  let [correct, setCorrect] = useState(10);
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [percentileError, setPercentileError] = useState("");
  let [rankError, setRankError] = useState("");
  let [correctError, setCorrectError] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePercentileChange = (e) => {
    const value = e.target.value;
    setPercentile(value);

    if (value === "" || value < 0 || value > 100) {
      setPercentileError("required | percentile should be 0-100");
    } else {
      setPercentileError("");
    }
  };

  const handleRankChange = (e) => {
    const value = e.target.value;
    setRank(value);

    if (value === "" || isNaN(value)) {
      setRankError("required | rank should be a valid number");
    } else {
      setRankError("");
    }
  };

  const handleCorrectChange = (e) => {
    const value = e.target.value;
    setCorrect(value);

    if (value === "" || isNaN(value)) {
      setCorrectError("required | correct score should be a valid number");
    } else {
      setCorrectError("");
    }
  };

  const saveScores = () => {
    if (
      !percentileError &&
      !rankError &&
      !correctError &&
      percentile !== "" &&
      rank !== "" &&
      correct !== ""
    ) {
      toggleModal();
    }
  };

  return (
    <div>
      <div className="p-4 overflow-hidden">
        <h1 className="mb-4 text-[1rem] font-semibold text-gray-600">
          Skill Test
        </h1>
        <div className="flex sm:flex-row flex-col gap-6">
          <div className="flex flex-col sm:w-[60%] w-full gap-10">
            <div className="flex flex-wrap items-center gap-4 border-[1px] w-full px-4 py-6 rounded-lg">
              <Image
                src="/html.png"
                alt="html"
                width={50}
                height={50}
                className="flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-base sm:text-lg font-bold">
                  Hyper Text Markup Language
                </h2>
                <h2 className="text-sm sm:text-base text-gray-600">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </h2>
              </div>
              <button
                onClick={toggleModal}
                className="bg-blue-900 px-4 py-2 rounded-lg text-white text-[0.9rem] font-bold border-[1.4px] border-black"
              >
                Update
              </button>
            </div>

            <Statistics rank={rank} percentile={percentile} correct={correct} />
            <Graph percentile={percentile} />
          </div>

          <div className="sm:w-[40%] w-full flex flex-col gap-10">
            <Analysis />
            <QuestionAnalysis score={correct} />
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
            <div className="bg-white p-4 sm:p-6 rounded-lg w-full sm:w-1/2 max-w-[600px] mx-4">
              <div className="flex justify-between items-center mb-6 gap-10">
                <h2 className="text-[1rem] sm:text-[1.5rem] font-extrabold">
                  Update Scores
                </h2>
                <Image
                  src="/html.png"
                  alt="html image"
                  width={50}
                  height={10}
                />
              </div>
              <div className="mb-4 flex justify-between items-center">
                <div className="flex gap-2 items-center content-center">
                  <div className="w-6 h-6 bg-blue-900 text-center rounded-full font-bold text-white">
                    1
                  </div>
                  <label className="block text-sm mb-1 text-[1rem]">
                    Update your<span className="font-bold"> Rank</span>{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="number"
                    value={rank}
                    onChange={handleRankChange}
                    className={`border p-2 rounded w-60 ${
                      rankError ? "border-red-500 focus:outline-red-500" : ""
                    }`}
                  />
                  {rankError && (
                    <p className="text-red-500 text-[0.6rem] mt-1">
                      {rankError}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4 flex justify-between items-center">
                <div className="flex gap-2 items-center content-center">
                  <div className="w-6 h-6 bg-blue-900 text-center rounded-full font-bold text-white">
                    2
                  </div>

                  <label className="block text-sm mb-1 text-[1rem]">
                    Update your<span className="font-bold"> Percentile</span>{" "}
                  </label>
                </div>
                <div className="">
                  <input
                    type="number"
                    value={percentile}
                    onChange={handlePercentileChange}
                    className={`border p-2 rounded w-60 ${
                      percentileError
                        ? "border-red-500 focus:outline-red-500"
                        : ""
                    }`}
                  />

                  {percentileError && (
                    <p className="text-red-500 text-[0.6rem] mt-1">
                      {percentileError}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4 flex justify-between items-center">
                <div className="flex gap-2 items-center content-center">
                  <div className="w-6 h-6 bg-blue-900 text-center rounded-full font-bold text-white">
                    3
                  </div>
                  <label className="block text-sm mb-1 text-[1rem]">
                    Update your{" "}
                    <span className="font-bold">
                      {" "}
                      Current Score (out of 15)
                    </span>
                  </label>
                </div>
                <div className="">
                  <input
                    type="number"
                    value={correct}
                    onChange={handleCorrectChange}
                    className={`border p-2 rounded w-60 ${
                      correctError ? "border-red-500 focus:outline-red-500" : ""
                    }`}
                    style={{
                      MozAppearance: "textfield",
                    }}
                  />
                  {correctError && (
                    <p className="text-red-500 text-[0.6rem] mt-1">
                      {correctError}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-end mt-4 gap-2">
                <button
                  onClick={toggleModal}
                  className="bg-white border-[1px] border-blue-800 px-4 py-2 rounded-lg text-sm font-bold"
                >
                  cancel
                </button>
                <button
                  onClick={saveScores}
                  className="bg-blue-800 px-4 py-2 rounded-lg text-white text-sm border-[1.8px] border-black font-bold flex items-center justify-center gap-2"
                >
                  save <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillTest;
