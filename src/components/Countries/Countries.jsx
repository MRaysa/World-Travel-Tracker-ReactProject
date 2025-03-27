import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ CountriesPromise }) => {
  const [visitedFlags, setVisitedFlags] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const countries = use(CountriesPromise);

  const handleVisitedFlag = (flag) => {
    if (!visitedFlags.includes(flag)) {
      setVisitedFlags([...visitedFlags, flag]);
    }
  };

  const handleVisitedCountries = (country, isVisited) => {
    if (isVisited) {
      if (!visitedCountries.some((c) => c.cca3 === country.cca3)) {
        setVisitedCountries([...visitedCountries, country]);
      }
    } else {
      setVisitedCountries(
        visitedCountries.filter((c) => c.cca3 !== country.cca3)
      );
      setVisitedFlags(
        visitedFlags.filter((flag) => flag !== country.flags.png)
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              World Travel Tracker
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your global adventures and build your personal flag collection
          </p>
        </header>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Your Travel Dashboard
              </h2>
              <div className="flex flex-wrap gap-8">
                <div className="bg-blue-50 p-4 rounded-xl min-w-[160px]">
                  <p className="text-sm font-medium text-blue-600 mb-1">
                    Total Countries
                  </p>
                  <p className="text-3xl font-bold text-blue-700">
                    {countries.length}
                  </p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl min-w-[160px]">
                  <p className="text-sm font-medium text-emerald-600 mb-1">
                    Visited
                  </p>
                  <p className="text-3xl font-bold text-emerald-700">
                    {visitedCountries.length}
                  </p>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl min-w-[160px]">
                  <p className="text-sm font-medium text-amber-600 mb-1">
                    Completion
                  </p>
                  <p className="text-3xl font-bold text-amber-700">
                    {Math.round(
                      (visitedCountries.length / countries.length) * 100
                    )}
                    %
                  </p>
                </div>
              </div>
            </div>

            {visitedFlags.length > 0 && (
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100">
                <h3 className="text-sm font-medium text-purple-700 mb-3">
                  Your Flag Collection
                </h3>
                <div className="flex flex-wrap gap-2 max-w-xs">
                  {visitedFlags.map((flag, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={flag}
                        alt="Visited country flag"
                        className="w-10 h-6 object-cover border border-gray-200 rounded shadow-sm group-hover:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 rounded transition-all"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {visitedCountries.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">
                Your Visited Countries
              </h2>
              <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
                {visitedCountries.length} countries
              </span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {visitedCountries.map((country) => (
                <li
                  key={country.cca3}
                  className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={country.flags.png}
                    alt={`Flag of ${country.name.common}`}
                    className="w-8 h-5 mr-3 object-cover border border-gray-200 rounded shadow-sm"
                  />
                  <span className="font-medium text-gray-800">
                    {country.name.common}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              Explore Countries
            </h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {countries.length} countries worldwide
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {countries.map((country) => (
              <Country
                key={country.cca3}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlag={handleVisitedFlag}
                country={country}
                isVisited={visitedCountries.some(
                  (c) => c.cca3 === country.cca3
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
