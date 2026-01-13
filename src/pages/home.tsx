import Header from "../sections/header"
import About from "../sections/about"
import Projects from "../sections/projects"


function Home() {
  const handleClick = () => {
    alert("Projects coming soon!");
  };

  return (
    <body>
        <Header />
        <div className="sections_list">
            <About />
        </div>
        <div className="section_divider" />
        <div className="sections_list">
            <Projects />
        </div>
    </body>
  );
}

export default Home;