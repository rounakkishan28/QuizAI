import React from "react";
import Header from "../_components/Header";

function ExploreLayout({ children }) {
  return (
    <div className="bg-black min-h-screen">
      <div className="flex items-center justify-center">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-24">
        {children}
      </div>
    </div>
  );
}

export default ExploreLayout;
