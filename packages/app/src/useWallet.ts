import { useAccount, useConnect } from "wagmi";

export const useWallet = () => {
  const { activeConnector } = useConnect();
  const { data } = useAccount();

  return { connector: activeConnector, account: data?.address };
};
