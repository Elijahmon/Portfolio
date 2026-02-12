import { useState } from "react";

import "./styles/resume.css"
import DownloadIcon from "../assets/icons/DownloadIcon.svg" 

function Resume()
{

    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () =>
    {
        setExpanded(!expanded);
    }

    return (
        <div id="Resume" style={{width: '100%',alignSelf: 'stretch', height: 'max-content', position: 'relative', borderRadius: 30}}>
            <div  className='section_header'>
                Resume
            </div>
  
            <div className="resume_panel">
                <div style={{display: 'inline-flex', flexDirection: 'column', width: '100%', alignItems: 'center', marginBottom: '20px'}}>
                    <a href="../assets/docs/ElijahF_Resume.pdf" download className="download_button" style={{justifyContent: 'flex-end', marginBottom: '12px'}}>
                        Download <img src={DownloadIcon} style={{alignSelf: 'end', width:'43px', height:'72px'}}  />
                    </a>
                    <div className="resume_p" style={{margin: '5px 0 5px 0'}}>Or</div>
                    <a onClick={toggleExpand} className="expand_link">Read Online</a>      
                </div>
                {expanded && (
                    <div>
                        <div className="resume_h1">Skills and Experience</div>
                        <div className="resume_skills" style={{padding: '0px 10% 5px 10%'}}>
                        <li>
                            Unity Engine
                        </li>
                        <li>
                            Unreal Engine
                        </li>
                        <li>
                            Godot
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
                    <div className="resume_h2" style={{padding: '5px 0'}}>Web Design Contractor - Current</div>
                    <div className="resume_exp" style={{padding: '0px 10% 5px 6%'}}>
                        <li>
                            Develop prototypes in Figma, focusing on UX and usability for commercial web pages that can be directly translated into usable CSS/HTML for production/release environment
                        </li>
                        <li>
                            Work with front and backend developers to ensure proper usability and functionality specifications/standards are met.
                        </li>
                    </div>
                    <div className="resume_h2" style={{padding: '5px 0'}}>Sr. Game Designer, Nant Games: 2020-2025</div>
                    <div className="resume_exp" style={{padding: '0px 10% 5px 6%'}}>
                        <li>
                            Lead design for feature and systems teams from prototype to release for MythWalker (2024) a Free to Play, Geolocation based, MMORPG. 
                        </li>
                        <li>
                            Ownership of all Progression, Economy, and Monetization systems during development and as live design lead. Usage of Tableau analytics and Excel to create documentation, scripted and automated tools, and identify design opportunities and improvements to include in development and updates.
                        </li>
                        <li>
                            Lead design of key retention and monetization systems such as Character Progression, Crafting, Quests, Storefront/Sales, and Rewards. Establish goals and player profiles, create documentation and tools through development, as well as create and balance content such as characters, items, and quests.
                        </li>
                        <li>
                            Lead design of geolocation map and encounter design, utilizing MapBox and OpenStreetMaps to generate encounters and POIs around the world based on real world locations, regions, weather, and time of day. 
                        </li>
                        <li>
                            Lead design of unique Geolocation Features for Mythwalker, including Energy based navigation, teleporting and the patented Location Tethering system.
                        </li>
                        <li>
                            Assist combat design by creating balance tools, making regular balance updates, and prototyping new functionality for abilities and systems.
                        </li>
                    </div>
                    <div className="resume_h2" style={{padding: '5px 0'}}>Game Designer, Big Huge Games: 2017-2020</div>
                    <div className="resume_exp" style={{padding: '0px 10% 5px 6%'}}>
                        <li>
                            Design and implement in Unity (C#) as a part of a small prototype team through full release core gameplay of Arcane Showdown (2020), including Narrative/Worldbuilding, Card design, Matchmaking, Rewards, Progression, F2P economy balance, and Guilds.
                        </li>
                        <li>
                            Work with KPIs to achieve monetization, retention, and engagement goals, using data driven insights from  live tests, analytics, market research.
                        </li>
                        <li>
                            Design of Live ops Events, Sales, new troops, and general combat balance for Free to Play, PvP Strategy/Base Builder DomiNations (2015)
                        </li>
                        <li>
                            Work in Rapid prototype team, designing and implementing networked gameplay systems in Unreal Engine focused on the  Gameplay Ability System, Blueprints, and C++ for multiplayer PvP projects.
                        </li>
                    </div>
                    <div className="resume_h2" style={{padding: '5px 0'}}>QA Tester I, Big Huge Games: 2016-2017</div>
                    <div className="resume_exp" style={{padding: '0px 10% 5px 6%'}}>
                        <li>
                            Manage Builds and Deployment for testing Mobile development of DomiNations across multiple environments including bundle management for live ops events and sales.
                        </li>
                        <li>
                            Write, update, and evaluate test cases for existing systems and new features with design, engineering, and production.
                        </li>
                        <li>
                            Develop, run, and deploy automated testing for DomiNations within the Unity project in C# as well as through web tools using Python.
                        </li>
                        <li>
                            Work with multiple disciplines tracking content, bugs, and feedback for multiple releases including World War, Global & Atomic Ages, University, and VIP/Treasure Boat.
                        </li>
                    </div>
                    <div className="resume_h2" style={{padding: '5px 0'}}>Unity Developer, Alchemy Learning: 2015</div>
                    <div className="resume_exp" style={{padding: '0px 10% 5px 6%'}}>
                        <li>
                            Develop and implement educational VR games in unity and business development tools using Oculus and GearVR creating levels, scripted sequences, and gameplay systems for the Amazon Experience and the Workfoce Presentation Improvement Experience.
                        </li>
                        <li>
                            Work with Speech Recognition software including SMUSphinx and IBM Watson to categorize, score, and display user public speaking results and offer tailored feedback and improvement areas.                    </li>
                        <li>
                            Work featured on WBAL-TV, Baltimore Business Journal and Technical.ly.
                        </li>
                    </div>
                    <div className="resume_h2" style={{padding: '5px 0'}}>Gameplay Design & Programmer, University of Baltimore: 2014</div>
                    <div className="resume_exp" style={{padding: '0px 10% 5px 6%'}}>
                        <li>
                            Assist in physical construction of University of Baltimore’s onsite C.A.V.E virtual reality system.
                        </li>
                        <li>
                            Lead a student team in developing historic preservation and learning experiences for the Bungamati Temple and Baltimore City Historic Society including research, development in Unity, and testing onsite.
                        </li>
                        <li>
                            Work with students attending the game lab to provide feedback and mentoring for classes and capstone projects.
                        </li>
                    </div>
                    <div className="resume_h2" style={{padding: '5px 0'}}>QA Contractor, Zenimax Online Studios: 2013, 2014, 2016</div>
                    <div className="resume_exp" style={{padding: '0px 10% 5px 6%'}}>
                        <li>
                            Create test cases, track bugs, and provide feedback for Elder Scrolls Online (2014) PC release and subsequent console releases (2015), including working with proprietary engine tools and platform SDKs.
                        </li>
                        <li>
                            Imbedded in dungeon and trial design teams playtesting and providing feedback for future content including Aetherian Archive, Hel Ra Citadel, Craglorn and Imperial City zone releases, including making add-ons using Lua that expedited test processes and exposed technical issues early in development.                     </li>
                        <li>
                            Specialize in live QA, testing and investigating on live environments, monitoring player feedback, and forums to identify, reproduce and regress live issues.
                        </li>
                        <li>
                            Support web team developing automated tests in Ruby for purchasing through ESO web storefront.
                        </li>
                    </div>
                    <div className="resume_h1" style={{padding: '25px 0 0 0'}}>Volunteer Work</div>
                    <div className="resume_exp" style={{padding: '0px 10% 5px 6%'}}>
                        <li>
                            Baltimore Animal Rescue and Care Shelter - Videography and Editing
                        </li>
                        <li>
                            Code in the Schools - Mentoring
                        </li>
                    </div>
                </div>
                )}
            </div>  
        </div>
    );
}

export default Resume;
