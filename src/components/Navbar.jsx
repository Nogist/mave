import logo from '../assets/logo.png';
import Image from 'next/image';

export default function Navbar () {
  return (
    <nav>
      <div className='nav__logo'>
        <Image src={logo} 
          width={266.78}
          height= {76}
          alt="logo" />
      </div>
      <div className='nav__logo__content'>
        <div className='nav__logo__link'>
          <p>Home</p>
          <p>About</p>
          <p>Our Services</p>
        </div>
        <button> Contact Us </button>
      </div>
    </nav>
  )
}