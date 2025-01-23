"use client"
import { use, useState } from "react";
import axios from "axios";
// const BASE_URL = process.env.BASE_URL;
// const BASE_URL = "http://65.0.87.86:3000";
const BASE_URL = "http://localhost:3000";

interface MoneyManagementFormProps {
  handleCloseForm: () => void;
}
const MoneyManagementForm: React.FC<MoneyManagementFormProps> = ({
  handleCloseForm,
}) => {
  const [formData, setFormData] = useState({
    location: "",
    amount: "",
    time: "",
    mode: "",
    type: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // console.log("BASE_URL", BASE_URL);
  const writeDateUrl = `${BASE_URL}/api/writedata`;
  const moneyhanlerurl = `${BASE_URL}/api/moneyhandler`;
  const getLastRowUrl = `${BASE_URL}/api/getLastRow`;
  const handleSubmit = async (e: React.FormEvent) => {
    // console.log("formData", formData);
    e.preventDefault();
    // console.log("formData", formData);
    const spreadsheetId = "1u1P8JTDqWnrSMk38qfbLzWrslqxA2t8tTGLl5r_mFNE";
    const range = "Sheet1!A5:D5";
    const values = [
      [formData.location, formData.amount, formData.time, formData.mode],
    ];
    const sheetName = "Sheet1";
    const data = {
      spreadsheetId,
      range,
      values,
      sheetName,
    };
    // console.log("data", data);
    try {
      const response = await fetch(writeDateUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Write date Transaction saved successfully!");
      } else {
        throw new Error("Transaction save failed");
      }
    } catch (error) {
      alert("Error in write data saving transaction. Please try again later.");
      console.error("Error saving transaction:", error);
    }
    
    //  make an api call to get the last fill row of the sheet
    // const lastRow = await fetch(getLastRowUrl, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     spreadsheetId: "1u1P8JTDqWnrSMk38qfbLzWrslqxA2t8tTGLl5r_mFNE",
    //     sheetName: "Sheet1",
    //   }),
    // })
    //   .then((response) => {
    //     // console.log("response2", response);
    //     if (response.status === 200) {
    //       console.log("response", response);
    //       return response.json();
    //     }
    //   })
    //   .catch((error) => {
    //     alert("Error fetching last row. Please try again later.");
    //     console.error("Error fetching last row:", error);
    //   });
    // const lastRowData = lastRow.result;
    // console.log("lastRowData", lastRowData);
    // const rangeee = `Sheet1!A${lastRowData + 2}:E${lastRowData + 2}`;
    // console.log("lastRowData", rangeee);

    // api call for google sheets using fetch method
    // const dataOfSheet = {
    //   spreadsheetId: "1u1P8JTDqWnrSMk38qfbLzWrslqxA2t8tTGLl5r_mFNE",
    //   range: rangeee,
    //   values: [
    //     [
    //       formData.location,
    //       formData.amount,
    //       formData.time,
    //       formData.mode,
    //       formData.type,
    //     ],
    //   ],
    // };
    // const moneyhanlerData = {
    //   location: formData.location,
    //   amount: formData.amount,
    //   time: formData.time,
    //   mode: formData.mode,
    //   type: formData.type,
    // };
    // await fetch(moneyhanlerurl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(moneyhanlerData),
    // })
    //   .then((response) => {
    //     if (response.status === 200 || response.status === 201) {
    //       // alert("write date Transaction saved successfully!");
    //     }
    //   })
    //   .catch((error) => {
    //     alert(
    //       "Error  in write data saving transaction. Please try again later."
    //     );
    //     // console.error("Error saving transaction:", error);
    //   });
    // await fetch(writeDateUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(dataOfSheet),
    // })
    //   .then((response) => {
    //     if (response.status === 200 || response.status === 201) {
    //       // alert("write date Transaction saved successfully!");
    //     }
    //   })
    //   .catch((error) => {
    //     alert(
    //       "Error  in write data saving transaction. Please try again later."
    //     );
    //     // console.error("Error saving transaction:", error);
    //   })
    //   .finally(() => {
    //     alert("form has been submitted successfully");
    //     setFormData({
    //       location: "",
    //       amount: "",
    //       time: "",
    //       mode: "",
    //       type: "",
    //     });
    //      setTimeout(() => {
    //        alert("Form submitted successfully!");
    //        handleCloseForm();
    //      }, 500); 
    //   });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center relative bg-gray-100 px-4 py-2 rounded-t-lg shadow-sm">
        <h2 className=" text-2xl font-bold text-blue-800">
          Add Expenses
        </h2>
        <button
          type="button"
          className=" rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleCloseForm}
        >
          <svg
            className="h-6 w-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Where did you spend the money?
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            How much money did you spend?
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            What time did the transaction occur?
          </label>
          <input
            type="datetime-local"
            name="time"
            id="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2  text-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mode"
            className="block text-sm font-medium text-gray-700"
          >
            Which mode of transaction did you follow?
          </label>
          <select
            name="mode"
            id="mode"
            value={formData.mode}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-600"
            required
          >
            <option value="">Select mode</option>
            <option value="cash">Cash</option>
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            <option value="bank_transfer">Bank Transfer</option>
            <option value="mobile_payment">Mobile Payment</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="mode"
            className="block text-sm font-medium text-gray-700"
          >
            Transaction type
          </label>
          <select
            name="type"
            id="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-600"
            required
          >
            {" "}
            <option value="">Select mode</option>
            <option value="Fooding">Fooding</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MoneyManagementForm;
