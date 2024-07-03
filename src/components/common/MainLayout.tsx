import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="min-h-screen py-6 flex flex-col sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="relative px-4 bg-white sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default MainLayout;