import "./about.css"

function About()
{
    return (
        <div style={{alignSelf: 'stretch', height: 725, position: 'relative', borderRadius: 30}}>
            <h1 style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
                About
            </h1>
            <div className="about_panel">
                <div className="details">
                    <div style={{display: 'flex', flexDirection: "column", gap: 15}}>
                        <div className="about_header">
                            I am a Generalist Game Designer with over 10 years of experience building games from simple prototypes to live service experiences enjoyed by millions of players worldwide.
                        </div>
                        <div className="about_details">
                            I have a hard time confining myself within specializations or specific roles within game development. I really just love the process! Creating a lasting empathetic experience through iteration and feedback with a passionate team has no equal.
                        </div>
                        <div className="about_details">
                            In my career I have similarly had a broad experience in development. I created tools focused on testing and balancing combat in Elder Scrolls Online, created troops and ran live service events for DomiNations, prototyped much of the gameplay, progression, and monetization systems in Arcane Showdown, and lead early development and held ownership of features and systems that spanned the entire world for MythWalker.                        
                        </div>
                        <div className="about_details">
                           When leading multidisciplinary teams, I focus on fostering clear communication and iterative development. Collaboration and learning are central to my approach Ensuring that every perspective is considered to arrive at the best solution available. I look forward to exploring new opportunities, to work alongside other passionate developers, and building innovative games that players just can’t put down!
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default About;

