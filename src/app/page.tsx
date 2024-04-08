"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [consolelog, setConsolelog] = useState(null);
  const handleTest = () => {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
    // 200 성공
    axios
      .get(`/hello`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res) => alert(res.data));

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
        <button onClick={handleTest}>Axios Test</button>
      </div>
      <div>
        <button onClick={handleNick}>NickName Input</button>
      </div>
      <div className="text-red-200">{consolelog}</div>
    </>
  );
}
