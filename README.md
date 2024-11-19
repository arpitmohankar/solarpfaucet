 # Solana Airdrop Website

A simple Next.js application to perform Solana airdrops on the devnet. This project uses the Solana Web3 SDK to request airdrops and Material-UI for the frontend design.

## Features

- Request Solana airdrops to a specified wallet address.
- Handle rate limiting with exponential backoff.
- Simple and clean user interface using Material-UI.

## Author

- **Arpit Mohankar**

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/solana-airdrop.git
   cd solana-airdrop
Install dependencies:


npm install
Running the Project
Start the development server:


npm run dev
Open your browser and navigate to:


http://localhost:3000
Usage
Enter the Wallet Address:

Input the Solana wallet address where you want to receive the airdrop.
Enter the Amount:

Specify the amount of SOL you want to airdrop. The amount must be a positive integer.
Click the Airdrop Button:

Submit the form to request the airdrop. The application will handle rate limiting and retry the request if necessary.
Project Structure

solana-airdrop/
├── components/
│   ├── AirdropForm.js
│   ├── Header.js
│   └── Footer.js
├── pages/
│   ├── _app.js
│   ├── index.js
│   └── api/
│       └── airdrop.js
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── public/
│   └── favicon.ico
├── .gitignore
├── package.json
├── README.md
└── next.config.js
Dependencies
Next.js: For the React framework.
@solana/web3.js: Solana Web3 SDK.
@mui/material: Material-UI for the frontend.
axios: For making HTTP requests.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thanks to the Solana Foundation for providing the Web3 SDK.
Thanks to the Material-UI team for the awesome UI components.