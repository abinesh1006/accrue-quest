import "../../../src/App.css";
import '../footer/Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer">
      <div  className="footer coll_footer footer-padding">

	{/** Em  {(new Date().getFullYear())}   (Ano Capturado dinâmicamente ) */}

      <div className="footer-below">
        <div className="footer-copyright">
          <p>
              {(new Date().getFullYear())} All right reserved &copy; Accrue-Quest. 
          </p>
        </div>
      <div className="footer-below-links">
          <a href="/terms"><div><p>Terms & Conditions</p></div></a>
          <a href="/privacy"><div><p>Privacy</p></div></a>
          <a href="/security"><div><p>security</p></div></a>
          <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;