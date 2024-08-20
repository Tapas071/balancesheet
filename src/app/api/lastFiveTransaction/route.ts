import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import MoneyTransaction2 from "../../../../models/MoneyTransaction2";
import { getLastRow, writeBalanceSheetData } from "../../../../lib/googleSheets";
import { Result } from "postcss";
import { Details } from "devextreme-react/cjs/file-manager";
type arrayType = {
    location: string;
    amount: number;
    time: string;
    mode: string;
    type: string;
    };
export async function GET(request: Request) {
    await dbConnect();
    try {
        // last five transactions
        const Details: arrayType[] = [];
    const AllTransactions = await MoneyTransaction2.find({}).sort({time:-1}).limit(5);
    AllTransactions.map(async (transaction) => {
        const { location, amount, time, mode, type } = transaction;
        Details.push({location, amount, time, mode, type});
    }
    );
      return NextResponse.json({
        Details
    });
  } catch (error:unknown) {
    console.log(error)
  }
}