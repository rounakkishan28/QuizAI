import { USER_TABLE } from "../../../configs/Schema";
import { db } from "../../../configs/db";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const frontend_url = "";

export async function PUT(req) {
  const { userEmail, credits } = await req.json();

  const result = await db
    .select()
    .from(USER_TABLE)
    .where(eq(USER_TABLE.email, userEmail));
  const updatedCredits = result[0].credits + credits;

  await db
    .update(USER_TABLE)
    .set({
      credits: updatedCredits,
    })
    .where(eq(USER_TABLE.email, userEmail))
    .returning(USER_TABLE);

  const line_items = [
    {
      price_data: {
        currency: "inr",
        product_data: {
          name: "Credits",
        },
        unit_amount: credits * 20 * 100,
      },
      quantity: 1,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: "payment",
    success_url: `${frontend_url}/dashboard`,
    cancel_url: `${frontend_url}/dashboard`,
  });

  return NextResponse.json({ session_url: session.url });
}
