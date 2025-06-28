import { inngest } from "@/app/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt, count, level, quizId } = await req.json();

  await inngest.send({
    name: "ai/generate-quiz-data",
    data: {
      prompt: prompt,
      count: count,
      level: level,
      quizId: quizId,
    },
  });

  return NextResponse.json({ result: "Event Sent!" });
}
