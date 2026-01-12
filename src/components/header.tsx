import "./header.css"
import Divider from "../assets/Divider.svg"

function Header()
{
    return (
        <header>
                <div data-state="Inactive" style={{height: 96, left: 75, top: 32, marginRight: 200, position: 'relative', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div className="header_text" style={{fontSize: 64, textShadow: '2px 3px 2px rgba(23, 18, 40, 0.80)'}}>
                        Elijah Fernandez
                    </div>
                    <div className="header_text" style={{fontSize: 32, textShadow: '1px 2px 2px rgba(23, 18, 40, 0.80)'}}>
                        Game Designer
                    </div>
                </div>
                <div style={{top:"30%", position: 'relative', justifyContent: 'center', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
                    <a href="" className='header_link' style={{textShadow: '2px 3px 1px rgba(23, 18, 40, 0.75)'}}>
                        About
                    </a>
                    <img src={Divider}/>
                    <a href="" className='header_link' style={{textShadow: '2px 3px 1px rgba(23, 18, 40, 0.75)'}}>
                        Projects
                    </a>
                    <img src={Divider}/>
                    <a href="" className='header_link' style={{textShadow: '2px 3px 1px rgba(23, 18, 40, 0.75)'}}>
                        Resume
                    </a>
                    <img src={Divider} />
                    <a href="" className='header_link' style={{textShadow: '2px 3px 1px rgba(23, 18, 40, 0.75)'}}>
                        Contact
                    </a>
                    <img src={Divider}/>
                    <a href="" className='header_link' style={{textShadow: '2px 3px 1px rgba(23, 18, 40, 0.75)'}}>
                        Blog
                    </a>
                </div>
            </header>
    );
}

export default Header;