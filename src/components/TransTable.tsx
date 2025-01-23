"use client"
import React, { useState, useEffect } from "react";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


interface Transaction {
  _id: string;
  location: string;
  amount: number;
  time: string;
  mode: string;
  type: string;
  __v: number;
}

const PaymentsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/getAllTrans`);
        const data: Transaction[] = await response.json();
        // Sort transactions by time (newest first)
        const sortedTransactions = data.sort(
          (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
        );
        setTransactions(sortedTransactions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Payment History
      </h2>
      <table className="table-auto w-full rounded-md shadow-md">
        <thead>
          <tr className="bg-blue-700 text-left font-semibold text-white">
            <th className="px-4 py-2">Date/Time</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Mode</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction) => (
            <tr
              key={transaction._id}
              className="border-b border-gray-200 hover:bg-gray-700"
            >
              <td className="px-4 py-2">
                {new Date(transaction.time).toLocaleDateString()}
              </td>
              <td className="px-4 py-2">{transaction.amount}</td>
              <td className="px-4 py-2">{transaction.mode}</td>
              <td className="px-4 py-2">{transaction.type}</td>
              <td className="px-4 py-2">{transaction.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastTransaction >= transactions.length}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentsTable;
