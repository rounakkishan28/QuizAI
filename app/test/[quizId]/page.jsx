"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function Test() {
  const { quizId } = useParams();
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(2 * 60);
  const timerRef = useRef(null);
  const hasSubmitted = useRef(false);
  const router = useRouter();

  const handleOptionSelect = (queIdx, optIdx) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [queIdx]: optIdx,
    }));
  };

  const handleSubmit = async () => {
    if (hasSubmitted.current) return;
    hasSubmitted.current = true;
    setLoading(true);
    const response = await axios.put("/api/quiz", {
      quizId: quizId,
      selectedAnswers: selectedAnswers,
    });
    router.replace("/quiz/" + quizId);
    setLoading(false);
  };

  const getQuiz = async () => {
    const result = await axios.get("/api/quiz?quizId=" + quizId);
    setQuiz(result?.data);
  };

  useEffect(() => {
    quizId && getQuiz();
  }, [quizId]);

  useEffect(() => {
    if (!quiz) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [quiz]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="pb-10 mt-10 sm:mx-32">
      <div className="flex justify-between gap-2 mt-20">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-500">
          Quiz
        </h2>
        <div className="flex items-center gap-4">
          <p className="text-xl text-red-400 font-semibold">
            Time Left: {formatTime(timeLeft)}
          </p>
          <Button
            className="px-8 text-black text-base bg-gradient-to-b from-gray-800 via-gray-400 to-gray-800 hover:bg-gradient-to-b hover:from-gray-900 hover:via-gray-500 hover:to-gray-900"
            onClick={handleSubmit}
            disabled={
              !quiz ||
              quiz.quizData?.questionList?.length !=
                Object.keys(selectedAnswers).length
            }
          >
            {loading ? <Loader2 className="animate-spin" /> : "Submit"}
          </Button>
        </div>
      </div>
      {quiz && (
        <div className="text-gray-300">
          <div className="flex flex-col lg:flex-row justify-between gap-5 my-5">
            <p className="text-2xl font-semibold">
              Topic: {quiz.quizData?.topic}
            </p>
            <p className="text-2xl font-semibold">Level: {quiz.level}</p>
          </div>
          <Tabs defaultValue={1}>
            <ScrollArea className="w-full rounded-md whitespace-nowrap">
              <TabsList className="bg-gray-800 mb-3">
                {quiz.quizData?.questionList?.map((q, idx) => (
                  <TabsTrigger key={idx} value={idx + 1}>
                    Q. No. {idx + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            {quiz.quizData?.questionList?.map((q, idx) => (
              <TabsContent key={idx} value={idx + 1}>
                <div className="px-5 md:px-32 rounded-xl bg-gradient-to-b from-transparent via-transparent to-gray-900 p-5">
                  <p className="text-xl md:text-3xl">
                    Q{idx + 1}. {q.question}
                  </p>
                  <p className="text-lg md:text-xl mt-10">Qptions: </p>
                  <div className="grid grid-cols-2 gap-5 mt-3">
                    {q.options?.map((opt, optIdx) => (
                      <Button
                        key={optIdx}
                        variant={
                          selectedAnswers[idx] === optIdx ? "default" : ""
                        }
                        className={`text-left ${
                          selectedAnswers[idx] === optIdx
                            ? "bg-gray-300 text-black hover:bg-gray-300"
                            : "hover:bg-gray-500"
                        }`}
                        onClick={() => handleOptionSelect(idx, optIdx)}
                      >
                        {optIdx + 1}. {opt}
                      </Button>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Test;
