"use client";
import React from "react";

const SearchComponent = () => {
  async function intializeSearch(countr: string) {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/covid19?country=${countr}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "yUrTF8zJH1UhAZGA2173Vw==d5zbkfZaOvmfAYjF",
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data;
    } else {
      console.log("Error:", res.status);
      return null;
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative overflow-x-auto">
        <div className="p-4 flex">
          <label className="sr-only">Search</label>
          <div className="flex justify-center items-center gap-4">
            <div className="relative mt-1">
              <input
                type="text"
                id="searchCountry"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Country"
              />
            </div>
            <button
              onClick={() =>
                intializeSearch(
                  (document.getElementById("searchCountry") as HTMLInputElement)
                    .value
                )
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
