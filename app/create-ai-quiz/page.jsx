"use client";
import React, { useContext, useState } from "react";
import Header from "../_components/Header";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../../components/ui/button";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import uuid4 from "uuid4";
import { Prompt } from "../_data/Prompt";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { UserDetailContext } from "../_context/UserDetailContext";
import { toast } from "sonner";

function CreateAIQuiz() {
  const [topic, setTopic] = useState(null);
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { userDetail } = useContext(UserDetailContext);
  const router = useRouter();

  const onGenerateClick = async () => {
    if (userDetail?.credits < 2) {
      toast("Not enough credits!");
      return;
    }
    setLoading(true);
    const quizId = uuid4();
    // create new record to DB
    await axios.post("/api/quiz", {
      quizId: quizId,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    });

    // Generate Content for video using AI
    const PROMPT = Prompt.replace("{topic}", topic)
      .replace("{count}", count)
      .replace("{level}", level);
    await axios.post("/api/create-ai-quiz", {
      quizId: quizId,
      count: count,
      level: level,
      prompt: PROMPT,
    });
    router.replace("/test/" + quizId);
    setLoading(false);
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="flex items-center justify-center bg-black">
        <Header />
      </div>
      <div className="px-10 md:px-32 lg:px-48">
        <div className="flex flex-col items-center justify-center text-gray-100 bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-lg py-10 mt-36">
          <h2 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-gray-500">
            Generate a Quiz using AI
          </h2>
          <div className="w-full max-w-xl mt-7">
            <label>Topic:</label>
            <Textarea
              className="w-full"
              onChange={(e) => setTopic(e?.target.value)}
            />
          </div>
          <div className="w-full max-w-xl mt-7">
            <label>Select level of questions:</label>
            <Select onValueChange={(value) => setLevel(value)}>
              <SelectTrigger className="w-full bg-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-black text-gray-100">
                <SelectItem value={"Easy"}>Easy</SelectItem>
                <SelectItem value={"Medium"}>Medium</SelectItem>
                <SelectItem value={"Hard"}>Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full max-w-xl mt-7">
            <label>Select Number of questions:</label>
            <Select onValueChange={(value) => setCount(value)}>
              <SelectTrigger className="w-full bg-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-black text-gray-100">
                <SelectItem value={5}>5</SelectItem>
                <SelectItem value={10}>10</SelectItem>
                <SelectItem value={15}>15</SelectItem>
                <SelectItem value={20}>20</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            className="w-full mt-5 max-w-xl text-black text-base bg-gradient-to-b from-gray-800 via-gray-400 to-gray-800 hover:bg-gradient-to-b hover:from-gray-900 hover:via-gray-500 hover:to-gray-900 cursor-pointer"
            onClick={onGenerateClick}
            disabled={topic?.length == 0 || !level?.length || loading}
          >
            {loading ? <Loader2 className="animate-spin" /> : "Generate"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateAIQuiz;
