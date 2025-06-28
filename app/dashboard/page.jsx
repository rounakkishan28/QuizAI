"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { UserDetailContext } from "../_context/UserDetailContext";
import { Coins } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plus = [
  {
    id: 1,
    name: "Buy Credits",
  },
];

export default function Dashboard() {
  const { user } = useUser();
  const { userDetail } = useContext(UserDetailContext);
  const [data, setData] = useState(null);

  const getUserDashboard = async () => {
    const result = await axios.get(
      "/api/dashboard?userEmail=" + user?.primaryEmailAddress?.emailAddress
    );
    setData(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    user && getUserDashboard();
  }, [user]);

  const totalXP = data?.reduce((acc, curr) => acc + curr.xp, 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
      <div className="flex justify-between mt-16 mb-5 w-full max-w-7xl">
        <h2 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-gray-500">
          Dashboard
        </h2>
        <div className="flex gap-1">
          <Link href={"/buy-credits"}>
            <AnimatedTooltip items={plus} />
          </Link>

          <Button className="bg-gray-800 text-gray-200 hover:bg-gray-800 text-base font-light transition-colors rounded-full px-4 py-2 shadow-md">
            Credits: {userDetail?.credits}
            <Coins />
          </Button>
        </div>
      </div>

      {/* XP Summary */}
      <div className="grid md:grid-cols-4 gap-4 mb-6 w-full max-w-7xl">
        <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 border-0">
          <CardHeader>
            <CardTitle className="text-gray-200">Total XP</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-100 font-bold text-3xl">{totalXP}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 border-0">
          <CardHeader>
            <CardTitle className="text-gray-200">Easy Level Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-100 font-bold text-3xl">
              {data?.reduce((acc, d) => acc + d.easy, 0)}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 border-0">
          <CardHeader>
            <CardTitle className="text-gray-200">
              Medium Level Quizzes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-100 font-bold text-3xl">
              {data?.reduce((acc, d) => acc + d.medium, 0)}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 border-0">
          <CardHeader>
            <CardTitle className="text-gray-200">Hard Level Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-100 font-bold text-3xl">
              {data?.reduce((acc, d) => acc + d.hard, 0)}
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center justify-center mb-6">
        <Link href={"/all-quizzes"}>
          <Button className="bg-gray-800 text-gray-200 hover:bg-black hover:text-white hover:ring-1 hover:ring-white text-base font-light transition-colors rounded-full px-4 py-2 shadow-md cursor-pointer">
            View All
          </Button>
        </Link>
      </div>

      {/* Progress Chart */}
      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 rounded-2xl p-6 shadow-lg w-full max-w-7xl">
        <h2 className="text-xl text-gray-100 font-semibold mb-4">
          📈 Monthly Analysis
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="easy" stroke="#10b981" name="Easy" />
            <Line
              type="monotone"
              dataKey="medium"
              stroke="#3b82f6"
              name="Medium"
            />
            <Line type="monotone" dataKey="hard" stroke="#ef4444" name="Hard" />
            <Line
              type="monotone"
              dataKey="xp"
              stroke="#facc15"
              name="XP Points"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
