import { useEffect, useState } from "react";
import "..//sections/styles/header.css"
import Divider from "../assets/icons/Divider.svg"

function Header({ project }) {

    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsCompact(window.scrollY > 80);
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);

    }, []);

    const overlayOpen = project != null;

    return (
        <header id="Header" className={`header ${isCompact || overlayOpen ? "compact" : ""}`}>
            <div style={{ height: '100%', marginLeft: '75px', display: 'inline-flex', flexDirection: 'row' }}>
                <div className="header_nameframe" style={{ overflow: 'hidden', flexDirection: 'column', alignItems: 'block-start', display: 'inline-block' }}>
                    <div className={`header_name ${isCompact || overlayOpen ? "compact" : ""}`} style={{}}>
                        Elijah Fernandez
                    </div>
                    <div className={`header_role ${isCompact || overlayOpen ? "compact" : ""}`} style={{}}>
                        Game Designer
                    </div>
                </div>
                <div className="header_linkframe" style={{ display: 'inline-flex', height: '100%' }}>
                    <a href="#About" className={`header_link ${isCompact || overlayOpen ? "compact" : ""}`} style={{}}>
                        About
                    </a>
                    <img className="header_img" src={Divider} />
                    <a href="#Projects" className={`header_link ${isCompact || overlayOpen ? "compact" : ""}`} style={{}}>
                        Projects
                    </a>
                    <img className="header_img" src={Divider} />
                    <a href="#Resume" className={`header_link ${isCompact || overlayOpen ? "compact" : ""}`} style={{}}>
                        Resume
                    </a>
                    <img className="header_img" src={Divider} />
                    <a href="#Contact" className={`header_link ${isCompact || overlayOpen ? "compact" : ""}`} style={{}}>
                        Contact
                    </a>
                    {/*}
                    <img src={Divider}/>
                    <a href="#Blog" className={`header_link ${isCompact || overlayOpen ? "compact" : ""}`} style={{}}>
                        Blog
                    </a>
                    */}
                </div>
            </div>
        </header>
    );
}

export default Header;