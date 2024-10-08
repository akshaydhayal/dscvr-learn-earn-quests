import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { create, fetchAsset, fetchCollection } from "@metaplex-foundation/mpl-core";
import { base58 } from "@metaplex-foundation/umi/serializers";
import { generateSigner, signerIdentity } from "@metaplex-foundation/umi";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { assetMetadataUri } from "./assetMetadata";

//@ts-ignore
export async function createAsset(wallet:any, trackName:string, subTrackNo:number,setNftMintStatus) {
  if(!wallet){
    await wallet.connect();
  }
  // Setup Umi
  const umi = createUmi("https://api.devnet.solana.com", "confirmed");

  umi.use(walletAdapterIdentity(wallet));
  console.log("trackName ; ", trackName, " subTrackNo : ", subTrackNo);
  //@ts-ignore
  console.log('urip : ',assetMetadataUri[trackName][subTrackNo]);

  //@ts-ignore
  const assetMetadataLink=assetMetadataUri[trackName][subTrackNo];
  const questName=trackName=='solana'?'Solana Quest':(trackName=='metaplex'?'Metaplex Core Quest':'Blockchain Quest')
  console.log('questName : ',questName);
  
  // Generate the Asset KeyPair
  const asset = generateSigner(umi);
  console.log("This is your asset address", asset.publicKey.toString());

  // Generate the Asset
  try {
    const tx = await create(umi, {
      asset,
      name: questName,
      uri: assetMetadataLink,
    }).sendAndConfirm(umi);

    // Deserialize the Signature from the Transaction
    console.log("Asset Created: https://solana.fm/tx/" + base58.deserialize(tx.signature)[0] + "?cluster=devnet-alpha");
    const assetdetails = await fetchAsset(umi, asset.publicKey, {
      skipDerivePlugins: false,
    });
    setNftMintStatus(true);

    console.log("fetched asset details : ",assetdetails);
  }catch (error) {
    console.error("Error creating asset:", error);
  }
}


