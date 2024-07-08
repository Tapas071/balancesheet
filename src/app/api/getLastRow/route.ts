import { NextResponse } from "next/server";
import { getLastRow } from "../../../../lib/googleSheets";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const spreadsheetId = searchParams.get("spreadsheetId");
    const sheetName = searchParams.get("sheetName");
    const result = await getLastRow(spreadsheetId!, sheetName!);
    return new NextResponse(
      JSON.stringify({
        message: "getting operation is successfull",
        sheetName,
        spreadsheetId,
        result,
      }),
      { status: 200 }
    );
  } catch (err: any) {
    console.log("error while categories by id get request ", err);
  }
};
