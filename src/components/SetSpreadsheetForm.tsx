"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Plus, Edit, Trash2 } from "lucide-react";

interface Spreadsheet {
  _id: string;
  name: string;
  spreadSheetId: string;
  isSet: boolean;
}

const SetSpreadsheetForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [spreadsheets, setSpreadsheets] = useState<Spreadsheet[]>([]);
  const [editingSpreadsheet, setEditingSpreadsheet] =
    useState<Partial<Spreadsheet> | null>(null);
  const [newSpreadsheet, setNewSpreadsheet] = useState({
    name: "",
    spreadSheetId: "",
    isSet: false,
  });
  const modalRef = useRef<HTMLDivElement>(null);

  // Fetch spreadsheets
  const fetchSpreadsheets = async () => {
    try {
      const response = await fetch("/api/spreadsheet");
      const data = await response.json();
      setSpreadsheets(data);
    } catch (error) {
      console.error("Error fetching spreadsheets:", error);
    }
  };

  useEffect(() => {
    fetchSpreadsheets();
  }, []);

  // Add new spreadsheet
  const handleAddSpreadsheet = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/spreadsheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSpreadsheet),
      });
      

      if (response.ok) {
        await fetchSpreadsheets();
        setNewSpreadsheet({ name: "", spreadSheetId: "", isSet: false });
      }
    } catch (error) {
      console.error("Error adding spreadsheet:", error);
    }
  };

  // Edit spreadsheet
const handleEditSpreadsheet = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!editingSpreadsheet?._id) return;

  try {
    const response = await fetch(
      `/api/spreadsheet?id=${editingSpreadsheet._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingSpreadsheet),
      }
    );

    if (response.ok) {
      await fetchSpreadsheets();
      setEditingSpreadsheet(null);
    }
  } catch (error) {
    console.error("Error editing spreadsheet:", error);
  }
};

const handleDeleteSpreadsheet = async (id: string) => {
  try {
    const response = await fetch(`/api/spreadsheet?id=${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await fetchSpreadsheets();
    }
  } catch (error) {
    console.error("Error deleting spreadsheet:", error);
  }
};

  // Modal toggle and close handlers
  const toggleModal = () => setIsOpen(!isOpen);

  const handleCloseModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      setEditingSpreadsheet(null);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("mousedown", handleCloseModal);
    } else {
      window.removeEventListener("mousedown", handleCloseModal);
    }

    return () => {
      window.removeEventListener("mousedown", handleCloseModal);
    };
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={toggleModal}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 shadow-md"
      >
        Manage Spreadsheets
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="relative w-[500px] bg-white rounded-xl shadow-2xl border border-gray-200 p-6"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors"
              onClick={toggleModal}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-indigo-800">
              Spreadsheet Management
            </h2>

            {/* Add/Edit Spreadsheet Form */}
            <form
              onSubmit={
                editingSpreadsheet
                  ? handleEditSpreadsheet
                  : handleAddSpreadsheet
              }
              className="mb-4 space-y-3"
            >
              <input
                type="text"
                placeholder="Spreadsheet Name"
                value={
                  editingSpreadsheet
                    ? editingSpreadsheet.name
                    : newSpreadsheet.name
                }
                onChange={(e) =>
                  editingSpreadsheet
                    ? setEditingSpreadsheet({
                        ...editingSpreadsheet,
                        name: e.target.value,
                      })
                    : setNewSpreadsheet({
                        ...newSpreadsheet,
                        name: e.target.value,
                      })
                }
                className=" text-black w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="text"
                placeholder="Spreadsheet ID"
                value={
                  editingSpreadsheet
                    ? editingSpreadsheet.spreadSheetId
                    : newSpreadsheet.spreadSheetId
                }
                onChange={(e) =>
                  editingSpreadsheet
                    ? setEditingSpreadsheet({
                        ...editingSpreadsheet,
                        spreadSheetId: e.target.value,
                      })
                    : setNewSpreadsheet({
                        ...newSpreadsheet,
                        spreadSheetId: e.target.value,
                      })
                }
                className=" text-black w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={
                    editingSpreadsheet
                      ? editingSpreadsheet.isSet
                      : newSpreadsheet.isSet
                  }
                  onChange={(e) =>
                    editingSpreadsheet
                      ? setEditingSpreadsheet({
                          ...editingSpreadsheet,
                          isSet: e.target.checked,
                        })
                      : setNewSpreadsheet({
                          ...newSpreadsheet,
                          isSet: e.target.checked,
                        })
                  }
                  className="mr-2"
                />
                <label className="text-black">Is Set</label>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                {editingSpreadsheet ? "Update Spreadsheet" : "Add Spreadsheet"}
              </button>
            </form>

            {/* Spreadsheets List */}
            {spreadsheets.length > 0 ? (
              <div className="max-h-64 overflow-y-auto">
                <ul className="space-y-2">
                  {spreadsheets.map((spreadsheet) => (
                    <li
                      key={spreadsheet._id}
                      className="bg-gray-50 p-3 rounded-md border border-gray-200 flex justify-between items-center"
                    >
                      <div>
                        <span className="font-medium text-indigo-800">
                          {spreadsheet.name}
                        </span>
                        <span className="text-sm text-gray-600 block">
                          ID: {spreadsheet.spreadSheetId}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-sm font-semibold px-2 py-1 rounded-full ${
                            spreadsheet.isSet
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {spreadsheet.isSet ? "Set" : "Not Set"}
                        </span>
                        <button
                          onClick={() => setEditingSpreadsheet(spreadsheet)}
                          className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-100"
                        >
                          <Edit size={20} />
                        </button>
                        <button
                          onClick={() =>
                            handleDeleteSpreadsheet(spreadsheet._id)
                          }
                          className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-100"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-gray-600 text-center py-4">
                No spreadsheets found.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SetSpreadsheetForm;
