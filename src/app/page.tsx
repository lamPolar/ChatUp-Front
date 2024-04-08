"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Home(){
  return (
    <Suspense>
      <Search />
    </Suspense>
    );
}

function Search() {
  const [consolelog, setConsolelog] = useState(null);
  const searchParams = useSearchParams();
  const accessToken = searchParams.get("accessToken");

  const handleTest = () => {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    if (accessToken)
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    // 200 성공
    axios.get(`/hello`).then((res) => console.log(res.data));

    // 403 에러 발생
    axios
      .get("/hi")
      .then((res) => setConsolelog(res.data))
      .catch((err) => setConsolelog(err.response.data));
  };

  const handleNick = () => {
    const nick = prompt("닉네임을 입력해주세요");
    axios
      .post("/user/nickname", { nickname: nick })
      .then((res) => {
        setConsolelog(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        setConsolelog(err.response.data);
      });
  };

  return (
    <>
      <h2>Hello ChatUp</h2>
      <div>
        <button onClick={handleTest}>JWT Test</button>
      </div>
      <div>
        <button onClick={handleNick}>NickName Input</button>
      </div>
      <div className="text-red-200">{consolelog}</div>
    </>
  );
}
