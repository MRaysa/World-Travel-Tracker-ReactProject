import { Suspense } from "react";
import WorldMapTracker from "./components/WorldMapTracker";

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading world map...</p>
          </div>
        </div>
      }
    >
      <WorldMapTracker />
    </Suspense>
  );
}
