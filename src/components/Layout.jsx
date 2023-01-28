import Footer from "./Footer";
import Head from "./Head";
import Navbar from "./Navbar";

export default function Layout ({ children }) {
  return (
    <div className="content">
      <Head />
      <Navbar />
      { children }
      <Footer />
    </div>
  )
}