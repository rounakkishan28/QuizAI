import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-around h-screen bg-black">
      <SignIn />
      <div className="relative max-w-[50%]">
        <img
          src={"./background.jpg"}
          alt="background"
          className="object-cover w-full h-full opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-70 flex items-center justify-center">
          <div>
            <h3 className="text-3xl sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-gray-500 font-extrabold mb-4">
              Meet your AI Study Buddy
            </h3>
            <p className="text-md sm:text-lg md:text-xl text-gray-400 mb-4">
              Unlock your beast mode with AI-driven learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
