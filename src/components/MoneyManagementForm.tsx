import { use, useState } from "react";
import axios from "axios";

const MoneyManagementForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    amount: "",
    time: "",
    mode: "",
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
  const writeDateUrl = "http://localhost:3000/api/writedata";
  const getLastRowUrl =
    "http://localhost:3000/api/getLastRow?spreadsheetId=1u1P8JTDqWnrSMk38qfbLzWrslqxA2t8tTGLl5r_mFNE&sheetName=Sheet1";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    //  make an api call to get the last fill row of the sheet
    const lastRow = await fetch(getLastRowUrl, {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("response", response);
          return response.json();
        }
      })
      .catch((error) => {
        alert("Error fetching last row. Please try again later.");
        console.error("Error fetching last row:", error);
      });
    const lastRowData = lastRow.result;
    const rangeee = `Sheet1!A${lastRowData + 2}:D${lastRowData + 2}`;
    // console.log("lastRowData", rangeee);

    // api call for google sheets using fetch method
    const dataOfSheet = {
      spreadsheetId: "1u1P8JTDqWnrSMk38qfbLzWrslqxA2t8tTGLl5r_mFNE",
      range: rangeee,
      values: [
        [formData.location, formData.amount, formData.time, formData.mode],
      ],
    };
    await fetch(writeDateUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataOfSheet),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          // alert("write date Transaction saved successfully!");
        }
      })
      .catch((error) => {
        alert(
          "Error  in write data saving transaction. Please try again later."
        );
        // console.error("Error saving transaction:", error);
      })
      .finally(() => {
        setFormData({
          location: "",
          amount: "",
          time: "",
          mode: "",
        });
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Money Management Form</h2>
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
