"use client"

import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectAllAssets } from "@/lib/features/crypto-slice"
import { webSocketSimulator } from "@/lib/websocket-simulator"
import CryptoTable from "./crypto-table"

export default function CryptoTracker() {
  const assets = useSelector(selectAllAssets)

  useEffect(() => {
    // Connect to simulated WebSocket on component mount
    webSocketSimulator.connect()

    // Disconnect when component unmounts
    return () => {
      webSocketSimulator.disconnect()
    }
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <CryptoTable assets={assets} />
    </div>
  )
}
