import React from "react";
import Header from "../../_components/Header";

function QuizLayout({ children }) {
  return (
    <div className="bg-black min-h-screen">
      <div className="flex items-center justify-center">
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default QuizLayout;
