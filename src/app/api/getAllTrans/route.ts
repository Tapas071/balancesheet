import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import MoneyTransaction2 from "../../../../models/MoneyTransaction2";
export async function GET(req: NextRequest, res: NextResponse) {
  try {
      await dbConnect();
       const transactions = await MoneyTransaction2.find({});
    return NextResponse.json(transactions ,{status :200} )
  } catch (error) {
    return NextResponse.json({error : "Some Error has been occured"},{status : 500})
  }
}