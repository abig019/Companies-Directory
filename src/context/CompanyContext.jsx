import React, { createContext, useState, useMemo, useContext } from 'react';
import allCompanies from '../data/companies.json';

const CompanyContext = createContext();

const COMPANIES_PER_PAGE = 5;

export const CompanyProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [sortBy, setSortBy] = useState('name-asc');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCompanies = useMemo(() => {
    let list = allCompanies.filter(company => {
      const nameMatch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
      const industryMatch = selectedIndustry === 'All' || company.industry === selectedIndustry;
      return nameMatch && industryMatch;
    });

    list.sort((a, b) => {
      const [field, direction] = sortBy.split('-');
      const valueA = a[field].toString().toLowerCase();
      const valueB = b[field].toString().toLowerCase();

      if (valueA < valueB) return direction === 'asc' ? -1 : 1;
      if (valueA > valueB) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    return list;
  }, [searchTerm, selectedIndustry, sortBy]);

  const totalPages = Math.ceil(filteredCompanies.length / COMPANIES_PER_PAGE);
  const paginatedCompanies = useMemo(() => {
    const start = (currentPage - 1) * COMPANIES_PER_PAGE;
    const end = start + COMPANIES_PER_PAGE;
    return filteredCompanies.slice(start, end);
  }, [filteredCompanies, currentPage]);

  const industryOptions = useMemo(() => [
    'All',
    ...new Set(allCompanies.map(c => c.industry)),
  ], []);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedIndustry, sortBy]);

  const value = {
    paginatedCompanies,
    totalPages,
    currentPage,
    setCurrentPage,
    searchTerm,
    setSearchTerm,
    selectedIndustry,
    setSelectedIndustry,
    sortBy,
    setSortBy,
    industryOptions,
    totalResults: filteredCompanies.length,
    COMPANIES_PER_PAGE
  };

  return (
    <CompanyContext.Provider value={value}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyContext = () => useContext(CompanyContext);