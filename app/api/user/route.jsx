import { db } from "../../../configs/db";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { USER_TABLE } from "../../../configs/Schema";

export async function POST(req) {
  const { user } = await req.json();

  // check if user exist in DB
  const userResult = await db
    .select()
    .from(USER_TABLE)
    .where(eq(USER_TABLE.email, user?.primaryEmailAddress.emailAddress));

  // if not then insert user data to DB
  if (userResult?.length == 0) {
    const result = await db
      .insert(USER_TABLE)
      .values({
        name: user.fullName,
        email: user?.primaryEmailAddress.emailAddress,
      })
      .returning(USER_TABLE);
    return NextResponse.json(result[0]);
  }
  return NextResponse.json(userResult[0]);
}
