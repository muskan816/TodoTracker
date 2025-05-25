"use client";
import React, { useState, useEffect } from "react";

interface MentorCall {
  id: number;
  dueDate: string;
  description: string;
}

interface MentorCallModalProps {
  calls: MentorCall[];
  setShowMentorCall: React.Dispatch<React.SetStateAction<boolean>>;
  mentorDescription: string;
  setMentorDescription: (value: string) => void;
  setMentorCalls: React.Dispatch<React.SetStateAction<MentorCall[]>>;
  dueDate: string;
  setDueDate: (value: string) => void;
  isEditing: boolean;
  editingId: number | null;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingId: React.Dispatch<React.SetStateAction<number | null>>;
}

const MentorCallModal: React.FC<MentorCallModalProps> = ({
  calls,
  setShowMentorCall,
  mentorDescription,
  setMentorDescription,
  setMentorCalls,
  dueDate,
  setDueDate,
  isEditing,
  editingId,
  setIsEditing,
  setEditingId,
}) => {
  const [callDate, setCallDate] = useState(dueDate || "");

  useEffect(() => {
    setCallDate(dueDate);
  }, [dueDate]);

  const handleSubmit = () => {
    if (!mentorDescription.trim() || !callDate) return;

    if (isEditing && editingId !== null) {
      // Edit mode
      setMentorCalls((prev) =>
        prev.map((call) =>
          call.id === editingId
            ? { ...call, dueDate: callDate, description: mentorDescription }
            : call
        )
      );
    } else {
      // Add mode
      const newCall: MentorCall = {
        id: Date.now(),
        dueDate: callDate,
        description: mentorDescription,
      };
      setMentorCalls((prev) => [...prev, newCall]);
    }

    // Reset state
    setMentorDescription("");
    setCallDate("");
    setDueDate("");
    setShowMentorCall(false);
    setIsEditing(false);
    setEditingId(null);
  };

  // Delete handler
  const handleDelete = (id: number) => {
    setMentorCalls((prev) => prev.filter((call) => call.id !== id));
  };

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {isEditing ? "Edit Mentor Call Note" : "Record Mentor Call Notes"}
          </h3>
          <button
            onClick={() => {
              setShowMentorCall(false);
              setIsEditing(false);
              setEditingId(null);
            }}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* List of Mentor Calls with Delete Button */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Existing Mentor Calls</h4>
          {calls.length === 0 ? (
            <p className="text-gray-500 text-sm">No mentor calls yet.</p>
          ) : (
            <ul className="space-y-2">
              {calls.map((call) => (
                <li key={call.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                  <div>
                    <span className="font-medium">{call.dueDate}</span>: {call.description}
                  </div>
                  <button
                    onClick={() => handleDelete(call.id)}
                    className="text-red-600 hover:text-red-800 px-2"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Inputs */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notes
          </label>
          <textarea
            value={mentorDescription}
            onChange={(e) => setMentorDescription(e.target.value)}
            rows={4}
            placeholder="Enter mentor call notes..."
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Call Date
          </label>
          <input
            type="date"
            value={callDate}
            onChange={(e) => setCallDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              setShowMentorCall(false);
              setIsEditing(false);
              setEditingId(null);
            }}
            className="px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            {isEditing ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorCallModal;