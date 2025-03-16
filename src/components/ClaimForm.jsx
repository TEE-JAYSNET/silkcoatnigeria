import React, { useState } from "react";
import axios from "axios";

const ClaimForm = () => {
  const [pin, setPin] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/claim-coins/", {
        pin: pin,
      });
      setResponse(`Success! You have earned ${res.data.coins} coins.`);
      setError(""); // Clear error if any
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong.");
      setResponse(""); // Clear response if any
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Claim Coins</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="pin"
              className="block text-sm font-medium text-gray-700"
            >
              Enter PIN
            </label>
            <input
              type="text"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        {response && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
            {response}
          </div>
        )}
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-800 rounded">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimForm;
