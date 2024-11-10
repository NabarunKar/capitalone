import React from 'react';
import { useWallet } from '../../hooks/useWallet';

const WalletConnect = () => {
  const { walletAddress, connectWallet, disconnectWallet } = useWallet();

  return (
    <div>
      {walletAddress ? (
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium">
            Connected: {`${walletAddress.substring(0, 6)}...${walletAddress.slice(-4)}`}
          </span>
          <button
            onClick={disconnectWallet}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
