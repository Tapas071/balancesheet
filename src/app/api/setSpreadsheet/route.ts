import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import SetSpreadsheet from "../../../../models/SetSpreadsheet";
import Spreadsheet from "../../../../models/Spreadsheet";
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        await dbConnect();
        const setSpreadsheetId = await SetSpreadsheet.find({});
        return NextResponse.json(setSpreadsheetId, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Some Error has been occured" },
            { status: 500 }
        );
    }
}
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        await dbConnect();
        const data = await req.json();
        const { spreadsheetId } = data;
        const newSetSpreadsheet = new SetSpreadsheet({
            spreadsheetId
        });
        await newSetSpreadsheet.save();
        return NextResponse.json({
            status: 200,
            newSetSpreadsheet,
        });
    } catch (error) {
        console.error("Error saving transaction:", error);
    }
}
export async function DELETE (req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await dbConnect();
        const deletedSetSpreadsheet = await SetSpreadsheet.findByIdAndDelete(params.id);
        if (!deletedSetSpreadsheet) {
            return NextResponse.json(
                { error: "SetSpreadsheet not found" },
                { status: 404 }
            );
        }
        return NextResponse.json({
            status: 200,
            deletedSetSpreadsheet,
        });
    } catch (error) {
        console.error("Error deleting SetSpreadsheet:", error);
    }
}