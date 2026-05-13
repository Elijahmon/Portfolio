
import "../sections/styles/projects.css"

import Project_Detail from "../components/project_detail";

import TimeIcon from "../assets/icons/TimeIcon.svg"

function Project({ project, onOpen }) {
    const { id, name, role, splashImage, splashPosition, highlightImage, releaseMonth, releaseYear, studio, genre, platforms, duration, summary, website } = project;

    return (
        <div className="project_panel">
            <div className="project_button"
                style={{ backgroundImage: `url(${splashImage})`, backgroundPosition: `${splashPosition}` }}>
                <div className="project_hover_panel">
                    <div className="project_duration_panel">
                        <img className="project_duration_img" src={TimeIcon} />
                        <span className="project_duration_text"> {duration} </span>
                        {website.length > 0 && (
                            <a href={website} target="_blank" className="project_detail_button" style={{
                                minWidth: '100px', maxHeight: '80%',
                                padding: '5px 20px 5px 20px', justifySelf: 'center', alignSelf: 'center', margin: '0px 10px 0px 20px', fontSize: '40px', textDecoration: 'none'
                            }}>
                                Website
                            </a>
                        )}
                    </div>
                    <div className="project_summary">{summary}</div>
                    <button onClick={() => onOpen(project)} className="project_detail_button" style={{
                        minWidth: '180px', maxHeight: '80%',
                        padding: '5px 20px 5px 20px', alignSelf: 'center', margin: '0px 10px 12px 20px', fontSize: '32px'
                    }}>
                        Read More
                    </button>
                </div>
            </div>

            <div style={{ maxWidth: "50%", minWidth: "50%", height: '100%', display: "inline-flex", flex: '1', alignSelf: "top", alignItems: "self-start", flexDirection: "column" }}>
                <div className="project_name">
                    {name}
                </div>
                <div className="project_details">

                    <div className="project_info_detail">
                        {role}
                    </div>
                    <div className="project_details_hover_panel">
                        {releaseYear.length > 0 && (<Project_Detail label="Released" text={releaseMonth + " " + releaseYear} />)}
                        {studio.length > 0 && (<Project_Detail label="Studio" text={studio} />)}
                        {genre.length > 0 && (<Project_Detail label="Genre" text={genre} />)}
                        {platforms.length > 0 && (<Project_Detail label="Platforms" text={platforms} />)}
                    </div>
                    <span className="project_highlight" style={{ backgroundImage: `url(${highlightImage})` }} />
                </div>
            </div>
        </div>
    );
}

export default Project;


