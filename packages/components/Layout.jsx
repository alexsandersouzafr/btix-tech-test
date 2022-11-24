import React from "react";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="flex flex-col mb-auto items-center">
        <Container className="w-full">{children}</Container>
      </main>

      <Footer />
    </div>
  );
}
