import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import MoneyTransaction from "../../../../models/MoneyTransaction";
import { getLastRow, writeBalanceSheetData } from "../../../../lib/googleSheets";
import { Result } from "postcss";
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
    const result = await writeBalanceSheetData(spreadsheetId, modifiedRange, values);

  } catch (error) {
  }
  return NextResponse.json({
    status: 200
  });
}
