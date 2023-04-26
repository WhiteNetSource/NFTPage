import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [metadata, setMetadata] = useState();

  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  useEffect(() => console.log(metadata), [metadata]);

  //return <div>{metadata ? "있을때":"없을때"}</div>;
  return (
    <div className="flex jsutify-center py-16 bg-gray-900">
      {metadata ? (
        <div className="max-w-[512px]">
          <img className="rounded-t-2xl" src={metadata.image} alt="" />
          <ul className="grid grid-cols-4 gap-8 py-8 bg-gray-600">
            {metadata.attibutes.map((v, i) => {
              return (
                <li key={i} className="mx-4">
                  <div>{v.trait_type}</div>
                  <div className="mt-1 border-t-2 font-bold">{v.value}</div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        "로딩중"
      )}
    </div>
  );
};

export default Detail;
