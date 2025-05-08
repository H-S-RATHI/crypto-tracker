import { store } from "./store"
import { updatePrices } from "./features/crypto-slice"

class WebSocketSimulator {
  private interval: NodeJS.Timeout | null = null

  connect() {
    if (this.interval) return

    this.interval = setInterval(() => {
      const assets = store.getState().crypto.assets

      // Randomly select an asset to update
      const randomAssetIndex = Math.floor(Math.random() * assets.length)
      const asset = assets[randomAssetIndex]

      // Generate random price change (-2% to +2%)
      const priceChangePercent = (Math.random() * 4 - 2) / 100
      const newPrice = asset.price * (1 + priceChangePercent)

      // Update price changes
      const priceChange1h = asset.priceChange1h + (Math.random() * 0.4 - 0.2)
      const priceChange24h = asset.priceChange24h + (Math.random() * 0.6 - 0.3)
      
      // Update chart data
      const newChartData = [...asset.chartData.slice(1), newPrice]
      
      // Calculate 7d price change based on the actual chart data
      // First element is now the price from 6 days ago, last element is current price
      const oldestPrice = newChartData[0]
      const priceChange7d = ((newPrice - oldestPrice) / oldestPrice) * 100

      // Update volume (±5%)
      const volumeChange = (Math.random() * 10 - 5) / 100
      const newVolume = asset.volume24h * (1 + volumeChange)

      // Dispatch update action
      store.dispatch(
        updatePrices({
          id: asset.id,
          updates: {
            price: Number.parseFloat(newPrice.toFixed(2)),
            priceChange1h: Number.parseFloat(priceChange1h.toFixed(2)),
            priceChange24h: Number.parseFloat(priceChange24h.toFixed(2)),
            priceChange7d: Number.parseFloat(priceChange7d.toFixed(2)),
            volume24h: Math.round(newVolume),
            chartData: newChartData,
          },
        }),
      )
    }, 1500) // Update every 1.5 seconds
  }

  disconnect() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  }
}

export const webSocketSimulator = new WebSocketSimulator()
