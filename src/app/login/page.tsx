"use client";
import axios from "axios";

export default function Login() {
  const handleLogin = () => {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

    axios
      .post("/oauth2/authorization/google", null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={handleLogin} className="b-1">
        login을 원한다면 눌러주세요
      </button>
    </div>
  );
}
