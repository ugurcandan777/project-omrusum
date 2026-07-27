import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  console.log("ENV USER:", process.env.LOGIN_USERNAME);
  console.log("ENV PASS:", process.env.LOGIN_PASSWORD);

  console.log("GELEN USER:", username);
  console.log("GELEN PASS:", password);

  if (
    username === process.env.LOGIN_USERNAME &&
    password === process.env.LOGIN_PASSWORD
  ) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { success: false },
    { status: 401 }
  );
}