import "../sections/styles/projects.css"

function Project({project, onOpen})
{
    const { name, role, splashImage, splashPosition, highlightImage } = project;

    return (
        <div className="project_panel">
            <button className="project_button" onClick={() => onOpen(project)}
                style={{ backgroundImage: `url(${splashImage})`, backgroundPosition: `${splashPosition}` }} 
            />
            <div className="project_hover_panel"/>
            <div className="project_details">
                <span className="project_name">
                    {name}
                </span>
                <span className="project_info_detail">
                    {role}
                </span>
                <span className="project_highlight" style={{ backgroundImage: `url(${highlightImage})` }} />
            </div>
        </div>
    );
}

export default Project;


