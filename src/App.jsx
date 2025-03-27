import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const CountriesPromise = fetch("https://restcountries.com/v3.1/all").then(
  (res) => res.json()
);

function App() {
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <Countries CountriesPromise={CountriesPromise}></Countries>
      </Suspense>
    </>
  );
}

const LoadingScreen = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50">
    <div className="relative w-24 h-24 mb-6">
      <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
      <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      <div className="absolute inset-4 rounded-full border-4 border-blue-700 border-b-transparent animate-spin animation-delay-150"></div>
      <svg
        className="absolute w-12 h-12 text-blue-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-700 mb-2">
      Loading World Data
    </h3>
    <p className="text-gray-500 max-w-md text-center">
      Gathering country information from around the globe...
    </p>
    <div className="w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden mt-6">
      <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse-loading"></div>
    </div>
  </div>
);

export default App;
