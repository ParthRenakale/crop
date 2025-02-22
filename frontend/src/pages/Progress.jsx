// import React, { useState, useEffect } from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const steps = [
  "Land Preparation",
  "Sowing/Planting",
  "Irrigation",
  "Fertilization",
  "Pest and Weed Control",
  "Harvesting",
  "Post-Harvest Handling",
];

function CropGrowthTracker() {
  const { cropId } = useParams();
  const [progress, setProgress] = useState(Array(steps.length).fill(false));
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // Load initial progress from backend
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:4000/crops/${cropId}/progress`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        if (response.data.data?.progress) {
          setProgress(response.data.data.progress);
        }
      } catch (error) {
        console.error("Error loading progress:", error);
        setMessage("Failed to load progress data");
      } finally {
        setLoading(false);
      }
    };

    if (cropId) fetchProgress();
  }, [cropId]);

  const handleCheckboxChange = (index) => {
    const newProgress = [...progress];
    newProgress[index] = !newProgress[index];
    setProgress(newProgress);
  };

  const saveProgress = async () => {
    setSaving(true);
    setMessage("");
    
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("User not authenticated");
      if (!cropId) throw new Error("No crop selected");

      await axios.put(
        `http://localhost:4000/crops/${cropId}/progress`,
        { progress },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      setMessage("Progress saved successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error saving progress:", error);
      const errorMessage = error.response?.data?.errors?.[0] || 
                         error.response?.data?.message || 
                         error.message || 
                         "Error saving progress";
      setMessage(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center p-6">Loading progress...</div>;
  }

  return (
    <div className="max-w-screen-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Crop Growth Tracker</h1>
      <ul className="space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={progress[index]}
              onChange={() => handleCheckboxChange(index)}
              className="mr-4 w-5 h-5"
              disabled={saving}
            />
            <span
              className={`text-lg ${
                progress[index]
                  ? "line-through text-green-600"
                  : "text-gray-800"
              }`}
            >
              {step}
            </span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={saveProgress}
          disabled={saving}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 transition"
        >
          {saving ? "Saving..." : "Save Progress"}
        </button>
        
        {message && (
          <div className={`px-4 py-2 rounded ${
            message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default CropGrowthTracker;