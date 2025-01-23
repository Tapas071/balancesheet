import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import MoneyTransaction from "../../../../models/MoneyTransaction";
import { getLastRow, writeBalanceSheetData } from "../../../../lib/googleSheets";
import { Result } from "postcss";
import axios from "axios";
export async function POST(request: Request) {

  const data = await request.json();
  const { spreadsheetId, range, values, sheetName } = data;
  try {
    const getRange =  await  getLastRow(spreadsheetId, sheetName);
    console.log("the last row is " + getRange);
    let modifiedRange = ""; 
    if (getRange !== null) {
      const getRange1 = Number(getRange) + 2;
      modifiedRange = `Sheet1!A${(getRange1)}:D${getRange1}`;
    }
    const location = values[0].location;
    const amount = values[0].amount;
    const time = values[0].time;
    const mode = values[0].mode;
    const type = values[0].type;

    // console.log(addToDB);
    const result = await writeBalanceSheetData(spreadsheetId, modifiedRange, values);
  } catch (error) {
  }
  return NextResponse.json({
    status: 200
  });
}
