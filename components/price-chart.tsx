"use client"

import { LineChart, Line, ResponsiveContainer } from "recharts"

interface PriceChartProps {
  data: number[]
  isPositive: boolean
}

export default function PriceChart({ data, isPositive }: PriceChartProps) {
  // Convert data to format required by Recharts
  const chartData = data.map((value, index) => ({ value }))

  return (
    <ResponsiveContainer width="100%" height={40}>
      <LineChart data={chartData}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={isPositive ? "#10b981" : "#ef4444"}
          strokeWidth={1.5}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
