import './home.css';
import img from '../props/profilePicNoBG.png';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About me</span> <br />
        <p>
        Great proven experience and positive collaboration. Confident,
        hardworking and determined to get results wherever I
        work. Demonstrate a positive attitude, the will and the
        motivation needed to learn new programs is the key to success for me.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
