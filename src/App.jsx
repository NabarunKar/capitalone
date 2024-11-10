import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// import InsuranceNFTMinter from './components/insurance/MintForm';
import { WalletProvider } from './hooks/useWallet';

function App() {
  return (
    <WalletProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="container mx-auto py-8 px-4 flex-grow">
          {/* <InsuranceNFTMinter /> */}
        </main>
        <Footer />
      </div>
    </WalletProvider>
  );
}

export default App;


