import "../sections/styles/projects.css"
import Project_Tag_Grid from "./project_tag_grid";
import Project_Highlight from "./project_highlight";

function Project_Overlay({project})
{
    const { id, name, role, splashImage, splashPosition, highlightImage, releaseMonth, releaseYear, 
        studio, genre, platforms, duration, summary, toolTags, skillTags, overlayImage, highlights } = project;

    return (
        <div className="project_overlay_panel" style={{}}>
            <div style={{display: 'inline-flex', flexDirection: 'row'}}>
                <div style={{maxWidth: '70%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <div style={{ display: 'inline-flex', flexDirection: 'row', gap: '35px'}}>
                        <div className="project_name" style={{fontSize: '96px', padding: '0'}}>
                        {name}
                        </div>
                        <div style={{width: '10px', height: '85%', alignSelf: 'center', background: 'linear-gradient(180deg, var(--My-Gold, #FFC933) 60%, #B88C14 100%)', borderRadius: 5}} />
                        <div className="project_release">
                            {releaseYear}
                        </div>
                    </div>
                    <div style={{ alignContent: 'left', margin: '25px 0 25px 0'}}>
                        <div className="project_detail_text" style={{fontSize: '42px'}}>
                            {role}
                        </div>
                    </div>
                    <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '15px'}}>
                        {toolTags.length > 0 && (
                            <Project_Tag_Grid type="project_tool_tag" tags={toolTags} />
                        )}
                        {skillTags.length > 0 && (
                            <Project_Tag_Grid type="project_skill_tag" tags={skillTags} />
                        )}
                    </div>
                
                </div>
                <img src={overlayImage} style={{maxWidth: '30%', maxHeight: '450px'}} />
            </div>
            <div>
                <div className="project_name" style={{display: 'block', width: '100%', fontSize: '48px', textAlign: 'center', padding: '15px 0 15px 0'}}>
                    Project Highlights
                </div>
            </div>
            <div className="section_divider" style={{margin: '15px 0 15px 0', padding: '0', position: 'relative', left: '-8%'}}/>
            <div style={{width: '100%', display: 'inline-flex', flexDirection: 'column'}}>
                { 
                    highlights.map((highlight) => 
                    (<Project_Highlight key={highlight.title} highlight={highlight} />)) 
                }
            </div>
        </div>
    );
}

export default Project_Overlay;
