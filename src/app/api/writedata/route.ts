import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import MoneyTransaction from "../../../../models/MoneyTransaction";
import { writeBalanceSheetData } from "../../../../lib/googleSheets";
import { Result } from "postcss";
export async function POST(request: Request) {
  //   await dbConnect();
  const data = await request.json();
  //   const { location, amount, time, mode } = data;
  const { spreadsheetId, range, values } = data;
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
    const result = await writeBalanceSheetData(spreadsheetId, range, values);
    //   res.status(200).json(result);
  } catch (error) {
    //   res.status(500).json({ error: "Error writing to spreadsheet" });
  }

  //   res.status(201).json({ success: true, data: transaction });
  // } catch (error) {
  //   console.error("Error saving transaction:", error);
  //   res.status(400).json({ success: false });
  // }
  return NextResponse.json({
    status: 200
  });
}
