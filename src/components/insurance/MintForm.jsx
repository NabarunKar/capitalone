import React, { useState } from 'react';
import { useWallet } from '../../hooks/useWallet';

function MintForm() {
  const { connectWallet, walletAddress } = useWallet();
  const [policyHolderName, setPolicyHolderName] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [premiumAmount, setPremiumAmount] = useState('');
  const [mintingStatus, setMintingStatus] = useState('');

  const handleMint = async (e) => {
    e.preventDefault();
    setMintingStatus('Minting in progress...');

    try {
      // Replace with your minting logic here
      const response = await mintInsuranceNFT({
        walletAddress,
        policyHolderName,
        policyNumber,
        premiumAmount,
      });
      setMintingStatus(`Minted successfully! Transaction ID: ${response.txId}`);
    } catch (error) {
      setMintingStatus(`Minting failed: ${error.message}`);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Mint Insurance NFT</h2>
      
      {!walletAddress ? (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Connect Wallet
        </button>
      ) : (
        <form onSubmit={handleMint} className="space-y-4">
          <div>
            <label className="block text-gray-700">Policy Holder Name</label>
            <input
              type="text"
              value={policyHolderName}
              onChange={(e) => setPolicyHolderName(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Policy Number</label>
            <input
              type="text"
              value={policyNumber}
              onChange={(e) => setPolicyNumber(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Premium Amount</label>
            <input
              type="number"
              value={premiumAmount}
              onChange={(e) => setPremiumAmount(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
            disabled={!walletAddress}
          >
            Mint NFT
          </button>
        </form>
      )}

      {mintingStatus && (
        <p className="mt-4 text-sm text-gray-600">{mintingStatus}</p>
      )}
    </div>
  );
}

export default MintForm;
