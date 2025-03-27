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
      className={`relative rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden
        ${
          isVisited
            ? "bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-200"
            : "bg-white border-gray-100"
        }
        border-2`}
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
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex-1 flex items-center justify-center
              ${
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
