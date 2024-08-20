import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/dbConnect";
import MoneyTransaction2 from "../../../../models/MoneyTransaction2";
import { getLastRow, writeBalanceSheetData } from "../../../../lib/googleSheets";
import { Result } from "postcss";
export async function GET(request: Request) {
    await dbConnect();

    


    
    try {
      const AllTransactions = await MoneyTransaction2.find({}); 
      let TravelExpensesSum : Number =0;
        let FoodExpensesSum : Number =0;
        let ShoppingExpensesSum : Number =0;
        let OtherExpensesSum : Number =0;
        let TotalExpensesSum : Number =0;
        let mobilePaymentSum : Number =0;
        let cashPaymentSum : Number =0;
        let creditCardPaymentSum : Number =0;
        let debit_cardPaymentSum : Number =0;
        let bank_transferPaymentSum : Number =0;

      AllTransactions.map(async (transaction) => {
        const { location, amount, time, mode, type } = transaction;
        if(type=="Travel"){
            TravelExpensesSum += amount;
            }
        if(type=="Fooding"){
            FoodExpensesSum += amount;
            }
        if(type=="Shopping"){
            ShoppingExpensesSum += amount;
            }
        if(type=="Other"){
            OtherExpensesSum += amount;
            }
        TotalExpensesSum += amount;
            if(mode == "mobile_payment"){
                mobilePaymentSum += amount;
            }
            if(mode == "cash"){
                cashPaymentSum += amount;
            }
            if(mode == "credit_card")creditCardPaymentSum += amount;
            if(mode == "debit_card")debit_cardPaymentSum += amount;
            if( mode =="bank_transfer") bank_transferPaymentSum += amount;


        }
        );

      return NextResponse.json({
        
        "ExpenseType":{
          "TotalExpensesSum" : TotalExpensesSum,
          "TravelExpensesSum" : TravelExpensesSum,
          "Food": FoodExpensesSum,
          "Shoppings":ShoppingExpensesSum,
          "Other":OtherExpensesSum
        },
        "ExpenseMode":{
            "TotalMobilePayment": mobilePaymentSum,
            "TotalCashPayment" : cashPaymentSum,
            "TotalcreditCardPaymentSum" : creditCardPaymentSum,
            "Totaldebit_cardPaymentSum": debit_cardPaymentSum,
            "Totalbank_transferPaymentSum": bank_transferPaymentSum     
        }
    });
  } catch (error:unknown) {
    console.log(error)
  }
}
// version 4 ---------------------------------------

// import { NextApiRequest, NextApiResponse } from "next";
// import { getLastRow } from "../../../../lib/googleSheets";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { spreadsheetId, sheetName } = req.query;

//     if (!spreadsheetId || !sheetName) {
//       return res
//         .status(400)
//         .json({
//           error: "Missing required parameters: spreadsheetId and sheetName",
//         });
//     }

//     try {
//       const lastRow = await getLastRow(
//         spreadsheetId as string,
//         sheetName as string
//       );
//       res.status(200).json({ lastRow });
//     } catch (error) {
//       console.error("Error retrieving last row:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }