"use client";
import React, { useState } from "react";

const SearchComponent = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(false);

  const intializeSearch = async (country: string) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.api-ninjas.com/v1/covid19?country=${country}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "yUrTF8zJH1UhAZGA2173Vw==d5zbkfZaOvmfAYjF",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      // Access the data outside the function
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    setData([]);
  }, []);

  const handleSearch = () => {
    const country = (
      document.getElementById("searchCountry") as HTMLInputElement
    ).value;
    intializeSearch(country);
  };

  React.useEffect(() => {
    const input = document.getElementById("searchCountry") as HTMLInputElement;
    const listener = (event: KeyboardEvent) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleSearch();
      }
    };
    input.addEventListener("keydown", listener);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      input.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <>
      <div className="mx-auto">
        <div className="relative overflow-x-auto">
          <div className="max-w-2xl mx-auto  p-4 flex">
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
                type="submit"
                onClick={() =>
                  intializeSearch(
                    (
                      document.getElementById(
                        "searchCountry"
                      ) as HTMLInputElement
                    ).value
                  )
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Search
              </button>
            </div>
          </div>
          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Country
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Region
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={2}>Loading...</td>
                    </tr>
                  ) : Array.isArray(data) ? (
                    data.map((item, index) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        key={index}
                      >
                        <td className="px-6 py-4">{item.country}</td>
                        <td className="px-6 py-4">{item.region}</td>
                      </tr>
                    ))
                  ) : (
                    <p>Error: No data available</p>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
