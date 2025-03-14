declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params: any[]; }) => Promise<any>;
    };
  }
}

export const connectGoatNetwork = async (network_type: any): Promise<boolean> => {
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

    let rpcUrls = ['https://rpc.testnet3.goat.network'];
    let blockExplorerUrls = ['https://explorer.testnet3.goat.network'];
    let chainId = "0xBEB0";
    let chainName = "GOAT Testnet3"

    if (network_type == "mainnet") {
        rpcUrls = ['https://rpc.goat.network'];
        blockExplorerUrls = ['https://explorer.goat.network'];
        chainId = "0x929";
        chainName = "GOAT Network"
    }

    // Add the network
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: chainId,
        chainName: chainName,
        nativeCurrency: {
          name: 'Bitcoin',
          symbol: 'BTC',
          decimals: 18
        },
        rpcUrls: rpcUrls,
        blockExplorerUrls: blockExplorerUrls 
      }]
    });

    // Switch to the network
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chainId }],
    });

    return true;
  } catch (error) {
    console.error('Failed to add/switch network:', error);
    alert('Failed to connect to GOAT Testnet. Please try again.');
    return false;
  }
}; 
