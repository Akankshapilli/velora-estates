import type { ReactNode } from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* NOISE TEXTURE */}
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03] mix-blend-soft-light">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          }}
        />
      </div>

      {/* GRADIENT GLOWS */}
      <div className="pointer-events-none fixed left-[-200px] top-[-100px] z-[1] h-[500px] w-[500px] rounded-full bg-[#C8A96B]/10 blur-[140px]" />

      <div className="pointer-events-none fixed bottom-[-200px] right-[-150px] z-[1] h-[500px] w-[500px] rounded-full bg-[#C8A96B]/10 blur-[160px]" />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="relative z-10">{children}</main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default MainLayout;
