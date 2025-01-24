"use client";

import React, { useState } from "react";
import IncomeManagementForm from "./IncomeManagementForm";
// import IncomeManagementForm from "./IncomeManagementForm";

const IncomeWrapper = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenForm}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Income
      </button>
      {isFormOpen && <IncomeManagementForm handleCloseForm={handleCloseForm} />}
    </div>
  );
};

export default IncomeWrapper;
