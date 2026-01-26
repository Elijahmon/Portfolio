import { useEffect, useState } from "react";
import "..//sections/styles/header.css"
import Divider from "../assets/icons/Divider.svg"

function Header({project})
{

    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => 
    {
        const onScroll = () =>
            {
                setIsCompact(window.scrollY > 80);
            };
            
        window.addEventListener("scroll", onScroll, {passive: true});

        return () => window.removeEventListener("scroll", onScroll);

    }, []);

    const overlayOpen = project != null;

    return (
        <header id="Header" className = {`header ${isCompact || overlayOpen ? "compact" : ""}`}>
            <div style={{marginLeft: 75}}>
                <div style={{height: '100%', marginRight: 165, overflow: 'hidden', flexDirection: 'column', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div className={`header_name ${isCompact || overlayOpen  ? "compact" : ""}`} style={{}}>
                        Elijah Fernandez
                    </div>
                    <div className={`header_role ${isCompact || overlayOpen  ? "compact" : ""}`}  style={{}}>
                        Game Designer
                    </div>
                </div>
                <div style={{height: '100%', position:'relative', top: 18, gap: 15, display: 'inline-flex', alignSelf: 'center'}}>
                    <a href="#About" className={`header_link ${isCompact || overlayOpen ? "compact" : ""}`} style={{textShadow: '2px 3px 1px rgba(23, 18, 40, 0.75)'}}>
                        About
                    </a>
                    <img src={Divider}/>
                    <a href="#Projects" className={`header_link ${isCompact || overlayOpen ? "compact" : ""}`} style={{textShadow: '2px 3px 1px rgba(23, 18, 40, 0.75)'}}>
                        Projects
                    </a>
                    <img src={Divider}/>
                    <a href="#Resume" className={`header_link ${isCompact || overlayOpen ? "compact" : ""}`} style={{textShadow: '2px 3px 1px rgba(23, 18, 40, 0.75)'}}>
                        Resume
                    </a>
                    <img src={Divider} />
                    <a href="#Contact" className={`header_link ${isCompact || overlayOpen ? "compact" : ""}`} style={{textShadow: '2px 3px 1px rgba(23, 18, 40, 0.75)'}}>
                        Contact
                    </a>
                    <img src={Divider}/>
                    <a href="#Blog" className={`header_link ${isCompact || overlayOpen ? "compact" : ""}`} style={{textShadow: '2px 3px 1px rgba(23, 18, 40, 0.75)'}}>
                        Blog
                    </a>
                </div>
                </div>
            </header>
    );
}

export default Header;