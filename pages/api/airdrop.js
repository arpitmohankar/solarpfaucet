import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const requestAirdropWithRetry = async (connection, walletKey, amount) => {
  let retries = 0;
  const maxRetries = 5;
  const backoff = [500, 1000, 2000, 4000, 8000];

  while (retries < maxRetries) {
    try {
      const airdropSignature = await connection.requestAirdrop(walletKey, amount * LAMPORTS_PER_SOL);
      await connection.confirmTransaction(airdropSignature);
      return airdropSignature;
    } catch (error) {
      if (error.message.includes('429')) {
        retries++;
        if (retries < maxRetries) {
          await sleep(backoff[retries - 1]);
        } else {
          throw new Error('Max retries reached');
        }
      } else {
        throw error;
      }
    }
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { walletAddress, amount } = req.body;

      if (!walletAddress || !amount) {
        return res.status(400).json({ message: 'Wallet address and amount are required' });
      }

      // Ensure amount is an integer
      const parsedAmount = parseInt(amount, 10);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        return res.status(400).json({ message: 'Amount must be a positive integer' });
      }

      const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
      const walletKey = new PublicKey(walletAddress);

      await requestAirdropWithRetry(connection, walletKey, parsedAmount);

      return res.status(200).json({ message: 'Airdrop successful' });
    } catch (error) {
      return res.status(500).json({ message: 'Airdrop failed', error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
