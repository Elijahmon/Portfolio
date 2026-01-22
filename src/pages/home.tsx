import { useState } from "react";

import Header from "../sections/header"
import About from "../sections/about"
import Projects from "../sections/projects"
import Project_Overlay from "../components/project_overlay";


function Home() {

  const [activeProject, setActiveProject] = useState(null);
  
  return (
    <>
        <Header />
          <div style={{display: 'flex', flexDirection: "column"}}>
            <div className="sections_list">
                <About />
            </div>
            <div className="section_divider" />
            <div className="sections_list">
                <Projects onOpenOverlay={setActiveProject}/>
            </div>
        </div>
        {activeProject && (
          <Project_Overlay project={activeProject} />
        )}
    </>
  );
}

export default Home;