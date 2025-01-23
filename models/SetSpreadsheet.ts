import mongoose from "mongoose"

const SetSpreadsheetSchema: mongoose.Schema = new mongoose.Schema({
    spreadsheetId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Spreadsheet",
        required: true
    }
});
export default mongoose.models.SetSpreadsheet ||
    mongoose.model("SetSpreadsheet", SetSpreadsheetSchema);