import { LocalWallet, SmartWallet } from "@thirdweb-dev/wallets";

const main = async (clientId) => {
    // First, connect the personal wallet, which can be any wallet (metamask, walletconnect, etc.)
    // Here we're just generating a new local wallet which can be saved later
    const personalWallet = new LocalWallet();
    await personalWallet.generate();

    // Setup the Smart Wallet configuration
    const config = {
        chain: "binance-testnet", // the chain where your smart wallet will be or is deployed
        factoryAddress: "0xB41BE9b30233dF8f6Fd4293B0cA17118917491D7", // your own deployed account factory address
        clientId: clientId, // or use secretKey for backend/node scripts
        gasless: true, // enable or disable gasless transactions
    };

    // Then, connect the Smart wallet
    const wallet = new SmartWallet(config);
    await wallet.connect({
        personalWallet,
    });
}

export default main