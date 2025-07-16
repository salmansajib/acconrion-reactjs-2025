import { useState } from "react";
import InterviewQuestions from "../data/interviewQuestions.json";
import { motion, AnimatePresence } from "motion/react";

const Accordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-[1450px] mx-auto">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
        <h1 className="text-7xl md:text-9xl font-display">FAQ</h1>
        <p className="font-light text-sm text-white flex items-center w-full max-w-[70ch] font-inter">
          A collection of commonly asked React interview questions and answers,
          presented in an interactive accordion format. This component is
          designed to help developers quickly review key concepts, clarify
          fundamental differences, and reinforce their understanding of React’s
          core principles. Perfect for interview preparation or daily practice.
        </p>
      </div>

      <div className="mt-[100px] md:mt-[200px] w-full max-w-[900px] ml-auto text-gray-950 space-y-6">
        {InterviewQuestions.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className="w-full flex gap-2 items-start justify-between"
            >
              <div className="w-full bg-gray-100 p-[20px] rounded-sm overflow-hidden">
                <span className="text-4xl md:text-5xl font-inter font-thin">
                  {item.question}
                </span>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      layout
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: "easeInOut" },
                        opacity: { duration: 0.4, delay: 0.3 },
                      }}
                    >
                      <p className="pt-3 text-base md:text-lg font-light text-gray-600">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => toggleAnswer(item.id)}
                className="bg-gray-100 cursor-pointer p-[20px] flex items-center justify-center rounded-sm"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-plus-icon lucide-plus size-[39.5px] md:size-[48px]"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.path d="M5 12h14" />
                  <motion.path
                    d="M12 5v14"
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
