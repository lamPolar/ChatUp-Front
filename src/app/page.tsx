"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const handleTest = () => {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    //axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("accessToken");
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

    // 200 성공
    axios.get(`/hello`).then((res) => console.log(res.data));

    // 403 에러 발생
    axios
      .get("/hi")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <header>
        <div>Chat</div>
        <div>Setting</div>
      </header>
      Hello ChatUp
    </>
  );
}
