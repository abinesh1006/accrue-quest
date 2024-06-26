import "../../../src/App.css";
import '../footer/Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer container">
      <div  className="footer coll_footer footer-padding">

	{/** Em  {(new Date().getFullYear())}   (Ano Capturado dinâmicamente ) */}

      <div className="footer-below centered-div">
      <div className="footer-below-links">
          <a href="/terms"><p>Terms</p></a>
          <a href="/privacy"><p>Privacy</p></a>
          <a href="/security"><p>security</p></a>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;