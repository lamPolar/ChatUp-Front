"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
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
