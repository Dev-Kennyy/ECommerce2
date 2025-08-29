import React from "react";
import { CgSpinner } from "react-icons/cg";

function Loading() {
  return (
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-primary z-50 flex-col">
      <img
        src="single icon White.png"
        alt="Loading..."
        className="h-20 w-20 animate-spin-slow"
      />
      <p className="text-white capitalize flex">
        Loading... <CgSpinner />
      </p>
    </div>
  );
}

export default Loading;
