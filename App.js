
import React from 'react';
import { sendUSDT } from './sendUSDT';

function App() {
  const handleSend = async () => {
    const fromAddress = "YOUR_ADDRESS";
    const toAddress = "DESTINATION_ADDRESS";
    const amount = 5;
    const privateKey = "YOUR_PRIVATE_KEY";

    try {
      const txHash = await sendUSDT(fromAddress, toAddress, amount, privateKey);
      alert(`USDT נשלח! מזהה עסקה: ${txHash}`);
    } catch (e) {
      alert("שליחה נכשלה. ראה קונסול.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🚀 USDT Flash Sender</h1>
      <button onClick={handleSend}>שלח USDT</button>
    </div>
  );
}

export default App;
