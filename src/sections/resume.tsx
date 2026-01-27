import "./styles/resume.css"

function Resume()
{
    return (
        <div id="Resume" style={{width: '100%',alignSelf: 'stretch', height: 'max-content', position: 'relative', borderRadius: 30}}>
            <div  className='section_header'>
                Resume
            </div>
            <div className="resume_panel">
                <div className="resume_h1">Skills and Experience</div>
                <div className="resume_skills" style={{padding: '0px 10% 5px 10%'}}>
                    <li>
                        Unity Engine
                    </li>
                    <li>
                        Unreal Engine
                    </li>
                    <li>
                        Data-Driven Design
                    </li>
                    <li>
                        System Design
                    </li>
                    <li>
                        Monetization
                    </li>
                    <li>
                        Live Ops
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
                        JavaScript/TypeScript
                    </li>
                    <li>
                        HTML/CSS
                    </li>
                    <li>
                        Blender
                    </li>
                </div>
                <div className="resume_h1" style={{padding: '5px 0'}}>Education</div>
                <div className="resume_h2" style={{padding: '5px 0'}}>B.S. in Simulation and Digital Entertainment – University of Baltimore</div>
                <div className="resume_skills" style={{padding: '0px 10% 5px 6%'}}>
                    <li>
                        Graduated Cum Laude
                    </li>
                    <li>
                        Game Lab Fellow
                    </li>
                    <li>
                        Inspired Discoveries 2015 winner with Project "Relic"
                    </li>
                </div>
                <div className="resume_h1" style={{padding: '5px 0'}}>Professional Experience</div>
                <div ></div>
            </div>  
        </div>
    );
}

export default Resume;
