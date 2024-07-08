import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import MoneyTransaction from "../../../../models/MoneyTransaction";
export async function POST(request: Request) {
  await dbConnect();
  const data = await request.json();
  const { location, amount, time, mode } = data;
  const transaction = new MoneyTransaction({
    location,
    amount,
    time,
    mode,
  });
  await transaction.save();
  return NextResponse.json({
    data,
  });
}
