import React from "react";
import Header from "../_components/Header";

function About() {
  return (
    <div className="bg-black min-h-screen pb-14">
      <div className="flex flex-col items-center justify-center">
        <Header />
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mt-28 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 via-neutral-100 to-gray-900">
          Welcome to <span className="text-4xl md:text-5xl">QuizAI</span>
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Unlock your beast mode with AI-driven learning.
        </p>
      </div>

      {/* About Content Section */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-400">Who We Are</h2>
          <p className="text-gray-600 text-base">
            QuizForge AI is built just for students. We help you quickly create
            quizzes to test your knowledge, study better, and prepare for exams
            without the stress.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-400">Our Mission</h2>
          <p className="text-gray-600 text-base">
            We use AI to make quiz-making super easy. Just give us a topic,
            difficulty level, or number of questions, and we’ll turn it into a
            ready-to-use quiz in seconds.
          </p>
        </div>
      </div>

      {/* Our Features Section */}
      <div className="max-w-6xl mx-auto mt-5 bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-xl p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-400">
          Why use QuizAI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500">Save Time</h3>
            <p className="mt-4 text-gray-600">
              No need to write questions yourself-we do it for you instantly.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500">
              Study Smarter
            </h3>
            <p className="mt-4 text-gray-600">
              Practice with quizzes that match your subject and level.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500">
              Stay Organized
            </h3>
            <p className="mt-4 text-gray-600">
              Create and review quizzes anytime to stay on top of your studies.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="max-w-6xl mx-auto mt-8 bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-xl p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-400">
          What We Believe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500">
              Learning Should Be Easy
            </h3>
            <p className="mt-4 text-gray-600">
              Our goal is to make studying simpler and less stressful.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500">
              Every Student Deserves Good Tools
            </h3>
            <p className="mt-4 text-gray-600">
              Whether you're in school, college, or studying on your own, we're
              here to help.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500">
              Keep Improving
            </h3>
            <p className="mt-4 text-gray-600">
              We're always adding new features to make your study experience
              even better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
