import "./styles/contact.css"
import LinkedInIcon from "../assets/icons/LinkedInIcon.svg"
import MailIcon from "../assets/icons/MailIcon.svg"
import GitIcon from "../assets/icons/GitHubIcon.svg"
import PandaIcon from "../assets/icons/PandamoniumIcon.svg"
import PandaText from "../assets/icons/PandamoniumText.svg"

function Contact()
{
    return (
        <div id="Contact" style={{alignSelf: 'stretch', height: 'max-content', position: 'relative', borderRadius: 30}}>
            <div  className='section_header'>
                Contact
            </div>
            <div className="contact_h1" style={{}}>
                Contact me through any of these platforms, I will try to answer as soon as possible. 
            </div>
            <div style={{position: 'relative', display: 'inline-flex', width: '100%', gap: '50px', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', margin: '32px 12px 12px 12px' }}>
                <a href="mailto:elijahmon@live.com" className="contact_button"><img className='contact_icon' src={MailIcon} style={{}} /></a>
                <a href="https://www.linkedin.com/in/elijah-fernandez-663ab9b6/" className="contact_button"><img className='contact_icon' src={LinkedInIcon} style={{}} /></a>
                <a href="https://github.com/elijahmon" className="contact_button"><img className='contact_icon' src={GitIcon} style={{}} /></a>
                <a href="mailto:info@pandamoniumstudios.org" className="contact_button"><img className='contact_icon' src={PandaIcon} style={{width: '120px', height: '88px'}} /><img src={PandaText} style={{margin: '0 0 5px 0'}}/></a>
            </div>
        </div>
    );
}

export default Contact;
