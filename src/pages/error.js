import React from "react";
import Navbar from "../components/NavBar";
export default function ErrorPage() {
  return (
    <div className="">
      <Navbar banner={"banner2.png"} logo={"logo"} />
      <div className="flex h-64 flex-col md:flex-row md:items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Error 404</h1>
          <p className="font-semibold tracking-tighter"> Page not found</p>
        </div>
        <img
          className="mt-4 md:ml-4 h-24 "
          src={require(`../images/lupa.svg`)}
          alt=""
        />
      </div>
    </div>
  );
}
