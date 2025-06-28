import { GenerativeAIQuizData_AiModel } from "@/configs/AiModel";
import { inngest } from "./client";
import { db } from "../../configs/db";
import { QUIZ_RAW_TABLE } from "@/configs/Schema";
import { eq } from "drizzle-orm";

export const GenerativeAIQuizData = inngest.createFunction(
  { id: "generate-ai-quiz-data" },
  { event: "ai/generate-quiz-data" },
  async ({ event, step }) => {
    const { prompt, count, level, quizId } = event.data;

    const generateQuizData = await step.run(
      "Generate AI Quiz Data",
      async () => {
        const result = await GenerativeAIQuizData_AiModel.sendMessage(prompt);
        return JSON.parse(result.response.text());
      }
    );

    const updateRecord = await step.run(
      "Update record using quizId",
      async () => {
        const result = await db
          .update(QUIZ_RAW_TABLE)
          .set({
            quizData: generateQuizData,
            count: count,
            level: level.toLowerCase(),
          })
          .where(eq(QUIZ_RAW_TABLE.quizId, quizId))
          .returning(QUIZ_RAW_TABLE);

        return result;
      }
    );

    return updateRecord;
  }
);
