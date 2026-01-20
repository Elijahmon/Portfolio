import "../sections/styles/projects.css"

function Project_Detail({label, text})
{

    return (
        <div className="project_detail">
            <div className="project_detail_label">
                {label}:
            </div>
            <div className="project_detail_text">
                {text}
            </div>
        </div>
    );
}

export default Project_Detail;

