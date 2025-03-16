import React, { useState } from "react";
import { claimCoins } from "../components/services";

const ClaimCoins = () => {
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");

  const handleClaimCoins = async () => {
    try {
      const data = await claimCoins(pin);
      setMessage(`Coins claimed successfully: ${data.coins}`);
    } catch {
      setMessage("Failed to claim coins. Please try again.");
    }
  };

  return (
    <div>
      <h1>Claim Coins</h1>
      <input
        type="text"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="Enter PIN"
      />
      <button onClick={handleClaimCoins}>Claim Coins</button>
      <p>{message}</p>
    </div>
  );
};

export default ClaimCoins;
