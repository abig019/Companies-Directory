import React from 'react';
import FilterBar from './components/FilterBar';
import CompanyList from './components/CompanyList';
import { CompanyProvider } from './context/CompanyContext';
import Sidebar from './components/Sidebar'; 

function App() {
  const sidebarWidthClass = 'w-16';

  return (
    <CompanyProvider>
      {}
      <div className="flex min-h-screen bg-gray-50">
        
        {}
        <Sidebar />

        {}
        {}
        <div className={`flex-grow ${sidebarWidthClass} ml-16 p-4 sm:p-8`}>
          
          {}
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Company Directory
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              A comprehensive list of all organizations.
            </p>
          </header>

          {}
          <main className="max-w-7xl mx-auto">
            <FilterBar />
            <CompanyList />
          </main>

        </div>
      </div>
    </CompanyProvider>
  );
}

export default App;