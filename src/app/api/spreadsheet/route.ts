import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import Spreadsheet from "../../../../models/Spreadsheet";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const transactions = await Spreadsheet.find({});
    return NextResponse.json(transactions, { status: 200 });
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
    const {name, spreadSheetId,isSet } = data;
    const newSpreadsheet = new Spreadsheet({
        name,
      spreadSheetId,
      isSet
    });
    // console.log(newSpreadsheet);
    await newSpreadsheet.save();
    return NextResponse.json({
      status: 200,
      newSpreadsheet,
    });
  } catch (error) {
    console.error("Error saving transaction:", error);
  }
}


export async function PUT(req: NextRequest) {
  try {
    await dbConnect();
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Spreadsheet ID is required" },
        { status: 400 }
      );
    }

    const data = await req.json();

    const updatedSpreadsheet = await Spreadsheet.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedSpreadsheet) {
      return NextResponse.json(
        { error: "Spreadsheet not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: 200,
      spreadsheet: updatedSpreadsheet,
    });
  } catch (error) {
    console.error("Error updating spreadsheet:", error);
    return NextResponse.json(
      { error: "Error updating spreadsheet" },
      { status: 500 }
    );
  }
}
export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();

    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Spreadsheet ID is required" },
        { status: 400 }
      );
    }

    const deletedSpreadsheet = await Spreadsheet.findByIdAndDelete(id);

    if (!deletedSpreadsheet) {
      return NextResponse.json(
        { error: "Spreadsheet not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: 200,
      message: "Spreadsheet deleted successfully",
      deletedSpreadsheet,
    });
  } catch (error) {
    console.error("Error deleting spreadsheet:", error);
    return NextResponse.json(
      { error: "Error deleting spreadsheet" },
      { status: 500 }
    );
  }
}