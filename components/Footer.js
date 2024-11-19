// Footer.js
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box mt={5}>
      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} Solana Airdrop By Arpit. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
