import React from 'react';
import CompanyCard from './CompanyCard';
import Pagination from './Pagination';
import { useCompanyContext } from '../context/CompanyContext';

const CompanyList = () => {
  const { paginatedCompanies, totalResults, COMPANIES_PER_PAGE } = useCompanyContext();
  const isLoading = false;

  if (isLoading) {
    return (
      <div className="text-center py-10 text-gray-500">Loading companies...</div>
    );
  }

  if (totalResults === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-xl shadow-md p-6">
        <p className="text-lg font-medium text-gray-700">
          No companies match your current filter and search criteria.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
      
      {}
      {totalResults > COMPANIES_PER_PAGE && <Pagination />}
    </>
  );
};

export default CompanyList;