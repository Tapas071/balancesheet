// lib/googleSheets.ts
import { google, sheets_v4 } from "googleapis";
import { GoogleAuth, JWT } from "google-auth-library";

const serviceAccount = JSON.parse(
  process.env.GOOGLE_SERVICE_ACCOUNT_JSON as string
);
const auth = new GoogleAuth({
  credentials: serviceAccount,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function getSheetsClient(): Promise<sheets_v4.Sheets> {
  const authClient = (await auth.getClient()) as JWT;
  google.options({ auth: authClient });
  return google.sheets("v4");
}

export async function writeBalanceSheetData(
  spreadsheetId: string,
  range: string,
  values: any[][]
): Promise<sheets_v4.Schema$UpdateValuesResponse> {
  const sheetsClient = await getSheetsClient();
  const request: sheets_v4.Params$Resource$Spreadsheets$Values$Update = {
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    requestBody: {
      values,
    },
  };
  try {
    const response = await sheetsClient.spreadsheets.values.update(request);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error writing to spreadsheet2:", error);
    throw error;
  }
}

export async function getLastRow(
  spreadsheetId: string,
  sheetName: string
): Promise<Number | null> {
  const sheetsClient = await getSheetsClient(); // Assuming getSheetsClient() returns the Google Sheets API client
  const request = {
    spreadsheetId,
    range: `${sheetName}!A:A`, // Fetch only the first column (assuming name is in column A)
    valueRenderOption: "UNFORMATTED_VALUE", // Ensure raw values are fetched
    dateTimeRenderOption: "FORMATTED_STRING", // Handle dates/times appropriately if needed
  };

  try {
    const response = await sheetsClient.spreadsheets.values.get(request);
    const rows = response.data.values;

    if (rows && rows.length) {
      return rows.length - 1;
      // return rows[rows.length - 1][0]; // Return the first column of the last row
    }
     else {
      return null;
    }
  } catch (error) {
    console.error("Error retrieving data from spreadsheet:", error);
    throw error;
  }
}
