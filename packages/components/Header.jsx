import React from "react";
import Container from "./Container";

export default function Header() {
  return (
    <div className="flex flex-col bg-zinc-900 w-full shadow-xl items-center px-4">
      <Container className="flex w-full text-zinc-300 items-center">
        <div className="flex-1 font-black text-2xl">
          <span className="text-orange-700">BTIX</span> CAREER BLOG
        </div>
        <div>MENU</div>
      </Container>
    </div>
  );
}
