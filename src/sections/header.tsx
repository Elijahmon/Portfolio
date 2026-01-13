import "./styles/header.css"
import Divider from "../assets/icons/Divider.svg"

function Header()
{
    return (
        <header>
            <div style={{marginLeft: 75, marginBottom: 32}}>
                <div data-state="Inactive" style={{height: 'max-content', marginTop: 32,marginRight: 165, position: 'relative', overflow: 'hidden', flexDirection: 'column', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div className="header_text" style={{fontSize: 64, textShadow: '2px 3px 2px rgba(23, 18, 40, 0.80)'}}>
                        Elijah Fernandez
                    </div>
                    <div className="header_text" style={{fontSize: 32, textShadow: '1px 2px 2px rgba(23, 18, 40, 0.80)'}}>
                        Game Designer
                    </div>
                </div>
                <div data-state="Inactive" style={{height: 'max-content', position:'relative', top: 18, gap: 15, display: 'inline-flex', alignSelf: 'flex-end'}}>
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
                </div>
            </header>
    );
}

export default Header;