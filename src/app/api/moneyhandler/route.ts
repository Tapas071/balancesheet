import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
import MoneyTransaction from "../../../../models/MoneyTransaction";
import MoneyTransaction2 from "../../../../models/MoneyTransaction2";

export async function POST(req: Request) {
  // await dbConnect();
  // const data = await req.body;
  // console.log(data)
  // cons
const data = await req.json();
// 
  // console.log(" the data is --> " + data);
      // await dbConnect();

      // // const { location, amount, time, mode } = req.body;

      // const transaction = new MoneyTransaction({
      //   location,
      //   amount,
      //   time,
      //   mode,
      // });
      const location = data.location;
      const amount = data.amount;
      const time = data.time;
      const mode = data.mode;
      const type = data.type;

      // await transaction.save();

  // console.log(" the data is --> " + data.location);
  // const { location, amount, time, mode } = req.body;
  // console.log(" the transaction is --> " + req.body.location);
  // return NextResponse.json({

  //     location,
  //   amount,
  //   time,
  //   mode,
  // });

  // const [location , amount, time, mode ] = data;

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
      location,
      amount,
      time,
      mode,
      type,
    });


    // res.status(201).json({ success: true, data: transaction });
  } catch (error) {
    console.error("Error saving transaction:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
