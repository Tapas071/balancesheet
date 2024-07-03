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

  //   res.status(201).json({ success: true, data: transaction });
  // } catch (error) {
  //   console.error("Error saving transaction:", error);
  //   res.status(400).json({ success: false });
  // }
  return NextResponse.json({
    data,
  });
}
