import './AboutMe.css'
import { useEffect } from 'react';
import { useState } from 'react';



function AboutMe() {
  useEffect(() => {
    const aboutSection = document.querySelector('.tittleAbout');
    aboutSection.classList.add('fade-in'); 
  }, []);
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container" >
        <div className="tittleAbout d-flex flex-column" >
        <h1>Olá, me chamo Leonardo</h1>
        <p>
        Tenho 28 anos e estou cursando o curso de Full Stack pela escola DNC. Desde muito jovem, sempre fui fascinado pelo mundo da tecnologia. Ao longo dos anos, essa paixão cresceu e se transformou em uma carreira.
          <br />
          {showMore && (
            <>
              ao longo do tempo, fui aperfeiçoando minhas habilidades, inicialmente com HTML e CSS. Com o tempo, fui me aprofundando mais em linguagens como JavaScript e, mais recentemente, explorando o ecossistema de desenvolvimento web com React, Node.js e bancos de dados.

Ao longo dessa jornada, percebi que o que mais me atrai no desenvolvimento é a possibilidade de criar soluções que podem impactar diretamente a vida das pessoas. Seja criando sites, aplicativos ou ferramentas, a ideia de transformar ideias em realidade através de código é o que me motiva diariamente.
            </>
          )}
        </p>
            <button className='btAboutMe' onClick={toggleShowMore}> {showMore ? 'Mostrar menos' : 'Saber mais'}</button>
        </div>
    </div>
  )
}

export default AboutMe
