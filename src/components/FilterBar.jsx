import React from 'react';
import { useCompanyContext } from '../context/CompanyContext';

const FilterBar = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedIndustry,
    setSelectedIndustry,
    sortBy,
    setSortBy,
    industryOptions,
    totalResults,
  } = useCompanyContext();

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
         Company Matches Found
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        {}
        <input
          type="text"
          placeholder="Search by Company Name or Location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        />

        {}
        <select
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg md:w-48 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="All">All Industries</option>
          {industryOptions.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>

        {}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg md:w-48 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="name-asc">Sort: Name (A-Z)</option>
          <option value="name-desc">Sort: Name (Z-A)</option>
          <option value="employees-desc">Employees (High to Low)</option>
          <option value="founded-asc">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;