import './Footer.css';

function Footer() {
  return (
    <div className="container d-flex al-center">
      <div className="footer d-flex al-center">
        <div className="infos d-flex jc-flex-center">
          <div className="contact-info">
            <span>Meu contato:</span>
            <span>(11) 97764-9217</span>
          </div>
          <div className="email-info">
            <span>Email:</span>
            <span>leofranco96@gmail.com</span>
          </div>
        </div>
        <div className="icons d-flex jc-flex-end al-center">
        <a href="https://github.com/FranccoL" target="_blank">
          <div className="icon1"></div>
          </a>
          <a href="https://www.linkedin.com/in/leonardofmoreno/" target="_blank">
          <div className="icon2"></div>
          </a>
          <div className="icon3"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
