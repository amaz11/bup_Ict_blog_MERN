import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3">
      <Profile />
      <Component {...pageProps} />
      <Sidebar />
      </div>
    </>
  );
}
