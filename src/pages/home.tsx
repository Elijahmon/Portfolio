import { useState, useRef } from "react";

import Header from "../sections/header"
import About from "../sections/about"
import Projects from "../sections/projects"
import Project_Overlay from "../components/project_overlay";

import useOnClickOutside from '../components/click_outside_handler'; 

function Home() {

  const [activeProject, setActiveProject] = useState(null);
  
  const overlayRef = useRef(null);

  // Close Overlay Function
  const CloseOverlay = () => {
    setActiveProject(null);
  };
  useOnClickOutside(overlayRef, CloseOverlay);

  return (
    <>
        <Header />
          <div style={{display: 'flex', flexDirection: "column"}}>
            <div className="sections_list">
                <About />
            </div>
            <div className="section_divider" style={{margin: '100px 0 50px 0'}} />
            <div className="sections_list" >
                <Projects onOpenOverlay={setActiveProject}/>
            </div>
        </div>
        {activeProject && (
          <Project_Overlay project={activeProject} onCloseOverlay={setActiveProject} />
        )}
    </>
  );
}

export default Home;