import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const AirdropForm = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleAirdrop = async () => {
    try {
      const response = await axios.post('/api/airdrop', { walletAddress, amount });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error: ' + error.response.data.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Solana Airdrop(per request per hour limit)
      </Typography>
      <select id="demo-simple-select">
        <option>Devnet confirmed</option>
      </select>
      <TextField
        label="Wallet Address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Amount SOL"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        margin="normal"
        type="number"
        inputProps={{ min: "1", step: "1" }}
      />
      <Button variant="contained" color="primary" onClick={handleAirdrop} fullWidth>
        Airdrop
      </Button>
      {message && <Typography variant="body1">{message}</Typography>}
    </Container>
  );
};

export default AirdropForm;
