// "use client"
// import React, { useState, useEffect } from 'react';
// import { saveAs } from 'file-saver';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';

// autoTable(jsPDF);

// interface Transaction {
//   _id: string;
//   location: string;
//   amount: number;
//   time: string;
//   mode: string;
//   type: string;
//   __v: number;
// }

// const DownloadSpreadsheet: React.FC = () => {
//   const [transactions, setTransactions] = useState<Transaction[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/api/getAllTrans');
//         const data: Transaction[] = await response.json();
//         setTransactions(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDownload = () => {
//     const doc = new jsPDF('p', 'pt');

//     const tableData = transactions.map((transaction) => [
//       new Date(transaction.time).toLocaleDateString(),
//       transaction.amount,
//       transaction.mode,
//       transaction.type,
//       transaction.location,
//     ]);

//     doc.autoTable({
//       head: [['Date/Time', 'Amount', 'Mode', 'Type', 'Location']],
//       body: tableData,
//     });

//     doc.save('payment_history.pdf');
//   };

//   return (
//     <button
//       onClick={handleDownload}
//       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//     >
//       Download Spreadsheet
//     </button>
//   );
// };

// export default DownloadSpreadsheet;