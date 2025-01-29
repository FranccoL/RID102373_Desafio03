import "./Header.css";


function Header () {

  return (
    <header className="d-flex al-center jc-flex-center">
      <div className="container-header d-flex jc-flex-between al-center">
       

        <nav className="d-flex jc-flex-center">
          <ul className="d-flex">
            <li>
              <a href="#projetos">Projetos </a>
            </li>
            <li>
              <a href="#projetos">Tecnologias </a>
            </li>
            <li>
              <a href="#sobre-mim">Sobre mim </a>
            </li>
          </ul>
        </nav>

        <div className="social-buttons d-flex">
          <a href="https://github.com/FranccoL" target="_blank">
            <button className="btGit">
              <img src="/github.svg" alt="Github" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/leonardofmoreno/" target="_blank">
            <button className="btLinke">
              <img src="/Linkedin.svg" alt="LinkedIn" />
            </button>
          </a>
        </div>
      </div>
    </header>
  )
}


export default Header;
