import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Members from "./components/members/members";
import Timeline from "./components/timeline/timeline";
import Footer from "./components/footer/footer";

function WebContent() {
  const Editorial = () => (
    <svg className="editorial"
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 24 150 28"
         preserveAspectRatio="none">
      <defs>
        <path id="gentle-wave"
              d="M-160 44c30 0 
                 58-18 88-18s
                 58 18 88 18 
                 58-18 88-18 
                 58 18 88 18
                 v44h-352z" />
      </defs>
      <g className="parallax1">
        <use xlinkHref="#gentle-wave" x="50" y="3" fill="url(#gradient1)"/>
      </g>
      <g className="parallax2">
        <use xlinkHref="#gentle-wave" x="50" y="0" fill="url(#gradient2)"/>
      </g>
      <g className="parallax3">
        <use xlinkHref="#gentle-wave" x="50" y="9" fill="url(#gradient3)"/>
      </g>
      <g className="parallax4">
        <use xlinkHref="#gentle-wave" x="50" y="6" fill="url(#gradient4)"/>  
      </g>
      <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(244, 97, 193, 0)" />
        <stop offset="100%" stopColor="#f461c1" />
      </linearGradient>
      <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(69, 121, 226, 0)" />
        <stop offset="100%" stopColor="#4579e2" />
      </linearGradient>
      <linearGradient id="gradient3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(52, 97, 193, 0)" />
        <stop offset="100%" stopColor="#3461c1" />
      </linearGradient>
      <linearGradient id="gradient4" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
        <stop offset="100%" stopColor="#fff" />
      </linearGradient>
    </svg>
  );
  return (
    <>
    <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            
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
      <Editorial/> 
    </>
  );
}
export default WebContent;
