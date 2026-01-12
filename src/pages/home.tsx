import Header from "../components/header"
import About from "../components/about"


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