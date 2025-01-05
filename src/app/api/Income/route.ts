import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import MoneyTransaction2 from "../../../../models/MoneyTransaction2";
import Income from "../../../../models/Income";
export async function GET(req: NextRequest, res: NextResponse) {
  try {
      await dbConnect();
       const transactions = await Income.find({});
    return NextResponse.json(transactions ,{status :200} )
  } catch (error) {
    return NextResponse.json({error : "Some Error has been occured"},{status : 500})
  }
}

export async function POST(req: NextRequest, res: NextResponse) {

    try {
        await dbConnect();
        const data = await req.json();
        const { location, amount, time, mode, type } = data;
        const transaction = new Income({
            location,
            amount,
            time,
            mode,
            type,
        });
        await transaction.save();
        return NextResponse.json({
            status: 200,
            transaction
        });

        
    } catch (error) {
        console.error("Error saving transaction:", error);  
    }


}