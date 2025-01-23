import mongoose from "mongoose";
import { isSet } from "util/types";

const SpreadsheetSchema: mongoose.Schema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    },
    spreadSheetId: {
    type: String,
    required: true,
    },
    isSet: {
    type: Boolean,
    default: false,
    }
});


export default mongoose.models.Spreadsheet ||
  mongoose.model("Spreadsheet", SpreadsheetSchema);