import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
import MoneyTransaction from "../../../../models/MoneyTransaction";
import MoneyTransaction2 from "../../../../models/MoneyTransaction2";

export async function POST(req: Request) {

const data = await req.json();

      const location = data.location;
      const amount = data.amount;
      const time = data.time;
      const mode = data.mode;
      const type = data.type;
      
      try {

  await dbConnect();
  
  // const { location, amount, time, mode } = req.body;
  
  // const transaction = new MoneyTransaction({
    //   location,
    //   amount,
    //   time,
    //   mode,
    //   type,
    // });

    // await transaction.save();
    const transaction2 = new MoneyTransaction2({
      location,
      amount,
      time,
      mode,
      type,
    });
    await transaction2.save();
    return NextResponse.json({
     status: 200
     ,
     transaction2
    }
      );

  } catch (error) {
    console.error("Error saving transaction:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
