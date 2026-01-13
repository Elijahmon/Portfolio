import "./projects.css"

import MW_Splash from "../assets/MW_Splash.png"
import MW_Highlights from "../assets/MW_HighlightImages.png"

import AS_Splash from "../assets/Arcane_Splash.png"
import DOM_Splash from "../assets/Dom_Splash.png"
import ESO_Splash from "../assets/ESO_Splash.png"
import AMAZON_Splash from "../assets/Amazon_Splash.png"
import WORK_Splash from "../assets/Workforce_Splash.png"



function Projects()
{
    return (
        <div style={{alignSelf: 'stretch', height: 'max-content', position: 'relative'}}>
            <div className='section_header'>
                Projects
            </div>
            <div className="projects_list">
                <div className="project_panel">
                    <button className="project_button" style={{backgroundImage: `url(${MW_Splash})`}} />
                    <div className="project_details">
                        <span className="project_name">
                            MythWalker
                        </span>
                        <span className="project_info_detail">
                        Senior Game Designer / Live Design Lead
                        </span>
                        <span style={{minHeight: 380, minWidth: 780, backgroundImage: `url(${MW_Highlights})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', flexGrow: 4}} />
                    </div>
                    
                </div>
                <div className="project_panel">
                    <button className="project_button" style={{backgroundImage: `url(${AS_Splash})`}} />
                </div>
                <div className="project_panel">
                    <button className="project_button" style={{backgroundImage: `url(${DOM_Splash})`}} />
                </div>
                <div className="project_panel">
                    <button className="project_button" style={{backgroundImage: `url(${ESO_Splash})`}} />
                </div>
                <div className="project_panel">
                    <button className="project_button" style={{backgroundImage: `url(${AMAZON_Splash})`}} />
                </div>
                <div className="project_panel">
                    <button className="project_button" style={{backgroundImage: `url(${WORK_Splash})`}} />
                </div>
            </div>
        </div>
    );
}

export default Projects;