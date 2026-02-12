import "../sections/styles/projects.css"
import { useRef } from "react";

import Project_Tag_Grid from "./project_tag_grid";

function Project_Highlight({highlight})
{
    const {title, toolTags, skillTags, highlightImages, subImages, description} = highlight;

    return (
        <div style={{display: 'inline-flex', alignContent: 'flex-start', flexDirection: 'column', height: 'max-content'}}>
            <div className="project_highlight_header">
                {title}
            </div>
            <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '15px', margin: '20px 0 30px 0'}}>
                {toolTags.length > 0 && (
                            <Project_Tag_Grid type="project_tool_tag" tags={toolTags} />
                        )}
                {skillTags.length > 0 && (
                            <Project_Tag_Grid type="project_skill_tag" tags={skillTags} />
                        )}
            </div>
            <div style={{display: 'inline-flex', flexDirection: 'row', gap: '30px'}}>
                {highlightImages.length > 0 && (
                    
                        highlightImages.map((image, index) => 
                        (
                            <img key={index} src={image} className="project_highlight_image" />
                        ))
                    
                )}
                <div style={{display: 'inline-flex', maxWidth: "72%", flexDirection: "column"}}>
                    <div style={{display: "inline-block", maxWidth: "100%", height: "auto", flexDirection:"row", overflow: "auto", whiteSpace: "nowrap" }}>
                        {subImages.length > 0 && (
                            
                                subImages.map((image, index) => 
                                (
                                        <img key={index} src={image} className="project_sub_image" />
                                ))
                            
                        )}
                    </div>
                    <p className="project_highlight_body" >
                        {description}
                    </p>
                </div>
            </div>
            
            <div className="section_divider" style={{margin: '30px 0 30px 0', padding: '0', width: '100%', opacity: '0.33'}}/>
        </div>
    );
}

export default Project_Highlight;
