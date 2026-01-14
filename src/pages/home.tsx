import Header from "../sections/header"
import About from "../sections/about"
import Projects from "../sections/projects"


function Home() {

  return (
    <>
        <Header />
          <div style={{display: 'flex', flexDirection: "column"}}>
            <div className="sections_list">
                <About />
            </div>
            <div className="section_divider" />
            <div className="sections_list">
                <Projects />
            </div>
        </div>
    </>
  );
}

export default Home;