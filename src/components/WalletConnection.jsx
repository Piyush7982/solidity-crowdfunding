"use client";
import { signIn, signOut, useSession } from "next-auth/react";

import axios from "axios";

const { useState, useEffect } = require("react");

export default function WalletConnection({ children }) {
  const session = useSession();

  const { account, setaccount } = useState(false);
  // useEffect(() => {
  //   const checkMetaMaskConnection = async () => {
  //     const account = await window.ethereum.request({ method: "eth_accounts" });
  //     if (!account?.length > 1 && session.data.user) {
  //       signOut({ redirectTo: "/" });
  //     }
  //     // if (typeof window.ethereum !== "undefined") {
  //     //   try {
  //     //     //   await window.ethereum.request({ method: "eth_accounts" });
  //     //     const accounts = await window.ethereum.request({
  //     //       method: "eth_accounts",
  //     //     });
  //     //     //   setisConnected(accounts.length > 0)
  //     //     const isConnected = accounts.length > 0;

  //     //       if (isConnected === false) {
  //     //         const account = await window.ethereum.request({
  //     //           method: "eth_requestAccounts",
  //     //         })}

  //     //     // console.log("no");
  //     //     //   }

  //     //     // Send connection status to the server
  //     //     // await axios.post("/api/wallet", { isConnected });
  //     //   } catch (error) {
  //     //     console.error("Error connecting to MetaMask:", error);
  //     //   }
  //     // }
  //   };

  //   // Initial check
  //   checkMetaMaskConnection();

  //   // Listen for account changes
  //   window.ethereum.on("accountsChanged", checkMetaMaskConnection);
  // }, []);

  return (
    // <div
    //   onClick={async () => {
    //     const account = await window.ethereum.request({
    //       method: "eth_accounts",
    //     });
    //     if (!account.length > 0) {
    //       const account = await window.ethereum.request({
    //         method: "eth_requestAccounts",
    //       });
    //       if(account)[

    //       ]
    //     }
    //   }}
    // >
    //   {children}
    // </div>
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (window.ethereum) {
          const account = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (!account.length > 0) {
            const account = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            if (account) {
              await signIn("credentials", {
                role: "normal",
                id: account[0],
              });
            }
          }
        }
      }}
    >
      {children}
    </form>
  );
}
