# Crypto Price Tracker

A real-time cryptocurrency price tracking application built with Next.js, Redux, and Tailwind CSS. This application displays live cryptocurrency data with price updates, charts, and market information.

![Crypto Price Tracker](https://via.placeholder.com/800x400?text=Crypto+Price+Tracker)

## Features

- **Real-time Price Updates**: Simulated WebSocket connection for live price changes
- **Interactive Data Table**: Comprehensive view of cryptocurrency market data
- **Price Charts**: Visual representation of price trends over time
- **Responsive Design**: Works on desktop and mobile devices
- **Redux State Management**: Centralized state management for cryptocurrency data

## Technologies Used

- **Next.js 15**: React framework for server-rendered applications
- **TypeScript**: Type-safe JavaScript
- **Redux Toolkit**: State management
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Composable charting library
- **Radix UI**: Accessible UI components

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/H-S-RATHI/crypto-tracker.git
   cd crypto-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
crypto-tracker/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── components/           # React components
│   ├── crypto-table.tsx  # Cryptocurrency data table
│   ├── crypto-tracker.tsx # Main tracker component
│   ├── price-chart.tsx   # Price chart component
│   ├── providers.tsx     # Redux provider
│   └── ui/               # UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and Redux store
│   ├── features/         # Redux slices
│   │   └── crypto-slice.ts # Cryptocurrency state slice
│   ├── store.ts          # Redux store configuration
│   ├── utils.ts          # Utility functions
│   └── websocket-simulator.ts # Simulated WebSocket for price updates
├── public/               # Static assets
└── styles/               # Additional styles
```

## How It Works

The application uses a simulated WebSocket connection to update cryptocurrency prices in real-time. The data flow works as follows:

1. Initial cryptocurrency data is loaded from the Redux store
2. The WebSocket simulator connects when the main component mounts
3. Price updates are dispatched to the Redux store every 1.5 seconds
4. The UI components react to state changes and update accordingly

## Available Scripts

- `npm run dev` - Run the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Future Enhancements

- Add authentication for personalized watchlists
- Implement real API integration with CoinGecko or similar services
- Add detailed view for individual cryptocurrencies
- Implement portfolio tracking functionality
- Add dark/light theme toggle

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by popular cryptocurrency tracking websites
- Sample data structure based on common cryptocurrency APIs