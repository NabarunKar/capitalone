import React from 'react';
import { useWallet } from '../../hooks/useWallet';
// import WalletConnect from '../insurance/WalletConnect';

const Header = () => {
  const { account } = useWallet();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="/api/placeholder/32/32" 
            alt="Logo" 
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold text-gray-900">Insurance NFT Platform</h1>
        </div>
        {/* <WalletConnect /> */}
      </div>
    </header>
  );
};

export default Header;
