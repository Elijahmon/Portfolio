import "./projects.css"

import MW_Splash from "../assets/images/MW_Splash.png"
import MW_Highlights from "../assets/images/MW_HighlightImages.png"

import AS_Splash from "../assets/images/Arcane_Splash.png"
import AS_Highlights from "../assets/images/AS_HighlightImages.png"

import DOM_Splash from "../assets/images/Dom_Splash.png"
import DOM_Highlights from "../assets/images/DOM_HighlightImages.png"


import ESO_Splash from "../assets/images/ESO_Splash.png"
import ESO_Highlights from "../assets/images/ESO_HighlightImages.png"

import AMAZON_Splash from "../assets/images/Amazon_Splash.png"


import WORK_Splash from "../assets/images/Workforce_Splash.png"



function Projects()
{
    return (
        <div style={{alignSelf: 'stretch', width: '100%', height: 'max-content', position: 'relative', display: "flex", flexDirection: 'column'}}>
            <div className='section_header'>
                Projects
            </div>
            <div className="projects_list">
                <div className="project_panel">
                    <button className="project_button" style={{backgroundImage: `url(${MW_Splash})`, backgroundPositionX: '100%'}} />
                    <div className="project_details">
                        <span className="project_name">
                            MythWalker
                        </span>
                        <span className="project_info_detail">
                            Senior Game Designer / Live Design Lead
                        </span>
                        <span className="project_highlight" style={{backgroundImage: `url(${MW_Highlights})`}} />
                    </div>
                </div>
                <div className="project_panel">
                    <button className="project_button" style={{backgroundImage: `url(${AS_Splash})`}} />
                    <div className="project_details">
                        <span className="project_name">
                            Arcane Showdown
                        </span>
                        <span className="project_info_detail">
                            Systems & Technical Game Designer
                        </span>
                        <span className="project_highlight" style={{backgroundImage: `url(${AS_Highlights})`}} />
                    </div>
                </div>
                <div className="project_panel">
                    <button className="project_button" style={{backgroundImage: `url(${DOM_Splash})`}} />
                    <div className="project_details">
                        <span className="project_name">
                            DomiNations
                        </span>
                        <span className="project_info_detail">
                            Live Game Designer
                        </span>
                        <span className="project_highlight" style={{backgroundImage: `url(${DOM_Highlights})`}} />
                    </div>
                </div>
                <div className="project_panel">
                    <button className="project_button" style={{backgroundImage: `url(${ESO_Splash})`}} />
                    <div className="project_details">
                        <span className="project_name">
                            Elder Scrolls Online
                        </span>
                        <span className="project_info_detail">
                            QA Tester / Automation Engineer
                        </span>
                        <span className="project_highlight" style={{backgroundImage: `url(${ESO_Highlights})`}} />
                    </div>
                </div>
                <div className="project_panel">
                    <button className="project_button" style={{backgroundImage: `url(${AMAZON_Splash})`}} />
                    <div className="project_details">
                        <span className="project_name">
                            Amazon Experience
                        </span>
                        <span className="project_info_detail">
                            Game Developer
                        </span>
                        <span className="project_highlight" style={{backgroundImage: `url(${MW_Highlights})`}} />
                    </div>
                </div>
                <div className="project_panel">
                    <button className="project_button" style={{backgroundImage: `url(${WORK_Splash})`}} />
                    <div className="project_details">
                        <span className="project_name">
                            Workforce Development
                        </span>
                        <span className="project_info_detail">
                            Game Developer
                        </span>
                        <span className="project_highlight" style={{backgroundImage: `url(${MW_Highlights})`}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;