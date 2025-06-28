import { NextResponse } from "next/server";
import { db } from "../../../configs/db";
import { QUIZ_RAW_TABLE } from "@/configs/Schema";
import { eq, desc } from "drizzle-orm";
import { format } from "date-fns";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userEmail = searchParams.get("userEmail");

  if (!userEmail) {
    return NextResponse.json({ error: "Missing userEmail" }, { status: 400 });
  }

  const userQuizzes = await db
    .select()
    .from(QUIZ_RAW_TABLE)
    .where(eq(QUIZ_RAW_TABLE.createdBy, userEmail))
    .orderBy(desc(QUIZ_RAW_TABLE.id));

  const XP_PER_QUIZ = 10;

  // Initialize all months with zero values
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthlyData = {};
  for (const month of monthNames) {
    monthlyData[month] = { easy: 0, medium: 0, hard: 0, xp: 0 };
  }

  // Update based on user's quizzes
  for (const quiz of userQuizzes) {
    const date = new Date(
      quiz?.quizData?.createdAt || quiz?.createdAt || Date.now()
    );
    const month = format(date, "MMMM"); // e.g., "January"
    const level = quiz.level?.toLowerCase();

    if (["easy", "medium", "hard"].includes(level)) {
      monthlyData[month][level]++;
      monthlyData[month].xp += XP_PER_QUIZ;
    }
  }

  // Format as array
  const formattedData = monthNames.map((month) => ({
    month,
    ...monthlyData[month],
  }));

  return NextResponse.json(formattedData);
}
