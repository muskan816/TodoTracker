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
  const [editingId, setEditingId] = useState<number | null>(null);

  // Edit handler
  const handleEdit = (call: { id: number; dueDate: string; description: string }) => {
    setEditingId(call.id);
    setMentorDescription(call.description);
    setDueDate(call.dueDate);
    setShowMentorCall(true);
  };

  // Save handler for modal (edit or add)
  const handleSave = (desc: string, date: string) => {
    if (editingId !== null) {
      setMentorCalls((prev) =>
        prev.map((call) =>
          call.id === editingId ? { ...call, description: desc, dueDate: date } : call
        )
      );
    } else {
      setMentorCalls((prev) => [
        ...prev,
        { id: Date.now(), dueDate: date, description: desc },
      ]);
    }
    setEditingId(null);
    setMentorDescription("");
    setDueDate("");
    setShowMentorCall(false);
  };

  // Delete handler
  const handleDelete = (id: number) => {
    setMentorCalls((prev) => prev.filter((call) => call.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mentor Calls</h2>

      {/* Add Note Button */}
      <button
        onClick={() => {
          setEditingId(null);
          setMentorDescription("");
          setDueDate("");
          setShowMentorCall(true);
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-700"
      >
        + Add Mentor Call Note
      </button>

      {/* Display Mentor Calls */}
      {mentorCalls.length === 0 ? (
        <p className="text-gray-500">No mentor call notes added yet.</p>
      ) : (
        <ul className="space-y-3">
          {mentorCalls.map((call) => (
            <li
              key={call.id}
              className="border p-3 rounded-md bg-gray-50 shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Date:</strong> {call.dueDate}
                </p>
                <p>{call.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(call)}
                  className="p-2 rounded hover:bg-gray-200"
                  title="Edit"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => handleDelete(call.id)}
                  className="p-2 rounded hover:bg-gray-200 text-red-600"
                  title="Delete"
                >
                  <FiTrash />
                </button>
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
          setMentorCalls={() => {
            // Save logic for modal
            handleSave(mentorDescription, dueDate);
          }}
          dueDate={dueDate}
          setDueDate={setDueDate}
          isEditing={editingId !== null}
          editingId={editingId}
          setIsEditing={(val) => {
            if (!val) setEditingId(null);
          }}
          setEditingId={setEditingId}
          calls={mentorCalls}
        />
      )}
    </div>
  );
};

export default MentorCallsTab;