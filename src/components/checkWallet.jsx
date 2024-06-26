"use client";
import { signOut, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CheckWallet = ({ children }) => {
  const { update } = useSession();
  const router = useRouter();

  useEffect(() => {
    const checkMetaMaskConnection = async () => {
      const session = await getSession();
      const id = session?.user?.id;
      if (window.ethereum) {
        const account = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (account.length !== 0 && id !== account[0]) {
          await update({ id: account[0], role: "normal" });
          // location.reload();
          router.refresh("/");
          // location.reload;
        }

        if (id && account.length == 0) {
          signOut();
        }
      }

      checkMetaMaskConnection();

      window.ethereum.on("accountsChanged", checkMetaMaskConnection);
    };
  }, []);
  return <>{children}</>;
};

export default CheckWallet;
