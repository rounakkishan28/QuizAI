"use client";
import React, { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

function BuyCredits() {
  const [credits, setCredits] = useState(0);
  const { user } = useUser();

  const handleCreditChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setCredits(value);
  };

  const handlePurchase = async () => {
    const result = await axios.put("/api/buy", {
      userEmail: user.primaryEmailAddress.emailAddress,
      credits: credits,
    });
    window.location.replace(result.data.session_url);
    setCredits(0);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-44 text-white">
      <h2 className="font-bold -mb-9 text-5xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-gray-500">
        Buy Credits
      </h2>
      <h2 className="font-bold mb-8 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-100 to-gray-600">
        _____
      </h2>
      <div className="bg-gradient-to-b from-transparent via-transparent to-gray-900 rounded-lg p-8 w-full sm:w-1/2 md:w-1/3 text-center">
        <p className="text-lg mb-4">
          Add credits to your account and continue your journey!
        </p>
        <Input
          type="number"
          value={credits}
          onChange={handleCreditChange}
          className="w-full text-gray-100 rounded-md p-2 mb-4 text-center outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Enter number of credits"
        />
        <Button
          onClick={handlePurchase}
          disabled={credits <= 0}
          className="bg-gradient-to-b from-gray-800 via-gray-400 to-gray-800 hover:from-gray-900 hover:via-gray-500 hover:to-gray-900 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Purchase
        </Button>
      </div>
    </div>
  );
}

export default BuyCredits;
