import "./App.css";
import Navbar from "./components/sections/Navbar";
import { Search } from "lucide-react";

export default function App() {
  return (
    <>
      <div className="bg-dark-theme min-h-screen flex flex-col items-center gap-5 lg:gap-12">
        <Navbar />
        
        {/* Filters */}
        <div className="filters flex flex-col w-full px-4 gap-10
        // Desktop
        lg:px-18 lg:flex-row lg:justify-between">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white lg:left-8"
              size={20}
            />

            <input
              type="search"
              placeholder="Search for a country..."
              className="bg-dark-secondary text-dark-text h-12 rounded-md w-full pl-10 pr-4 outline-none
              lg:w-120 lg:text-sm lg:pl-18"
            />
          </div>

          <select
            className="flex bg-dark-secondary text-dark-text h-12 w-3/5 rounded-md px-6
            lg:w-48 "
            id="select-regions"
          >
            <option value="Filter by Region">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div> 

        {/* List of countries */}
        <ul className="h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full place-items-center py-4 overflow-y-auto gap-8
        lg:px-10 lg:gap-x-2 lg:gap-y-20"></ul> 
      </div>
    </>
  )
}
