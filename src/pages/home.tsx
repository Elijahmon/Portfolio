import Header from "../sections/header"
import About from "../sections/about"


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
    </body>
  );
}

export default Home;