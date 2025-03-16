import axios from "axios";

// export const claimCoins = async (pinCode) => {
  // try {
  //   const response = await fetch("http://127.0.0.1:8000/api/claim-coins/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ pin: pinCode }),
  //   });

  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }

  //   return await response.json();
  // } catch (error) {
  //   console.error("Error claiming coins:", error);
  //   throw error;
  // }

  const claimCoins = async (pin) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/claim-coins/",
        {
          pin: pin,
        }
      );
      console.log("Coins Claimed:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  // Example usage
  claimCoins("12345");
};
