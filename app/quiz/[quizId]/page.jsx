"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Quiz() {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);

  const getQuiz = async () => {
    const result = await axios.get("/api/quiz?quizId=" + quizId);
    setQuiz(result?.data);
  };

  useEffect(() => {
    quizId && getQuiz();
  }, [quizId]);

  return (
    <div className="pb-10 mt-10 sm:mx-32">
      <div className="flex justify-between gap-2 mt-20">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-500">
          Previous Quiz
        </h2>
        <Link href={"/test/" + quizId}>
          <Button variant={"outline"} className="cursor-pointer">
            Re-attempt
          </Button>
        </Link>
      </div>
      {quiz && (
        <div className="text-gray-300">
          <div className="flex flex-col lg:flex-row justify-between gap-5 my-5">
            <p className="text-2xl font-semibold">
              Topic: {quiz.quizData?.topic}
            </p>
            <p className="text-2xl font-semibold">
              Last Attempted: {new Date(quiz.updatedAt).toLocaleDateString()}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-5 mb-4">
            <p className="text-2xl font-semibold">
              No. of questions solved: {quiz.solved}
            </p>
            <p className="text-2xl font-semibold">Level: {quiz.level}</p>
          </div>
          <Tabs defaultValue={1}>
            <ScrollArea className="w-full rounded-md whitespace-nowrap">
              <TabsList className="bg-gray-800 mb-3">
                {quiz.quizData?.questionList?.map((q, idx) => (
                  <TabsTrigger
                    key={idx}
                    value={idx + 1}
                    className="cursor-pointer"
                  >
                    Q. No. {idx + 1}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            {quiz.quizData?.questionList?.map((q, idx) => (
              <TabsContent key={idx} value={idx + 1}>
                <div
                  key={idx}
                  className="px-5 md:px-32 rounded-xl bg-gradient-to-b from-transparent via-transparent to-gray-900 py-5"
                >
                  <p className="text-xl md:text-3xl">
                    Q{idx + 1}. {q.question}
                  </p>
                  <p className="text-lg md:text-xl mt-10">Options: </p>
                  <div className="grid grid-cols-2 gap-5 mt-3">
                    {q.options.map((opt, optIdx) => (
                      <p key={optIdx} className="text-base">
                        {optIdx + 1}. {opt}
                      </p>
                    ))}
                  </div>
                  <div className="mt-10">
                    <p className="text-lg">You marked: {q.marked + 1}</p>
                    <p className="text-lg">Correct Answer: {q.correct + 1}</p>
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

export default Quiz;
