import "../sections/styles/projects.css"

import Project_Detail from "../components/project_detail";

function Project({project, onOpen})
{
    const { name, role, splashImage, splashPosition, highlightImage, released, studio, genre, platforms } = project;

    return (
        <div className="project_panel">
            <button className="project_button" onClick={() => onOpen(project)}
                style={{ backgroundImage: `url(${splashImage})`, backgroundPosition: `${splashPosition}` }}>
                <div className="project_hover_panel">
                    <div className="project_skills_header">
                        Skills, Systems, & Features
                    </div>
                </div>
            </button>
            
            <div style={{ maxWidth: "50%", minWidth: "50%", display: "inline-flex", alignSelf: "top", alignItems: "self-start", flexDirection: "column"}}>
                <div className="project_name">
                    {name}
                </div>
                <div className="project_details">

                    <div className="project_info_detail">
                        {role}
                    </div>
                    <div className="project_details_hover_panel">
                        {released.length > 0 && (<Project_Detail label="Released" text={released} />)}
                        {studio.length > 0 && (<Project_Detail label="Studio" text={studio} />)}
                        {genre.length > 0 && (<Project_Detail label="Genre" text={genre} />)}
                        {platforms.length > 0 && (<Project_Detail label="Platforms" text={platforms} />)}
                        {role.length > 0 && (<Project_Detail label="Role" text={role} />)}
                    </div>
                    <span className="project_highlight" style={{ backgroundImage: `url(${highlightImage})` }} />
                </div>
            </div>
        </div>
    );
}

export default Project;


