import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Members from "./components/members/members";
import Timeline from "./components/timeline/timeline";
import Footer from "./components/footer/footer";

function WebContent() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Members />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}
export default WebContent;
