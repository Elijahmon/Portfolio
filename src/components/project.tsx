import React, {PropTypes, Component} from 'react'
import "../sections/projects.css"

function Project({projectSplash, projectHighlight})
{
    const splashImage = use(projectSplash);
    const highlightIamge = use(projectHighlight);
    return (
        <div className="project_panel">
            <button className="project_button" style={{backgroundImage: `url(${splashImage})`, backgroundPositionX: '100%'}} />
            <div className="project_details">
                <span className="project_name">
                    MythWalker
                </span>
                <span className="project_info_detail">
                    Senior Game Designer / Live Design Lead
                </span>
                <span className="project_highlight" style={{backgroundImage: `url(${highlightIamge})`}} />
            </div>
        </div>
    );
}

export default Project;


