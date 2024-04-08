"use client";

export default function Login() {
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/google`;
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
