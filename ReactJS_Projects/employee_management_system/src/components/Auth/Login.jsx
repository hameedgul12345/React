import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
   
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          className="flex items-center content-center flex-col"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            required
            value={password}
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
          />
          <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
