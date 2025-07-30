
import TronWeb from 'tronweb';

export const sendUSDT = async (fromAddress, toAddress, amount, privateKey) => {
  try {
    const tronWeb = new TronWeb({
      fullHost: 'https://api.trongrid.io',
      headers: { "TRON-PRO-API-KEY": "YOUR_API_KEY" },
      privateKey: privateKey,
    });

    const contractAddress = 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb';
    const contract = await tronWeb.contract().at(contractAddress);

    const amountInSun = tronWeb.toBigNumber(amount * 1_000_000);

    const tx = await contract.methods
      .transfer(toAddress, amountInSun)
      .send({ feeLimit: 100_000_000 });

    console.log('העסקה נשלחה בהצלחה:', tx);
    return tx;

  } catch (error) {
    console.error('שגיאה בשליחה:', error);
    throw error;
  }
};
