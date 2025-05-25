"use client";
import React, { useState } from "react";
import MentorCallModal from "./MentorCallModal";
import { FiEdit, FiTrash } from "react-icons/fi";

const MentorCallsTab = () => {
  const [mentorCalls, setMentorCalls] = useState<
    { id: number; dueDate: string; description: string }[]
  >([]);
  const [showMentorCall, setShowMentorCall] = useState(false);
  const [mentorDescription, setMentorDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleEdit = (call: { id: number; dueDate: string; description: string }) => {
    setMentorDescription(call.description);
    setDueDate(call.dueDate);
    setIsEditing(true);
    setEditingId(call.id);
    setShowMentorCall(true);
  };

  const handleDelete = (id: number) => {
      setMentorCalls((prev) => prev.filter((call) => call.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mentor Calls</h2>

      {/* Add Note Button */}
      <button
        onClick={() => {
          setShowMentorCall(true);
          setIsEditing(false);
          setMentorDescription("");
          setDueDate("");
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-700"
      >
        + Add Mentor Call Note
      </button>

      {/* Display Mentor Calls */}
      {mentorCalls.length === 0 ? (
        <p className="text-gray-500">No mentor call notes added yet.</p>
      ) : (
        <ul className="space-y-3 max-w-sm">
          {mentorCalls.map((call) => (
            <li
              key={call.id}
              className="border p-3 rounded-md bg-gray-50 shadow-sm flex justify-between items-start"
            >
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Date:</strong> {call.dueDate}
                </p>
                <p>{call.description}</p>
              </div>
              <div className="flex gap-2">
                <FiEdit
                  className="cursor-pointer text-blue-600 hover:text-blue-800"
                  onClick={() => handleEdit(call)}
                />
                <FiTrash
                  className="cursor-pointer text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(call.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Modal */}
      {showMentorCall && (
        <MentorCallModal
          setShowMentorCall={setShowMentorCall}
          mentorDescription={mentorDescription}
          setMentorDescription={setMentorDescription}
          setMentorCalls={setMentorCalls}
          dueDate={dueDate}
          setDueDate={setDueDate}
          isEditing={isEditing}
          editingId={editingId}
          setIsEditing={setIsEditing}
          setEditingId={setEditingId}
        />
      )}
    </div>
  );
};

export default MentorCallsTab;
