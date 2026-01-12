import "./about.css"

function About()
{
    return (
        <div style={{alignSelf: 'stretch', height: 725, position: 'relative', borderRadius: 30}}>
            <h1 style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
                About
            </h1>
            <div className="about_panel">
                <div style={{width: '75%', top: 45, position: 'relative', alignItems: 'flex-end'}}>
                    <p className="about_header">
                        I am a Generalist Game Designer with over 10 years of experience building games from simple prototypes to live service experiences enjoyed by millions of players worldwide.
                    </p>
                </div>
            </div>  
        </div>
    );
}

export default About;

