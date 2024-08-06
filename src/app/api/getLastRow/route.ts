// import { NextResponse } from "next/server";
// import { getLastRow } from "../../../../lib/googleSheets";

// export const GET = async (req: Request) => {
//   try {
//     const { searchParams } = new URL(req.url);
//     const spreadsheetId = searchParams.get("spreadsheetId");
//     const sheetName = searchParams.get("sheetName");
//     const result = await getLastRow(spreadsheetId!, sheetName!);
//     return new NextResponse(
//       JSON.stringify({
//         message: "getting operation is successfull",
//         sheetName,
//         spreadsheetId,
//         result,
//       }),
//       { status: 200 }
//     );
//   } catch (err: any) {
//     console.log("error while categories by id get request ", err);
//   }
// };

// import { NextApiRequest, NextApiResponse } from "next";
// import { getLastRow } from "../../../../lib/googleSheets";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const spreadsheetId = req.query.spreadsheetId as string;
//     const sheetName = req.query.sheetName as string;
//     const result = await getLastRow(spreadsheetId, sheetName);

//     res.status(200).json({
//       message: "getting operation is successful",
//       sheetName,
//       spreadsheetId,
//       result,
//     });
//   } catch (err: any) {
//     console.log("error while categories by id get request ", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// import { NextApiRequest, NextApiResponse } from "next";
// import { getLastRow } from "../../../../lib/googleSheets";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     try {
//       const { spreadsheetId, sheetName } = req.query; // Assuming query parameters are used
//       const result = await getLastRow(
//         spreadsheetId as string,
//         sheetName as string
//       );

//       res.status(200).json({
//         message: "Getting operation is successful",
//         sheetName,
//         spreadsheetId,
//         result,
//       });
//     } catch (err: any) {
//       console.error("Error while getting last row:", err);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// version 3 ----------------------------------------------------------


import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import MoneyTransaction from "../../../../models/MoneyTransaction";
import { getLastRow, writeBalanceSheetData } from "../../../../lib/googleSheets";
import { Result } from "postcss";
export async function POST(request: Request) {
  //   await dbConnect();
  const data = await request.json();
  //   const { location, amount, time, mode } = data;
  const { spreadsheetId, sheetName } = data;
   const result = await getLastRow(spreadsheetId, sheetName);
  //  const getRange = await fetch
  // api call using fetch method
  // const lastRow = await fetch("api/getLastRow", {
  //   method: "GET",
  // })
  //   .then((response) => {
  //     if (response.status === 200) {
  //       console.log("response", response);
  //       return response.json();
  //     }
  //   })
  //   .catch((error) => {
  //     alert("Error fetching last row. Please try again later.");
  //     console.error("Error fetching last row:", error);
  //   });
  // console.log("lastRow", lastRow);
  try {
    // const result = await writeBalanceSheetData(spreadsheetId, range, values);
      // res.status(200).json(result);
  } catch (error) {
    //   res.status(500).json({ error: "Error writing to spreadsheet" });
  }

  //   res.status(201).json({ success: true, data: transaction });
  // } catch (error) {
  //   console.error("Error saving transaction:", error);
  //   res.status(400).json({ success: false });
  // }
  return NextResponse.json({
    result,
  });
}


// version 4 ---------------------------------------

// import { NextApiRequest, NextApiResponse } from "next";
// import { getLastRow } from "../../../../lib/googleSheets";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { spreadsheetId, sheetName } = req.query;

//     if (!spreadsheetId || !sheetName) {
//       return res
//         .status(400)
//         .json({
//           error: "Missing required parameters: spreadsheetId and sheetName",
//         });
//     }

//     try {
//       const lastRow = await getLastRow(
//         spreadsheetId as string,
//         sheetName as string
//       );
//       res.status(200).json({ lastRow });
//     } catch (error) {
//       console.error("Error retrieving last row:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }