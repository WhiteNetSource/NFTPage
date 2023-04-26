import { useEffect, useState } from "react";
import axios from "axios";
import NftCard from "./NftCard";

const Nfts = ({ page, mintedNft }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();

  const getNfts = async (p) => {
    try {
      let nftArray = [];

      for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 10;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );

        nftArray.push({ tokenId, metadata: response.data });
      }

      setNfts(nftArray);
    } catch (error) {
      console.log(error);
    }
  };
  const onClickPage = (p) => () => {
    setSelectedPage(p);

    getNfts(p);
  };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`ml-4 text-2xl font-bold hover:text-white ${
            i + 1 === selectedPage ? "text-white" : "text-gray-400"
          }`}
          onClick={onClickPage(i + 1)}
        >
          {i + 1} <span className="text-base">페이지</span>
        </button>
      );
    }

    return pageArray;
  };

  useEffect(() => {
    console.log(nfts);
  }, [nfts]);

  useEffect(() => {
    getNfts(1);
  }, []);
  //기본적으로 1페이지를 받아오고

  return (
    <div className="max-w-screen-xl mx-auto pt-4">
      <div>{pageComp()}</div>
      <ul className="mt-8 grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-8">
        {nfts ? (
          nfts.map((v, i) => {
            return (
              <NftCard
                key={i}
                tokenId={v.tokenId}
                metadata={v.metadata}
                mintedNft={mintedNft}
              />
            );
          })
        ) : (
          <div>로딩중입니다...</div>
        )}
      </ul>
    </div>
  );
};

export default Nfts;
// {Nfs ? "있을때" nfts.map((v,i)=>{return <NftCard key={i}></NftCard>}): <div>없을때 로딩 중</div>}

//getNfts는 비동기 함수죠 비동기 함수면 뭔가 axios나 스마트 컨트렉이랑 연결한다는 뜻이고

// function onClickPage(p) {
//     return function() {
//       setSelectedPage(p);
//     }
//   }

//   이거랑 같은 구조인가요?

//   const onClickPage = (p) => () => {
//     setSelectedPage(p);

//     getNfts(p);
//   };
