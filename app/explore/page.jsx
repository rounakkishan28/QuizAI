"use client";

import Link from "next/link";
import { ClipboardPlus, FolderClock } from "lucide-react";

function Explore() {
  return (
    <div className="flex flex-col w-full max-w-5xl items-center justify-center gap-16 sm:gap-8 px-6 py-16 bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-2xl shadow-xl shadow-white mt-5 transition-all duration-300">
      <div className="flex flex-col w-full border border-gray-600 p-5 pt-8 rounded-xl">
        <h2 className="font-bold text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-500 mb-6">
          Attempt a test
        </h2>
        <div className="flex flex-col gap-6 w-full">
          <Link href={"/create-ai-quiz"}>
            <div className="flex items-center justify-center gap-8 border border-gray-600 rounded-xl px-6 py-6 font-light w-full cursor-pointer text-gray-400 hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-[1.02]">
              <ClipboardPlus className="w-10 h-10" />
              <span className="text-xl">Attempt a new test</span>
            </div>
          </Link>
          <Link href={"/all-quizzes"}>
            <div className="flex items-center justify-center gap-8 border border-gray-600 rounded-xl px-6 py-6 font-light w-full cursor-pointer text-gray-400 hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-[1.02]">
              <FolderClock className="w-10 h-10" />
              <span className="text-xl">Attempt a previous test</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Explore;
