import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"

export interface CryptoAsset {
  id: string
  rank: number
  logo: string
  name: string
  symbol: string
  price: number
  priceChange1h: number
  priceChange24h: number
  priceChange7d: number
  marketCap: number
  volume24h: number
  circulatingSupply: number
  maxSupply: number | null
  chartData: number[]
}

interface CryptoState {
  assets: CryptoAsset[]
  loading: boolean
  error: string | null
}

// Initial sample data
const initialState: CryptoState = {
  assets: [
    {
      id: "bitcoin",
      rank: 1,
      logo: "/placeholder.svg?height=32&width=32",
      name: "Bitcoin",
      symbol: "BTC",
      price: 65432.1,
      priceChange1h: 0.5,
      priceChange24h: 2.3,
      priceChange7d: -51.2,
      marketCap: 1258000000000,
      volume24h: 28500000000,
      circulatingSupply: 19200000,
      maxSupply: 21000000,
      chartData: [64000, 65200, 64800, 65500, 66000, 65700, 65432],
    },
    {
      id: "ethereum",
      rank: 2,
      logo: "/placeholder.svg?height=32&width=32",
      name: "Ethereum",
      symbol: "ETH",
      price: 3521.45,
      priceChange1h: -0.2,
      priceChange24h: 1.5,
      priceChange7d: 3.8,
      marketCap: 422000000000,
      volume24h: 15700000000,
      circulatingSupply: 120000000,
      maxSupply: null,
      chartData: [3400, 3450, 3500, 3480, 3520, 3510, 3521],
    },
    {
      id: "tether",
      rank: 3,
      logo: "/placeholder.svg?height=32&width=32",
      name: "Tether",
      symbol: "USDT",
      price: 1.0,
      priceChange1h: 0.01,
      priceChange24h: -0.02,
      priceChange7d: 0.03,
      marketCap: 95000000000,
      volume24h: 52000000000,
      circulatingSupply: 95000000000,
      maxSupply: null,
      chartData: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    },
    {
      id: "bnb",
      rank: 4,
      logo: "/placeholder.svg?height=32&width=32",
      name: "BNB",
      symbol: "BNB",
      price: 608.25,
      priceChange1h: 0.8,
      priceChange24h: -1.2,
      priceChange7d: 2.5,
      marketCap: 93000000000,
      volume24h: 1800000000,
      circulatingSupply: 153000000,
      maxSupply: 200000000,
      chartData: [590, 600, 610, 605, 595, 600, 608],
    },
    {
      id: "solana",
      rank: 5,
      logo: "/placeholder.svg?height=32&width=32",
      name: "Solana",
      symbol: "SOL",
      price: 142.78,
      priceChange1h: 1.2,
      priceChange24h: 5.8,
      priceChange7d: -3.2,
      marketCap: 61000000000,
      volume24h: 2500000000,
      circulatingSupply: 427000000,
      maxSupply: null,
      chartData: [135, 140, 145, 143, 138, 140, 143],
    },
  ],
  loading: false,
  error: null,
}

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updatePrices: (state, action: PayloadAction<{ id: string; updates: Partial<CryptoAsset> }>) => {
      const { id, updates } = action.payload
      const assetIndex = state.assets.findIndex((asset) => asset.id === id)
      if (assetIndex !== -1) {
        state.assets[assetIndex] = { ...state.assets[assetIndex], ...updates }
      }
    },
    updateAllAssets: (state, action: PayloadAction<CryptoAsset[]>) => {
      state.assets = action.payload
    },
  },
})

// Selectors
export const selectAllAssets = (state: RootState) => state.crypto.assets
export const selectAssetById = (state: RootState, id: string) => state.crypto.assets.find((asset) => asset.id === id)

export const { updatePrices, updateAllAssets } = cryptoSlice.actions
export default cryptoSlice.reducer
