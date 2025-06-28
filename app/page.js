"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import Link from "next/link";
import {
  BrainCircuit,
  CalendarDays,
  ChartColumn,
  ChartNoAxesCombined,
  ChartNoAxesGantt,
  GalleryHorizontalEnd,
  GraduationCap,
  ListFilter,
  TabletSmartphone,
  Target,
} from "lucide-react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";

const working = [
  {
    title: "Choose a Quiz Level",
    description:
      "Select from Easy, Medium, or Hard based on your confidence and experience.Each level helps you earn different XP points to level up faster.",
  },
  {
    title: "Attempt the Quiz",
    description:
      "Answer multiple choice questions. Get instant feedback after submitting.",
  },
  {
    title: "Earn XP & Track Progress",
    description:
      "Every correct answer earns you XP. Harder levels = more XP rewards. Your XP adds up to boost your confidence.",
  },
  {
    title: "See your Performance",
    description:
      "The Dashboard shows your performance per month. Track how many quizzes you’ve taken at each level. Visualize your consistency and growth with graphs.",
  },
];

const faqs = [
  {
    question: "What is the purpose of this platform?",
    answer:
      "Our platform helps learners improve their knowledge and track their progress through interactive quizzes with gamified XP rewards and personalized performance insights.",
  },
  {
    question: "How does AI-powered quiz generation work?",
    answer:
      "Our AI analyzes selected topics and your past performance to generate fresh, relevant, and appropriately challenging quizzes tailored just for you.",
  },
  {
    question: "What are the difficulty levels available?",
    answer:
      "You can choose from Easy, Medium, or Hard quizzes, allowing you to learn at your own pace and progressively challenge yourself.",
  },
  {
    question: "How is XP calculated?",
    answer:
      "XP is awarded based on quiz difficulty and your performance. Higher-level quizzes and correct answers earn you more XP, helping you level up faster.",
  },
  {
    question: "What can I see on the dashboard?",
    answer:
      "Your dashboard displays monthly quiz activity, performance by difficulty level, total XP earned, and consistency — all in a visual, easy-to-understand format.",
  },
  {
    question: "Can I retake quizzes?",
    answer: "No! You can only review previous quizzes to visualize your score.",
  },
  {
    question: "Do I need an account to use the platform?",
    answer:
      "Yes, you’ll need to log in securely using Clerk authentication to save your progress, access personalized content, and view your dashboard.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. Your data is securely stored and protected, ensuring your quiz history, progress, and personal information remain private.",
  },
];

const testimonials = [
  {
    quote:
      "This platform turned studying into something I actually look forward to. The XP system and dashboard keep me motivated every day!",
    name: "Aarav Patel",
    title: "Student, Grade 11",
  },
  {
    quote:
      "As someone who struggles with consistency, the monthly performance tracking helped me stay on track and see real progress.",
    name: "Emily Chen",
    title: "Aspiring Medical Student",
  },
  {
    quote:
      "The AI-generated quizzes are super relevant and never boring. I love how they adapt to my past performance!",
    name: "Daniel Rodriguez",
    title: "Engineering Prep Student",
  },
  {
    quote:
      "The visual dashboard is so helpful. I can actually see where I’m improving and what I need to work on.",
    name: "Fatima Khan",
    title: "Competitive Exam Aspirant",
  },
  {
    quote:
      "This app made learning fun again. It's like Duolingo but for general knowledge and academics!",
    name: "Jay Mehta",
    title: "Quiz Enthusiast",
  },
];

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
      <Header />
      <div className="bg-black min-h-screen text-gray-100 pt-24">
        {/* Hero Section */}
        <div className="mt-14 relative w-full h-[500px] flex items-center justify-center bg-gradient-to-t from-black via-transparent to-black">
          <Image
            fill={true}
            src={"/background.jpg"}
            alt="background"
            className="object-cover w-full h-full opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-70 flex items-center">
            <div className="max-w-5xl">
              <h3 className="text-3xl sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-500 font-extrabold mb-4">
                Meet your AI Study Buddy
              </h3>
              <p className="text-md sm:text-lg md:text-xl text-gray-400 mb-4">
                Unlock your beast mode with AI-driven learning.
              </p>
              <Link href="/explore">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#000000_50%,#FFFFFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Get Started
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <section className="flex flex-col items-center my-10 sm:my-10 py-5 sm:py-10 mx-auto max-w-screen-xl px-4 sm:px-8 bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-xl shadow-2xl transition-all shadow-gray-500">
          <h2 className="text-2xl sm:text-3xl md:text-4xl -mb-8 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b via-white to-gray-400">
            How it Works?
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-white to-gray-700">
            _______
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mx-auto w-full sm:mt-20 md:mt-0">
            {working.map((item, index) => (
              <Card
                key={index}
                className={`w-full text-center border-0 bg-transparent shadow-md rounded-lg p-6 ${
                  (index == 1 || index == 2) && "md:mt-20"
                }`}
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="border border-white rounded-full pl-2 pr-2 pt-2">
                    {index === 0 && (
                      <ListFilter className="w-10 h-10 text-gray-400 mb-2 rounded-full" />
                    )}
                    {index === 1 && (
                      <TabletSmartphone className="w-10 h-10 text-gray-400 mb-2" />
                    )}
                    {index === 2 && (
                      <GraduationCap className="w-10 h-10 text-4xl text-gray-400 mb-2" />
                    )}
                    {index === 3 && (
                      <ChartNoAxesCombined className="w-10 h-10 text-4xl text-gray-400 mb-2" />
                    )}
                  </div>
                  <CardTitle className="text-lg sm:text-xl mt-2 text-gray-200">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-400 mt-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Features */}
        {/* Features Section */}
        <section className="flex flex-col items-center my-10 sm:my-20 py-5 sm:py-10 mx-auto max-w-screen-xl px-4 sm:px-8 bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-xl shadow-2xl transition-all shadow-gray-500">
          <h2 className="text-2xl sm:text-3xl md:text-4xl -mb-8 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b via-white to-gray-400">
            Features
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-white to-gray-700 mb-14">
            _______
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto w-full">
            <Card className="text-center border-0 bg-transparent shadow-md rounded-lg p-6">
              <CardHeader>
                <BrainCircuit className="w-12 h-12 text-gray-400 mb-4" />
                <CardTitle className="text-lg sm:text-xl text-gray-200">
                  AI-Powered Quiz Generation
                </CardTitle>
                <CardDescription className="text-sm text-gray-400 mt-2">
                  Get personalized quizzes generated by AI based on your
                  interests, past performance, or selected topics — fresh,
                  relevant, and never repetitive!
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 bg-transparent shadow-md rounded-lg p-6">
              <CardHeader>
                <ChartNoAxesGantt className="w-12 h-12 text-gray-400 mb-4" />
                <CardTitle className="text-lg sm:text-xl text-gray-200">
                  Multiple difficulty levels
                </CardTitle>
                <CardDescription className="text-sm text-gray-400 mt-2">
                  Select from Easy, Medium, or Hard quizzes tailored to your
                  skill level.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 bg-transparent shadow-md rounded-lg p-6">
              <CardHeader>
                <ChartColumn className="w-12 h-12 text-gray-400 mb-4" />
                <CardTitle className="text-lg sm:text-xl text-gray-200">
                  Personalized Dashboard
                </CardTitle>
                <CardDescription className="text-sm text-gray-400 mt-2">
                  Track your quiz activity with clear visualizations — see how
                  consistent you are, how much XP you&apos;ve earned, and how
                  you&apos;re progressing month over month.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 bg-transparent shadow-md rounded-lg p-6">
              <CardHeader>
                <Target className="w-12 h-12 text-gray-400 mb-4" />
                <CardTitle className="text-lg sm:text-xl text-gray-200">
                  XP & Gamification
                </CardTitle>
                <CardDescription className="text-sm text-gray-400 mt-2">
                  Earn XP for every quiz you take. The harder the quiz, the more
                  XP you rack up. Climb the ranks and stay motivated.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 bg-transparent shadow-md rounded-lg p-6">
              <CardHeader>
                <GalleryHorizontalEnd className="w-12 h-12 text-gray-400 mb-4" />
                <CardTitle className="text-lg sm:text-xl text-gray-200">
                  Quiz History
                </CardTitle>
                <CardDescription className="text-sm text-gray-400 mt-2">
                  Review past quizzes with topics, levels, and timestamps —
                  great for learning and self-assessment.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 bg-transparent shadow-md rounded-lg p-6">
              <CardHeader>
                <CalendarDays className="w-12 h-12 text-gray-400 mb-4" />
                <CardTitle className="text-lg sm:text-xl text-gray-200">
                  Monthly Performance Tracking
                </CardTitle>
                <CardDescription className="text-sm text-gray-400 mt-2">
                  Stay consistent with month-wise stats for quiz attempts at
                  each difficulty level.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="hidden xl:flex flex-col justify-center items-center my-10 sm:my-40 py-5 sm:py-10 mx-auto w-full max-w-screen-xl px-4 sm:px-8 bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-xl shadow-2xl transition-all shadow-gray-500">
          <h2 className="text-2xl sm:text-3xl md:text-4xl -mb-8 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b via-white to-gray-400">
            Testimonials
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-white to-gray-700">
            _________
          </h2>
          <div className="flex items-center justify-center">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="normal"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="flex flex-col items-center my-10 sm:my-40 py-5 sm:py-10 mx-auto max-w-screen-xl px-4 sm:px-8 bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-xl shadow-2xl transition-all shadow-gray-500">
          <h2 className="text-2xl sm:text-3xl md:text-4xl -mb-8 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b via-white to-gray-400">
            Frequently Asked Questions
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-white to-gray-700">
            ___________
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full sm:w-3/4 flex flex-col gap-2"
          >
            {faqs.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0"
              >
                <AccordionTrigger className="text-lg font-normal text-gray-300 hover:no-underline px-16 py-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-xl transition duration-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 px-4 py-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
