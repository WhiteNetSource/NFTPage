import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect, useState } from "react";
import Intro from "../component/Intro";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const Main = ({ account }) => {
  const [totalNft, setTotalNft] = useState();
  const [mintedNft, setMintedNft] = useState();

  const getTotalNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalNft().call();

      setTotalNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getMintedNft = async () => {
    try {
      if (!contract) return;
      const response = await contract.methods.totalSupply().call();
      setMintedNft(response);
    } catch (error) {
      console.error(error);
    }
  };
  const getMyNft = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTotalNft();
    getMintedNft();
  }, []);

  return (
    <div>
      <Intro totalNft={totalNft} mintedNft={mintedNft} />
    </div>
  );
};

export default Main;
