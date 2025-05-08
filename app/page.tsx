import CryptoTracker from "@/components/crypto-tracker"
import { Providers } from "@/components/providers"

export default function Home() {
  return (
    <Providers>
      <main className="min-h-screen p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6">Crypto Price Tracker</h1>
        <CryptoTracker />
      </main>
    </Providers>
  )
}
