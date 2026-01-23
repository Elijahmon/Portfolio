import "../sections/styles/projects.css"
import { useRef } from "react";

import Project_Tag_Grid from "./project_tag_grid";

function Project_Highlight({highlight})
{
    const {title, toolTags, skillTags, highlightImage, description} = highlight;

    return (
        <div style={{display: 'inline-flex', alignContent: 'flex-start', flexDirection: 'column'}}>
            <div className="project_highlight_header">
                {title}
            </div>
            <div style={{ display: 'inline-flex', flexDirection: 'row', gap: '15px', margin: '20px 0 30px 0'}}>
                {toolTags.length > 0 && (
                            <Project_Tag_Grid type="project_tool_tag" tags={toolTags} />
                        )}
                {skillTags.length > 0 && (
                            <Project_Tag_Grid type="project_skill_tag" tags={skillTags} />
                        )}
            </div>
            <div style={{display: 'inline-flex', flexDirection: 'row', overflow: 'wrap', gap: '30px'}}>
                <img src={highlightImage} style={{width: '450px', height: '450px'}} />
                <div className="project_highlight_body" >
                    {description}
                </div>
            </div>
            <div className="section_divider" style={{margin: '30px 0 30px 0', padding: '0', width: '100%', opacity: '0.33'}}/>
        </div>
    );
}

export default Project_Highlight;
