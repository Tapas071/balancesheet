// import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
// export async function GET() {
//   return NextResponse.json({
//     message: "Hello from Next.js API!",
//     timestamp: new Date().toISOString(),
//   });
// }

// import { NextApiRequest, NextApiResponse } from "next";
// import dbConnect from "../../../../lib/dbConnect";
// import MoneyTransaction from "../../../../models/MoneyTransaction";

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   await dbConnect();
//   // console.log(req);
//   // return NextResponse.json(req.body);
//   try {
//     const transaction = new MoneyTransaction(req.body);
//     console.log(" the transaction is --> " + transaction);
//     await transaction.save();
//     console.log(" the transaction is save --> " + transaction);
//     res.status(201).json({ success: true, data: transaction });
//   } catch (error) {
//     res.status(400).json({ success: false });
//   }
//   return NextResponse.json({
//     message: "Hello from Next.js API!",
//     timestamp: new Date().toISOString(),
//   });
// }

// export default async function moneyhandler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { method } = req;

//   await dbConnect();

//   switch (method) {
//     case "POST":
//       try {
//         const transaction = new MoneyTransaction(req.body);
//         await transaction.save();
//         res.status(201).json({ success: true, data: transaction });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// }

// pages/api/your-api-endpoint.ts

// import { NextApiRequest, NextApiResponse } from "next";
// import dbConnect from "../../../../lib/dbConnect";
// import MoneyTransaction from "../../../../models/MoneyTransaction";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     try {
//       await dbConnect();

//       const { location, amount, time, mode } = req.body;

//       const transaction = new MoneyTransaction({
//         location,
//         amount,
//         time,
//         mode,
//       });

//       await transaction.save();

//       res.status(201).json({ success: true, data: transaction });
//     } catch (error) {
//       console.error("Error saving transaction:", error);
//       res.status(400).json({ success: false });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// pages/api/moneyhandler/route.ts

import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
import MoneyTransaction from "../../../../models/MoneyTransaction";

export async function POST(req: Request) {
  // await dbConnect();
  // const data = await req.body;
  const data = await req.json();
  console.log(" the data is --> " + data);
  // console.log(" the data is --> " + data.location);
  // const { location, amount, time, mode } = req.body;
  // console.log(" the transaction is --> " + req.body.location);
  return NextResponse.json({
    location: "kolkata",
    message: "Hello from Next.js API!",
    timestamp: new Date().toISOString(),
  });

  // try {
  //   await dbConnect();

  //   const { location, amount, time, mode } = req.body;

  //   const transaction = new MoneyTransaction({
  //     location,
  //     amount,
  //     time,
  //     mode,
  //   });

  //   await transaction.save();

  //   res.status(201).json({ success: true, data: transaction });
  // } catch (error) {
  //   console.error("Error saving transaction:", error);
  //   res.status(400).json({ success: false });
  // }
}
