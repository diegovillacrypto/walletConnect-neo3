import '../styles/globals.css'
import {WalletConnectProvider} from "@cityofzion/wallet-connect-sdk-react";


const wcOptions = {
  projectId: 'a89daee0d71f2c20de298744fb265286', // the ID of your project on Wallet Connect website
  relayUrl: 'wss://relay.walletconnect.com', // we are using walletconnect's official relay server
  metadata: {
      name: 'Octeocean DEX', // your application name to be displayed on the wallet
      description: 'My Application description', // description to be shown on the wallet
      url: 'https://myapplicationdescription.app/', // url to be linked on the wallet
      icons: ['https://myapplicationdescription.app/myappicon.png'] // icon to be shown on the wallet
  }
};



function MyApp({ Component, pageProps }) {
  return(
    <WalletConnectProvider autoManageSession={true} options={wcOptions}>

      <Component {...pageProps} />

    </WalletConnectProvider>
   ) 
}

export default MyApp
