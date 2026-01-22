import "../sections/styles/projects.css"

function Project_Tag_Grid({type, tags})
{
    return (
        
        <div>
            {tags.length > 0 && (
                        <div style={{width: '100%', alignItems: 'flex-start', display: 'inline-flex', flexDirection: "row", gap: '10px', flexWrap: 'wrap'}}>
                            { 
                                tags.map((tag, index) => (
                                    <div key={index} className={type} style={{}}>
                                        {tag}
                                    </div>
                                )) 
                            }
                        </div>
            )}
        </div>
        
    );
}

export default Project_Tag_Grid;