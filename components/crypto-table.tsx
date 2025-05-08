"use client"

import Image from "next/image"
import type { CryptoAsset } from "@/lib/features/crypto-slice"
import PriceChart from "./price-chart"

interface CryptoTableProps {
  assets: CryptoAsset[]
}

export default function CryptoTable({ assets }: CryptoTableProps) {
  // Format large numbers with commas
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num)
  }

  // Format currency
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: num < 1 ? 4 : 2,
      maximumFractionDigits: num < 1 ? 6 : 2,
    }).format(num)
  }

  // Format market cap and volume
  const formatLargeNumber = (num: number) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
    return `$${formatNumber(num)}`
  }

  // Get CSS class for price change
  const getPriceChangeClass = (change: number) => {
    return change >= 0 ? "text-green-500 font-medium" : "text-red-500 font-medium"
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">1h %</th>
            <th className="px-4 py-3">24h %</th>
            <th className="px-4 py-3">7d %</th>
            <th className="px-4 py-3">Market Cap</th>
            <th className="px-4 py-3">Volume (24h)</th>
            <th className="px-4 py-3">Circulating Supply</th>
            <th className="px-4 py-3">Max Supply</th>
            <th className="px-4 py-3">Last 7 Days</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {assets.map((asset) => (
            <tr key={asset.id} className="bg-white hover:bg-gray-50">
              <td className="px-4 py-4">{asset.rank}</td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={asset.logo || "/placeholder.svg"}
                    alt={asset.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">{asset.name}</div>
                    <div className="text-gray-500">{asset.symbol}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 font-medium">{formatCurrency(asset.price)}</td>
              <td className={`px-4 py-4 ${getPriceChangeClass(asset.priceChange1h)}`}>
                {asset.priceChange1h > 0 ? "+" : ""}
                {asset.priceChange1h.toFixed(2)}%
              </td>
              <td className={`px-4 py-4 ${getPriceChangeClass(asset.priceChange24h)}`}>
                {asset.priceChange24h > 0 ? "+" : ""}
                {asset.priceChange24h.toFixed(2)}%
              </td>
              <td className={`px-4 py-4 ${getPriceChangeClass(asset.priceChange7d)}`}>
                {asset.priceChange7d > 0 ? "+" : ""}
                {asset.priceChange7d.toFixed(2)}%
              </td>
              <td className="px-4 py-4">{formatLargeNumber(asset.marketCap)}</td>
              <td className="px-4 py-4">{formatLargeNumber(asset.volume24h)}</td>
              <td className="px-4 py-4">
                {formatNumber(asset.circulatingSupply)} {asset.symbol}
              </td>
              <td className="px-4 py-4">
                {asset.maxSupply ? `${formatNumber(asset.maxSupply)} ${asset.symbol}` : "∞"}
              </td>
              <td className="px-4 py-4 w-32">
                <PriceChart data={asset.chartData} isPositive={asset.priceChange7d >= 0} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
