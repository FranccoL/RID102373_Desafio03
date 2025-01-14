import "./Timeline.css";

function Timeline() {
  return (
    <section className="timeline" id="sobre-mim">
      <h1>Sobre mim</h1>
      <div className="timeline-container">
      <div className="timeline-item">
  <div className="timeline-year">2022</div>
  <div className="timeline-bullet"></div>
  <div className="timeline-content">
    <p>Em 2022, percebi que a tecnologia era uma área que me interessa, desde o impacto que ela tem no nosso dia a dia até as possibilidades de transformação que ela proporciona. </p>
  </div>
</div>
        <div className="timeline-item">
          <span className="timeline-year">2023</span>
          <div className="timeline-bullet"></div>
          <div className="timeline-content">
            <p>Em 2023, minha paixão por TI me levou a tomar a decisão de formalizar meus estudos. Me matriculei na escola DNC, onde iniciei o curso de Full Stack. </p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-year">2024</span>
          <div className="timeline-bullet"></div>
          <div className="timeline-content">
            <p>Em 2024, foi o ano em que finalmente comecei a praticar e aplicar meus conhecimentos adquiridos. Iniciei o curso de Full Stack, onde aprendi a integrar o front-end.</p>
          </div>
        </div>
        <div className="timeline-item">
          <span className="timeline-year">2025</span>
          <div className="timeline-bullet"></div>
          <div className="timeline-content">
            <p>Em 2025, espero concluir o curso de Full Stack e entrar de cabeça no mercado de trabalho como desenvolvedor. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
