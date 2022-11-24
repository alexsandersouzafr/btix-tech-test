import React from "react";

export default function CTAButton({ children }) {
  return (
    <div className="max-w-fit bg-orange-700 p-2 font-black cursor-pointer text-zinc-900">
      {children}
    </div>
  );
}
