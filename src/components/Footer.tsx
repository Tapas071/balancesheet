import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4">
        <h3 className="text-xl font-bold animate-pulse">BalanceSheet</h3>
        <p className="text-sm">Your trusted partner for financial management.</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Tapas071/balancesheet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 animate-spin-slow"
          >
            <svg
              fill="currentColor"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.207 15.694c.39.39.909.39 1.293 0l10-10c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L10 14.28 2.793 6.973c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L8.793 15.694c.39.39.909.39 1.293 0z" />
            </svg>
          </a>
        </div>
        <div className="mt-4 text-center text-gray-300">
          <p className="text-sm">
            <span className="animate-pulse">Built with 💖 by Tapas Mondal</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
