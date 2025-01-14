import './Projects.css';

function Projects() {
  return (
    <div className="container d-flex jc-flex-center al-center">
      <div className="projects d-flex flex-column jc-flex-center al-center">
        <div className="tittleProjects " >
          <h1 className="projectsTitle"  id="projetos">Projetos</h1>
        </div>
        <div className="templesProjects d-grid jc-space-between" style={{ gridTemplateColumns: "repeat(2, 1fr)",rowGap: "120px",  gap: "250px" }}>
          
          <div className="projectItem d-flex flex-column jc-space-between al-center">
            <div className="projectPreview">
              <iframe
                src="http://google.com"
                title="Projeto 1"
                className="iframePreview"
              ></iframe>
            </div>
            <h2>Projeto: Google</h2>
            <p className="text-start">Desenvolvimento Web<br />Front-End usando React</p>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <button className="btProjects">Clique Aqui</button>
            </a>
          </div>

          
          <div className="projectItem d-flex flex-column jc-space-between al-center">
            <div className="projectPreview">
              <iframe
                src="http://google.com"
                title="Projeto 2"
                className="iframePreview"
              ></iframe>
            </div>
            <h2>Projeto: Youtube</h2>
            <p className="text-start">Desenvolvimento Web<br />Front-End usando React</p>
            <a href="https://example2.com" target="_blank" rel="noopener noreferrer">
              <button className="btProjects">Clique Aqui</button>
            </a>
          </div>

          
          <div className="projectItem d-flex flex-column jc-space-between al-center">
            <div className="projectPreview">
              <iframe
                src="https://github.com/FranccoL"
                title="Projeto 3"
                className="iframePreview"
              ></iframe>
            </div>
            <h2>Projeto: Github</h2>
            <p className="text-start">Desenvolvimento Web<br />Front-End usando React</p>
            <a href="https://github.com/FranccoL" target="_blank" rel="noopener noreferrer">
              <button className="btProjects">Clique Aqui</button>
            </a>
          </div>

         
          <div className="projectItem d-flex flex-column jc-space-between al-center">
            <div className="projectPreview">
              <iframe
                src="https://www.linkedin.com/in/leonardofmoreno/"
                title="Projeto 4"
                className="iframePreview"
              ></iframe>
            </div>
            <h2>Projeto: LinkedIn</h2>
            <p className="text-start">Desenvolvimento Web<br />Front-End usando React</p>
            <a href="https://www.linkedin.com/in/leonardofmoreno/" target="_blank" rel="noopener noreferrer">
              <button className="btProjects">Clique Aqui</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
