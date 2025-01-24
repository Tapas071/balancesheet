"use client";
import { useState } from "react";

interface IncomeManagementFormProps {
  handleCloseForm: () => void;
}

const IncomeManagementForm: React.FC<IncomeManagementFormProps> = ({
  handleCloseForm,
}) => {
  const initialFormState = {
    source: "",
    amount: "",
    time: "",
    mode: "",
    type: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      amount: parseFloat(formData.amount),
      time: new Date(formData.time).toISOString(),
    };

    setIsLoading(true);
    try {
      const response = await fetch("/api/addIncomeToDB", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        alert("Income Transaction saved successfully!");
        setFormData(initialFormState);
        handleCloseForm();
      } else {
        throw new Error("Income Transaction save failed");
      }
    } catch (error) {
      alert("Error in saving income transaction. Please try again later.");
      console.error("Error saving income transaction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center relative bg-gray-100 px-4 py-2 rounded-t-lg shadow-sm">
        <h2 className="text-2xl font-bold text-green-800">Add Income</h2>
        <button
          type="button"
          className="rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
            htmlFor="source"
            className="block text-sm font-medium text-gray-700"
          >
            Income Source
          </label>
          <input
            type="text"
            name="source"
            id="source"
            value={formData.source}
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
            Income Amount
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Income Date and Time
          </label>
          <input
            type="datetime-local"
            name="time"
            id="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mode"
            className="block text-sm font-medium text-gray-700"
          >
            Income Mode
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
            <option value="bank_transfer">Bank Transfer</option>
            <option value="online_transfer">Online Transfer</option>
            <option value="salary">Salary</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Income Type
          </label>
          <select
            name="type"
            id="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-600"
            required
          >
            <option value="">Select type</option>
            <option value="Salary">Salary</option>
            <option value="Freelance">Freelance</option>
            <option value="Investment">Investment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isLoading
              ? "bg-green-400 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default IncomeManagementForm;
