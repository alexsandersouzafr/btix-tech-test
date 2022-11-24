import Link from "next/link";
import React from "react";
import Container from "./Container";

export default function Header() {
  return (
    <header className="flex flex-col bg-zinc-900 w-full shadow-xl items-center px-4">
      <Container className="flex w-full text-zinc-300 items-center">
        <div className="flex-1 font-black text-2xl cursor-pointer">
          <Link href="/">
            <div>
              <span className="text-orange-700">BTIX</span> CAREER BLOG
            </div>
          </Link>
        </div>
        <div>MENU</div>
      </Container>
    </header>
  );
}
