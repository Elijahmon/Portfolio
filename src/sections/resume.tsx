import "./styles/resume.css"

function Resume()
{
    return (
        <div id="Resume" style={{width: '100%',alignSelf: 'stretch', height: 'max-content', position: 'relative', borderRadius: 30}}>
            <div  className='section_header'>
                Resume
            </div>
            <div className="resume_panel">
                <div className="resume_header">
                    Technical Skills and Experience
                </div>
                <div className="resume_skills">
                    <li>
                        Unity Engine
                    </li>
                    <li>
                        Unreal Engine
                    </li>
                    <li>
                        Blender
                    </li>
                    <li>
                        C languages (C#/C++)
                    </li>
                    <li>
                        Microsoft Office Suite
                    </li>
                    <li>
                        Adobe Suite
                    </li>
                    <li>
                        Google Suite
                    </li>
                    <li>
                        Figma
                    </li>
                    <li>
                        HTML/CSS
                    </li>
                </div>
            </div>  
        </div>
    );
}

export default Resume;
