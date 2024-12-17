declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params: any[]; }) => Promise<any>;
    };
  }
}

export const connectGoatNetwork = async (): Promise<boolean> => {
  try {
    if (typeof window === 'undefined' || !window.ethereum) {
      alert('Please install MetaMask to connect to GOAT Testnet');
      return false;
    }

    // Request account access
    await window.ethereum.request({
        method: 'eth_requestAccounts',
        params: []
    });

    // Add the network
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: '0xBEB0',
        chainName: 'GOAT Testnet3',
        nativeCurrency: {
          name: 'Bitcoin',
          symbol: 'BTC',
          decimals: 18
        },
        rpcUrls: ['https://rpc.testnet3.goat.network'],
        blockExplorerUrls: ['https://explorer3.testnet.goat.network']
      }]
    });

    // Switch to the network
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0xBEAF' }],
    });

    return true;
  } catch (error) {
    console.error('Failed to add/switch network:', error);
    alert('Failed to connect to GOAT Testnet. Please try again.');
    return false;
  }
}; 
