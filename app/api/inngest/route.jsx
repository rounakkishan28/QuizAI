import { serve } from "inngest/next";
import { inngest } from "@/app/inngest/client";
import { GenerativeAIQuizData } from "@/app/inngest/function";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [GenerativeAIQuizData],
});
