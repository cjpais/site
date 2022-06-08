import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import {
  createClient as createGraphClient,
  Provider as GraphProvider,
} from "urql";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, createClient, WagmiConfig, configureChains } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export const graphClient = createGraphClient({
  url: "https://api.thegraph.com/subgraphs/name/holic/example-nft",
});

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    infuraProvider({ infuraId: "9e55ae7e1685411abf37e7e1af924d22" }),
    alchemyProvider({ alchemyId: "DpBynqjgNCZ_eV0k3JhnemvLOhjxq14p" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "website",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GraphProvider value={graphClient}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </GraphProvider>
  );
};

export default MyApp;
