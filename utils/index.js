import { ethers } from "ethers";
import identify from "./Identify.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0x153E18D96e24b20f6775b4875D17CfE23F0C1052", // Dirección del contrato
      identify.abi, // ABI del contrato
      signer // Signer para interactuar con el contrato
    );
    return contractReader;
  }
};
