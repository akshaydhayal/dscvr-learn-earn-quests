"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import "@solana/wallet-adapter-react-ui/styles.css";
import Head from "next/head";
import { useCanvasClient } from "@/utils/useCanvasClient";
import { useResizeObserver } from "@/utils/useResizeObserver";
import { registerCanvasWallet } from "@dscvr-one/canvas-wallet-adapter";
import { CanvasClient } from "@dscvr-one/canvas-client-sdk";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const canvasClient = new CanvasClient();
  // registerCanvasWallet(canvasClient);

  const endpoint=clusterApiUrl("devnet");
  const phantomWallet=new PhantomWalletAdapter();
  const { client, user, content, isReady } = useCanvasClient();
  useResizeObserver(client);
  if(client){
    registerCanvasWallet(client)
  }
 
  return (
    <html lang="en">
      <Head>
        <meta name="dscvr:canvas:version" content="vNext"/>
        <meta name="og:image" content="https://my-canvas.com/preview-image.png"/>
      </Head>
      <head>
        <meta name="dscvr:canvas:version" content="vNext"/>
        <meta name="og:image" content="https://my-canvas.com/preview-image.png"/>
      </head>
      <body className={inter.className} style={{height:'700px'}}>
        <div>
          <ConnectionProvider endpoint={endpoint} >
            {/* <WalletProvider wallets={[phantomWallet]} autoConnect> */}
            <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <Navbar/>
                {children}
              </WalletModalProvider>
            </WalletProvider>
          </ConnectionProvider>
        </div>
        </body>
    </html>
  );
}
