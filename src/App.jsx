import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Header from "./component/Header";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");

  return (
    <BrowserRouter>
      <div className="bg-gray-950 min-h-screen text-white">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;

//npm i react-router-dom 무슨기능?
// <Header></Header> 원래 이거 두개 아닌가? 만약 하나시 prop넣을려면 그럼 어케해야해?
//색상이란 폰트를 가져와서 써보자 tailwind confic 등록하고 css에  임포트 추가
//npm i react-icons 헤더 쪽에 설치 안하면 오류뜸

//.env 추가하면 서버 껃다가 켜줘야한다 그리고 중요파일이니 깃올릴때 올리지 않게끔 gitignore 추가
// <Route path="/" element={<Main>account={account}</Main>} /> 이거 연구
