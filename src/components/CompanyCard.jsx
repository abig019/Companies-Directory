import React from 'react';

const CompanyCard = ({ company }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'On Hold':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 transition duration-300 hover:shadow-xl border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={company.logoUrl}
            alt={`${company.name} logo`}
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
            <p className="text-sm text-indigo-600">{company.industry}</p>
          </div>
        </div>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusClass(company.status)}`}
        >
          {company.status}
        </span>
      </div>

      <div className="mt-4 border-t border-gray-100 pt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="flex flex-col">
          <span className="font-medium text-gray-500">Location</span>
          <span className="text-gray-900">{company.location}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-gray-500">Employees</span>
          <span className="text-gray-900">{company.employees.toLocaleString()}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-gray-500">Founded</span>
          <span className="text-gray-900">{company.founded}</span>
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full text-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default CompanyCard;