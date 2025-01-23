'use client'

import React, { useState } from 'react';
import MoneyManagementForm from './MoneyManagementForm';

const AddMoneyFormWrapper = () => {
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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Expenses
      </button>
      {isFormOpen && <MoneyManagementForm handleCloseForm={handleCloseForm} />}
    </div>
  );
};

export default AddMoneyFormWrapper;