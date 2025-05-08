"use client"

import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts"

interface PriceChartProps {
  data: number[]
  isPositive: boolean
}

export default function PriceChart({ data, isPositive }: PriceChartProps) {
  // Convert data to format required by Recharts
  const chartData = data.map((value, index) => ({ value }))
  
  // Find min and max values for proper scaling
  const minValue = Math.min(...data)
  const maxValue = Math.max(...data)
  
  // Add a small buffer to min/max for better visualization
  const buffer = (maxValue - minValue) * 0.1
  const domainMin = Math.max(0, minValue - buffer) // Ensure we don't go below 0 for prices
  const domainMax = maxValue + buffer
  
  // Calculate if the trend is actually positive based on the chart data
  // This ensures the color matches the actual trend shown in the chart
  const firstValue = data[0]
  const lastValue = data[data.length - 1]
  const actualTrend = lastValue >= firstValue

  return (
    <ResponsiveContainer width="100%" height={40}>
      <LineChart data={chartData}>
        <YAxis 
          domain={[domainMin, domainMax]} 
          hide={true} 
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={actualTrend ? "#10b981" : "#ef4444"}
          strokeWidth={1.5}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
