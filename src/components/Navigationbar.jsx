import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import './style/navigationbar.css';
import { useNavigate } from 'react-router-dom';

const Navigationbar = () => {
  const[open, setOpen] = useState(false);

  const navigate = useNavigate();

  const toggle = () => {
    setOpen(!open);
  }

  const home = () => {
    navigate('/');
    setOpen(false);
  }

  const insight = () => {
    navigate('/coininsight');
    setOpen(false);
  }

  const developer = () => {
    navigate('/developer');
    setOpen(false);
  }

  const trendings = () => {
    navigate('/trendings');
    setOpen(false);
  }

  return (
    <div className="App">
      <div className='main' >
        <div className='nav-container'>
          {/* <div className='logo'>Logo</div> */}
          <div className='hamburger' onClick={toggle}><RxHamburgerMenu /></div>
          <div className='logo'>CoinSights</div>
        </div>
        <div className={`${open ? 'menu-flex' : 'menu-hidden'}`}>
            <span className='links' onClick={home}>Home</span>
            <span className='links' onClick={insight}>Insights</span>
            <span className='links' onClick={trendings}>Trendings</span>
            <span className='links' onClick={developer}>Developer</span>
        </div>
      </div>      
    </div>
  );
}

export default Navigationbar;