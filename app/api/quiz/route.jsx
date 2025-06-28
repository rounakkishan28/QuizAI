import { NextResponse } from "next/server";
import { db } from "../../../configs/db";
import { QUIZ_RAW_TABLE, USER_TABLE } from "@/configs/Schema";
import { eq, desc } from "drizzle-orm";

export async function POST(req) {
  const { quizId, userEmail } = await req.json();
  const user = await db
    .select()
    .from(USER_TABLE)
    .where(eq(USER_TABLE.email, userEmail));
  const updatedCredits = user[0].credits - 2;
  await db
    .update(USER_TABLE)
    .set({
      credits: updatedCredits,
    })
    .where(eq(USER_TABLE.email, userEmail))
    .returning(USER_TABLE);
  const result = await db
    .insert(QUIZ_RAW_TABLE)
    .values({
      quizId: quizId,
      createdBy: userEmail,
    })
    .returning(QUIZ_RAW_TABLE);

  return NextResponse.json({ result });
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const quizId = searchParams.get("quizId");
  const userEmail = searchParams.get("userEmail");
  if (userEmail) {
    const result = await db
      .select()
      .from(QUIZ_RAW_TABLE)
      .where(eq(QUIZ_RAW_TABLE.createdBy, userEmail))
      .orderBy(desc(QUIZ_RAW_TABLE.id));
    return NextResponse.json(result);
  }
  const result = await db
    .select()
    .from(QUIZ_RAW_TABLE)
    .where(eq(QUIZ_RAW_TABLE.quizId, quizId));

  return NextResponse.json(result[0]);
}

export async function PUT(req) {
  const { quizId, selectedAnswers } = await req.json();
  const result = await db
    .select()
    .from(QUIZ_RAW_TABLE)
    .where(eq(QUIZ_RAW_TABLE.quizId, quizId));
  const quiz = result[0];
  const quizData = quiz.quizData;
  let score = 0;
  quizData.questionList.map((q, idx) => {
    if (selectedAnswers[idx] === q.correct) score++;
  });
  quizData.questionList = quizData.questionList.map((q, idx) => ({
    ...q,
    marked: selectedAnswers[idx],
  }));
  await db
    .update(QUIZ_RAW_TABLE)
    .set({
      solved: score,
      quizData: quizData,
    })
    .where(eq(QUIZ_RAW_TABLE.quizId, quizId));

  return NextResponse.json({ success: true });
}
