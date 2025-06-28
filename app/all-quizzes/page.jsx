"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

function AllQuizzes() {
  const [quizList, setQuizList] = useState();
  const { user } = useUser();

  const getUserQuizList = async () => {
    const result = await axios.get(
      "/api/quiz?userEmail=" + user?.primaryEmailAddress?.emailAddress
    );
    setQuizList(result.data);
  };

  useEffect(() => {
    user && getUserQuizList();
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center pb-10 mt-10 sm:mx-32">
      <h2 className="text-3xl mt-14 mb-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-500">
        Quizzes
      </h2>
      <Tabs defaultValue="easy" className="w-full">
        <TabsList className="bg-gray-800 mb-3">
          <TabsTrigger value="easy">Easy</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
          <TabsTrigger value="hard">Hard</TabsTrigger>
        </TabsList>
        <TabsContent value="easy">
          <Table>
            <TableCaption>
              A list of all your given easy-level quizzes.
            </TableCaption>
            <TableHeader className="bg-transparent">
              <TableRow>
                <TableHead className="text-center text-gray-300 rounded-l-2xl">
                  <Button className="bg-transparent hover:bg-transparent">
                    #
                  </Button>
                </TableHead>
                <TableHead className="w-[100px] text-gray-300 p-5 text-center">
                  S.No.
                </TableHead>
                <TableHead className="text-gray-300 p-5 text-center">
                  Topic
                </TableHead>
                <TableHead className="text-gray-300 p-5 text-center">
                  Solved
                </TableHead>
                <TableHead className="text-right text-gray-300 p-5 rounded-r-2xl">
                  Last Attempted
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-transparent">
              {quizList
                ?.filter((quiz) => {
                  if (quiz.level === "easy") return quiz;
                  else return null;
                })
                .map((quiz, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center text-gray-300 rounded-l-2xl">
                      <Link href={"/quiz/" + quiz.quizId}>
                        <Button className="bg-gray-900 hover:bg-black cursor-pointer">
                          Open
                        </Button>
                      </Link>
                    </TableCell>
                    <TableCell className="font-medium text-gray-300 p-5 text-center">
                      {index + 1}
                    </TableCell>
                    <TableCell className="text-gray-300 p-5 text-center">
                      <p>{quiz.quizData?.topic}</p>
                    </TableCell>
                    <TableCell className="text-gray-300 p-5 text-center">
                      {quiz.solved}
                    </TableCell>
                    <TableCell className="text-right text-gray-300 p-5 rounded-r-2xl">
                      {new Date(
                        quiz?.quizData?.createdAt || quiz.createdAt || ""
                      ).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="medium">
          <Table>
            <TableCaption>
              A list of all your given medium-level quizzes.
            </TableCaption>
            <TableHeader className="bg-transparent">
              <TableRow>
                <TableHead className="text-center text-gray-300 rounded-l-2xl">
                  <Button className="bg-transparent hover:bg-transparent">
                    #
                  </Button>
                </TableHead>
                <TableHead className="w-[100px] text-gray-300 p-5 text-center">
                  S.No.
                </TableHead>
                <TableHead className="text-gray-300 p-5 text-center">
                  Topic
                </TableHead>
                <TableHead className="text-gray-300 p-5 text-center">
                  Solved
                </TableHead>
                <TableHead className="text-right text-gray-300 p-5 rounded-r-2xl">
                  Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-transparent">
              {quizList
                ?.filter((quiz) => {
                  if (quiz.level === "medium") return quiz;
                  else return null;
                })
                .map((quiz, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center text-gray-300 rounded-l-2xl">
                      <Link href={"/quiz/" + quiz.quizId}>
                        <Button className="bg-gray-900 hover:bg-black cursor-pointer">
                          Open
                        </Button>
                      </Link>
                    </TableCell>
                    <TableCell className="font-medium text-gray-300 p-5 text-center">
                      {index + 1}
                    </TableCell>
                    <TableCell className="text-gray-300 p-5 text-center">
                      {quiz.quizData?.topic}
                    </TableCell>
                    <TableCell className="text-gray-300 p-5 text-center">
                      {quiz.solved}
                    </TableCell>
                    <TableCell className="text-right text-gray-300 p-5 rounded-r-2xl">
                      {new Date(
                        quiz?.quizData?.createdAt || quiz.createdAt || ""
                      ).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="hard">
          <Table>
            <TableCaption>
              A list of all your given hard-level quizzes.
            </TableCaption>
            <TableHeader className="bg-transparent">
              <TableRow>
                <TableHead className="text-center text-gray-300 rounded-l-2xl">
                  <Button className="bg-transparent hover:bg-transparent">
                    #
                  </Button>
                </TableHead>
                <TableHead className="w-[100px] text-gray-300 p-5 text-center">
                  S.No.
                </TableHead>
                <TableHead className="text-gray-300 p-5 text-center">
                  Topic
                </TableHead>
                <TableHead className="text-gray-300 p-5 text-center">
                  Solved
                </TableHead>
                <TableHead className="text-right text-gray-300 p-5 rounded-r-2xl">
                  Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-transparent">
              {quizList
                ?.filter((quiz) => {
                  if (quiz.level === "hard") return quiz;
                  else return null;
                })
                .map((quiz, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center text-gray-300 rounded-l-2xl">
                      <Link href={"/quiz/" + quiz.quizId}>
                        <Button className="bg-gray-900 hover:bg-black cursor-pointer">
                          Open
                        </Button>
                      </Link>
                    </TableCell>
                    <TableCell className="font-medium text-gray-300 p-5 text-center">
                      {index + 1}
                    </TableCell>
                    <TableCell className="text-gray-300 p-5 text-center">
                      {quiz.quizData?.topic}
                    </TableCell>
                    <TableCell className="text-gray-300 p-5 text-center">
                      {quiz.solved}
                    </TableCell>
                    <TableCell className="text-right text-gray-300 p-5 rounded-r-2xl">
                      {new Date(
                        quiz?.quizData?.createdAt || quiz.createdAt || ""
                      ).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AllQuizzes;
