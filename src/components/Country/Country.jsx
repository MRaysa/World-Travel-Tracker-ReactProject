import React from "react";

const Country = ({
  country,
  handleVisitedCountries,
  handleVisitedFlag,
  isVisited,
}) => {
  const handleVisited = () => {
    handleVisitedCountries(country, !isVisited);
  };

  return (
    <div
      className={`relative rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden ${
        isVisited
          ? "bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-200"
          : "bg-white border-gray-100"
      } border-2`}
    >
      {isVisited && (
        <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          VISITED
        </div>
      )}

      <div className="mb-4 overflow-hidden rounded-lg shadow-md border border-gray-100">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="w-full h-40 object-cover"
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-800 flex items-center">
          {country.name.common}
          {isVisited && (
            <span className="ml-2 bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-0.5 rounded">
              ✓ Visited
            </span>
          )}
        </h3>

        {/* Map Links Section */}
        {country.maps && (
          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              View on Map:
            </h4>
            <div className="flex flex-wrap gap-2">
              {country.maps.googleMaps && (
                <a
                  href={country.maps.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-md text-sm flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.1 0 5 3.1 5 7c0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.4 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 0-3.9-3.1-7-7-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 5c0 1.9-.7 3.7-2.1 5-.1.1-4.1 3.7-4.2 3.8-.4.3-1 .3-1.4 0-.1-.1-4.2-3.7-4.2-3.8-1.4-1.3-2.1-3.1-2.1-5 0-1 .2-2 .6-2.9-.4 0-.8-.1-1.2-.1-3.9 0-7 3.1-7 7 0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.4 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 0-.4 0-.8-.1-1.2.9.4 1.9.6 2.9.6 3.9 0 7-3.1 7-7 0-.4 0-.8-.1-1.2.9.4 1.9.6 2.9.6 3.9 0 7-3.1 7-7z" />
                  </svg>
                  Google Maps
                </a>
              )}
              {country.maps.openStreetMaps && (
                <a
                  href={country.maps.openStreetMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-green-50 text-green-600 hover:bg-green-100 rounded-md text-sm flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" />
                  </svg>
                  OpenStreetMap
                </a>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
          <svg
            className="w-5 h-5 mr-2 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <span className="font-medium">
            Population:{" "}
            <span className="text-blue-600">
              {country.population.toLocaleString()}
            </span>
          </span>
        </div>

        <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
          <svg
            className="w-5 h-5 mr-2 text-amber-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span className="font-medium">
            Status:{" "}
            <span
              className={
                country.independent ? "text-green-600" : "text-rose-600"
              }
            >
              {country.independent ? "Independent" : "Dependent"}
            </span>
          </span>
        </div>

        <div className="flex space-x-3 pt-2">
          <button
            onClick={handleVisited}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex-1 flex items-center justify-center ${
              isVisited
                ? "bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 border border-emerald-200 hover:from-emerald-200 hover:to-blue-200"
                : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
            }`}
          >
            {isVisited ? (
              <>
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Visited
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Mark Visited
              </>
            )}
          </button>

          {isVisited && (
            <button
              onClick={() => handleVisitedFlag(country.flags.png)}
              className="px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 border border-amber-200 hover:from-amber-200 hover:to-amber-100 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Flag
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Country;
