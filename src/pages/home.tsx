import { useState, useRef } from "react";

import Header from "../sections/header"
import About from "../sections/about"
import Projects from "../sections/projects"
import Project_Overlay from "../components/project_overlay";
import Resume from "../sections/resume";
import Contact from "../sections/contact";
import Footer from "../sections/footer";

import useOnClickOutside from '../components/click_outside_handler'; 

function Home() {

  const [activeProject, setActiveProject] = useState(null);

  const CloseOverlay = () => {
    setActiveProject(null);
  };

  return (
    <>
        <Header project={activeProject} />
          <div style={{display: 'flex', flexDirection: "column"}}>
            <div className="sections_list">
                <About />
            </div>
            <div id="Projects"  className="section_divider" style={{margin: '100px 0 100px 0'}} />
            <div className="sections_list" >
                <Projects onOpenOverlay={setActiveProject}/>
            </div>
            <div id="Resume"  className="section_divider" style={{margin: '100px 0 100px 0'}} />
            <div className="sections_list" >
                <Resume />
            </div>
            <div id="Contact"  className="section_divider" style={{margin: '100px 0 100px 0'}} />
            <div className="sections_list" >
              <Contact />
            </div>
        </div>
      <Footer />
        {activeProject && (
          <Project_Overlay project={activeProject} onCloseOverlay={CloseOverlay} />
        )}
    </>
  );
}

export default Home;