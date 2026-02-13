
import MW_Splash from "../assets/images/MW_Splash.png"
import UNR_Splash from "../assets/images/UNR_Splash.png"
import AS_Splash from "../assets/images/Arcane_Splash.png"
import DOM_Splash from "../assets/images/Dom_Splash.png"
import ESO_Splash from "../assets/images/ESO_Splash.png"
import Amazon_Splash from "../assets/images/Amazon_Splash.png"
import Workforce_Splash from "../assets/images/Workforce_Splash.png"

import MW_Highlights from "../assets/images/MW_HighlightImages.png"
import UNR_Highlights from "../assets/images/UNR_HighlightImages.png"
import AS_Highlights from "../assets/images/AS_HighlightImages.png"
import DOM_Highlights from "../assets/images/DOM_HighlightImages.png"
import ESO_Highlights from "../assets/images/ESO_HighlightImages.png"
import Amazon_Highlights from "../assets/images/Amazon_HighlightImages.png"
import Workforce_Highlights from "../assets/images/Workforce_HighlightImages.png"

import MW_Overlay from "../assets/images/MW_OverlayImg.png"

import MW_CraftHighlight from "../assets/images/MW_crafthighlight.png"
import MW_CharHighlight from "../assets/gifs/MW_charhighlightgif.gif"
import MW_QuestHighlight from "../assets/images/MW_questhighlight.jpg"
import MW_HeroHighlight from "../assets/images/MW_herohighlight.png"
import MW_EnemiesHighlight from "../assets/images/MW_enemieshighlight.png"
import MW_MinigameHighlgiht from "../assets/images/MW_minigamehighlight.png"
import MW_GeoHighlight from "../assets/images/mw_geohighlight.png"
import MW_GeoHighlgiht2 from "../assets/images/MW_geohighlight2.webp"
import MW_GeoHighlightGif from "../assets/gifs/MW_geohighlightgif.gif"
import MW_PortalHighlight from "../assets/images/MW_portalhighlight.png"
import MW_CombatHighlight from "../assets/gifs/MW_combathighlightgif.gif"
import MW_ExploreHighlight from "../assets/images/MW_explorehighlight.png"
import MW_LiveOpsHighlight from "../assets/images/MW_liveopshighlight.png"
import MW_MultiplayerHighlight from "../assets/images/MW_multiplayerhighlight.png"
import MW_TransmogHighlight from "../assets/images/MW_transmoghighlight.jpg"
import MW_EventHighlight from "../assets/images/MW_lunarhighlight.jpg"

import UNR_GASHighlight from "../assets/images/FUFA_GasHighlight.png"

import AS_SideHighlight from "../assets/images/AS_sidehighlight.jpg"
import AS_ShopHighlight from "../assets/images/AS_shophighlight.jpg"
import AS_DeckHighlight from "../assets/images/AS_deckhighlight.jpg"
import AS_DuelHighlight from "../assets/images/AS_duelhighlight.jpg"
import AS_InfoHighlight from "../assets/images/AS_infohighlight.jpg"
import AS_TrialHighlight from "../assets/images/AS_trialhighlight.jpg"
import AS_VictoryHighlight from "../assets/images/AS_victoryhighlight.jpg"
import AS_LevelupHighlight from "../assets/images/AS_leveluphighlight.jpg"
import AS_MenuHighlight from "../assets/images/AS_menuhighlight.jpg"
import AS_CollectHighlgiht from "../assets/images/AS_collect.jpg"

import DOM_EventHighlight from "../assets/images/DOM_eventhighlight.webp"
import DOM_EventHighlight2 from "../assets/images/DOM_eventhighlight2.webp"
import DOM_EventHighlight3 from "../assets/images/DOM_eventhighlight3.webp"
import DOM_EventHighlight4 from "../assets/images/DOM_eventlist.jpg"
import DOM_TroopHighlight from "../assets/images/DOM_troop.webp"
import DOM_TroopHighlight1 from "../assets/images/DOM_troop1.jpg"
import DOM_TroopHighlight2 from "../assets/images/DOM_troop2.png"
import DOM_TroopHighlight3 from "../assets/images/DOM_troop3.png"
import DOM_VictoryHighlight from "../assets/images/DOM_victoryhighlight.jpg"

export const projects = [
    {
        id: "mythwalker",
        name: "Mythwalker",
        role: "Senior Game Designer / Live Design Lead",
        duration: "5 Years",
        summary: 'MythWalker is a Mobile Geo-Location MMORPG. Players explore the globe using their real location and portals, fighting monsters, collecting materials, and completing quests to help save Mytherra from the Dragon Invasion. ',

        releaseMonth: "November",
        releaseYear: "2024",
        studio: "NantGames",
        genre: "Geolocation MMORPG",
        platforms: "Android & iOS",
        website: "https://mythwalker.com/",

        toolTags: ["Unity", "C#", "Git", "Excel", "Tableau", "JIRA", "Machinations"],
        skillTags: ["Progression", "Economy", "Monetization", "Geolocation", "Combat", "Crafting", "Quests", "Social", "Live Ops", "UI/UX", "Prototyping", "Analytics"],

        highlights: [
            {
                title: "Geolocation Design",
                toolTags: ["Unity", 'C#', "Excel", "OpenStreetMaps"],
                skillTags: ["Geolocation", "Prototyping", "Progression",  "Monetization", "Social", "Analytics"],
                
                description: "I am especially proud of the design of several geolocation specific systems that I lead design for on MythWalker. Mapping meaningful gameplay choices across the entire world is essentially a cursed problem, but knowing that we came up with some novel solutions.\n\nOne such solution was the world map spawn system for MythWalker, which mapped the world using S2 Geometry into themed biomes, to spawn dynamic enemy encounters, and map static POIs for gameplay systems and quests. We utilized MapBox to visualize the Mytherran version of earths roads and buildings and OpenStreetMaps to generate encounters and POIs around the world based on real world locations, regions, weather, and time of day.\n\nRealistic representation was only a part of the equation when generating the world, gameplay, particularly resource types and currencies were tied to the encounters and POI gathering minigames spawned from this data. The “real world” is not particularly well balanced when it comes to certain resources, for MythWalker this was especially dependent on the players class (i.e. warriors need large amounts of ore, while spellslingers need large amounts of wood).\n\nThe bulk of this balance was handled on the design side, weighting spawn rate, managing loot rewards from encounters, and finding opportunities within these constraints, like making it possible to hunt enemies during specific weather/time of day combinations (since these also affected spawns). This worked best in conjunction with the subsequent systems for teleporting, portals, and tethering, which allowed players to move separate from their GPS location, create return points around the world, and join each other remotely to hunt and play together anywhere in the world.",

                highlightImages: [MW_GeoHighlightGif],
                subImages: [MW_ExploreHighlight, MW_GeoHighlgiht2, MW_PortalHighlight, MW_GeoHighlight],
            },
            {
                title: "Player Progression",
                toolTags: ["Unity", "C#", "Excel", "Confluence", "Machinations", "Photoshop" ],
                skillTags: ["Prototyping", "Progression", "Economy", "Crafting", "Quests", "Social", "UI/UX", "Combat"],

                description: "I also owned and maintained the progression and economy of in game and real money shops, crafting, quest, and rewards across the game. I leveraged my technical background when working with the complex intermingled economic systems of the game to create our system of documentation. Using Excel and Unity Editor scripting I developed scripts and automated tools that were used to simulate and test “on paper” to lay the groundwork for features and updates as well as remove manual steps when updating data. This was also useful to assist with combat by creating balance tools, making regular balance updates, and prototyping new functionality for abilities and systems.",
                
                highlightImages: [MW_CharHighlight],
                subImages: [MW_HeroHighlight, MW_CraftHighlight, MW_EnemiesHighlight, MW_MinigameHighlgiht, MW_MultiplayerHighlight],
            },
            /*{
                title: "Player Monetization",
                toolTags: ["Excel", "Confluence", "Machinations", "Photoshop"],
                skillTags: ["Monetizaion", ],

                description: "I also owned and maintained the progression and economy of in game and real money shops, crafting, quest, and rewards across the game. I leveraged my technical background when working with the complex intermingled economic systems of the game to create our system of documentation. Using Excel and Unity Editor scripting I developed scripts and automated tools that were used to simulate and test “on paper” to lay the groundwork for features and updates as well as remove manual steps when updating data. This was also useful to assist with combat by creating balance tools, making regular balance updates, and prototyping new functionality for abilities and systems."
            },*/
            {
                title: "Live Ops",
                toolTags: ["Unity", "C#", "Tableau", "Photoshop"],
                skillTags: ["Live Ops", "Prototyping", "Analytics", "Monetization"],

                description: "After launch I transitioned to a role as the Live Designer using analytics and feedback to plan and lead development of patches, content updates, as well as prototype “mini features” that could be developed into live releases such as Weather Effects, Quest Tracker, and Portal Quests. I engaged with the community directly, speaking with players and following up on feedback/bugs reported as well as leveraging analytics to track their behavior at scale to identify issues. I worked much more in editor editing code, UI layouts, and creating new functionality where it was needed. The team I lead was constantly shifting depending on other studio needs so I often would take a scrappy approach, re-using or expanding something that already existed, or creating it myself when there were no resources available from the Engineering and Art departments.",

                highlightImages: [MW_CombatHighlight,],
                subImages: [MW_LiveOpsHighlight, MW_QuestHighlight, MW_TransmogHighlight, MW_EventHighlight],
            },
        ],

        /* assets */
        splashImage: MW_Splash,
        splashPosition: "100% 50%",

        highlightImage: MW_Highlights,

        overlayImage: MW_Overlay,
    },
    {
        id: "fufa", /* :( */
        name: "Unrealeased Project",
        role: "Systems & Technical Game Designer",
        duration: "16 Months",
        summary: 'This project was a competitive strategy game, a mashup between Mario Strikers and Bloodbowl. Using Unreal, leveraging GAS for Multiplayer gameplay and progression. Unfortunately it was cancelled as a part of the company being sold.',

        releaseMonth: "",
        releaseYear: "",
        studio: "Big Huge Games",
        genre: "Strategy (PvP)",
        platforms: "Android, iOS & Steam",
        website: "",

        toolTags: ["Unreal", "Blueprints", "C++", "Gameplay Ability System", "Perforce", "Excel",],
        skillTags: [ "Prototyping", "Gameplay Scripting", "VFX", "UMG", "Progression", "Economy", "Monetization",],

        highlights: [
            {
                title: "Gameplay Ability System",
                toolTags: ["Unreal", "Gameplay Ability System", 'C++', "Blueprints"],
                skillTags: ["Prototyping", "Progression", "Combat Balance", "Multiplayer"],
                
                description: "For this project I primarily worked with Unreal's Gameplay Ability System (GAS). I was charged with designing and implementing networked gameplay for the core real time PvP game loop. I became profecient in end to end implementation of abilities from low level logic to visual effects timing and triggers, working between C++ and Blueprints I created over 25 abilities and balanced their uncapped scaling model that was important for our monetization model.",

                highlightImages: [UNR_GASHighlight],
                subImages: [],
            },
        ],

        /* assets */
        splashImage: UNR_Splash,
        splashPosition: "",
        highlightImage: UNR_Highlights,

        overlayImage: UNR_Splash,
    },
    {
        id: "arcane",
        name: "Arcane Showdown",
        role: "Systems & Technical Game Designer",
        duration: "3 Years",
        summary: 'Arcane Showdown is a Card Based PvP Strategy game. Players collect and level up characters and cards which they use to duel other players and win rewards. Duels which incorporate base building and territory control across a variety of maps and game modes.',

        releaseMonth: "September",
        releaseYear: "2020",
        studio: "Big Huge Games",
        genre: "Card / Strategy (PvP)",
        platforms: "Android, iOS & Steam",
        website: "https://bighugegames.com/arcane-showdown/",

        toolTags: ["Unity", "C#", "Git", "Excel", "Tableau", "JIRA"],
        skillTags: [ "Prototyping", "Combat Design", "Card Design", "Multiplayer", "Progression", "Economy", "Monetization", "Live Ops",],

        highlights: [
            {
                title: "Strategy & Card Design",
                toolTags: ["Unity", "C#", "Photoshop"],
                skillTags: ["Prototyping", "Multiplayer", "Combat Design", "Balance"],
                
                description: 'Arcane Showdown was the result of many iterations of rapid prototyping around the central goal of bringing classic RTS gameplay to mobile. During prototpying I filled the role of a technical designer, working from concept to completion on core gameplay features and systems that laid the foundation of the Card design, Base Building, Territory Control, Matchmaking, Rewards, and Progression.\n\nThe core reward structure in the final game was functionally the same as the one I implemented on the first prototype (codenamed "Imperial") and much of the units stats and behaviors remained consistent with the base ruleset I had created during the second (codenamed "Merlin"). I worked "full stack" working on both front and backend logic that drove gameplay and progression during prototype allowing us to share and distibute the game for multiplayer playtests while keeping the team small and agile.',
                highlightImages: [AS_SideHighlight],
                subImages: [AS_DuelHighlight, AS_DeckHighlight, AS_InfoHighlight, ],
            },
            {
                title: "Economy and Monetization",
                toolTags: ["Unity", "C#", "Excel"],
                skillTags: ["Economy", "Monetization", "Progression", "Balance", "Social"],
                
                description: "My largest single contribution to Arcanse Showdown was ownership of the games Economy and Monetization model creating and supporting the resulting reward, event, and social systems at its heart. We leveraged Gacha based collection tied to PvP ranks and participation in Live Ops events to keep players engaged and create a high user LTV that we could leverage content across. \n\nI was responsible for balancing the progression of cards and players to keep the strategic gameplay at the forefront while allowing the metagame of a players collection to influence their overall power. This included creating new content and rewards structures as we created new maps, game modes, and cards. \n\nI created a structure of tools primarily through Google Sheets that interfaced with an inhouse toolset to allow other designers to easily balance future rewards and events easily as well as compare to analytics to make updates and balance fixes that we could deploy quickly and at low risk.",

                highlightImages: [AS_LevelupHighlight],
                subImages: [AS_VictoryHighlight, AS_MenuHighlight,AS_CollectHighlgiht],
            },
            {
                title: "Live Ops",
                toolTags: ["Unity", "C#", "Tablau", "Excel"],
                skillTags: ["Live Ops", "Analytics", "Social", "Economy", "Monetization", "Progression", "Events"],
                
                description: "I continued to support Arcane Showdown after release focusing on Live Ops and new feature development. Creating new game modes and maps as well as maintaining the economy and balance of the game, particularly by leveraging analnytics. I created events and sales that drew players in boosting our metrics and allowing us to attain featuring for several releases.\n\nA few key updates to the game were the Trials (Events) that added a recurring tournament style mode that we used to preview and test new cards and maps for functionality and popularity before release, and Guilds which allowed players to connect with others to communicate, trade cards, and participate in events and battles with their guildmates",

                highlightImages: [AS_SideHighlight],
                subImages: [AS_ShopHighlight, AS_TrialHighlight],
            },
        ],

        /* assets */
        splashImage: AS_Splash,
        splashPosition: "",
        highlightImage: AS_Highlights,

        overlayImage: AS_SideHighlight,
    },
    {
        id: "dominations",
        name: "DomiNations",
        role: "Live Game Designer",
        duration: "1 Year",
        summary: 'Dominations is a Strategy Base Battler for mobile and PC. Players begin at the "Dawn of time" and build their nation through the ages of history. All while battling other players with historical troops, leaders, and events to lead their alliance to total domination in world war!',

        releaseMonth: "April",
        releaseYear: "2015",
        studio: "Big Huge Games",
        genre: "Strategy Base Builder (PvP)",
        platforms: "Android, iOS & Steam",
        website: "https://bighugegames.com/dominations/",

        toolTags: ["Unity", "C#", "Git", "Excel", "Tablau", "JIRA"],
        skillTags: ["Live Ops", "Balance", "Multiplayer", "Progression", "Events",],

        highlights: [
            {
                title: "Troop Balance",
                toolTags: ["Unity", "C#", "Excel", "Tablau"],
                skillTags: ["Prototyping", "Multiplayer", "Combat Design", "Balance"],
                
                description: 'One of the main tasks I had as a designer on DomiNations was maintaining balance as we introduced new ages and event troops into the game. I worked in excel to properly scale troops as new ages were introduced with upgrades and to create the stats for event troops that would fight alongside them.\n\nOften this required balancing between monetization goals and player perception, ensuring that while event troops were worthwhile to buy and gave players an advantage they could not wholly overcome a more strategically laid out base through sheer power. Particularly as the game matured and the age count grew into the double digits careful attention had to be paid to how they scaled throughout the ages and power levels of the games progression.',
                highlightImages: [DOM_TroopHighlight1],
                subImages: [DOM_TroopHighlight2, DOM_TroopHighlight3, DOM_TroopHighlight],
            },
            {
                title: "Events and Sales",
                toolTags: ["Unity", "C#", "Photoshop"],
                skillTags: ["Live Ops", "Events", "Monetization"],
                
                description: 'I had a crash course in Analytics and Live Ops while working as a Designer on DomiNations. I was tasked with creating and balancing sale items and prices alongside config and feature events and everything was evaluated through a data driven lens. I had to learn the patterns and work with analytics to find success or propose avenues we could explore that would drive player retention and monetization for every release.',
                highlightImages: [DOM_EventHighlight3],
                subImages: [DOM_EventHighlight4, DOM_EventHighlight, , DOM_EventHighlight2],
            },
        ],

        /* assets */
        splashImage: DOM_Splash,
        splashPosition: "",
        highlightImage: DOM_Highlights,

        overlayImage: DOM_Splash,
    },
    {
        id: "eso",
        name: "Elder Scrolls Online",
        role: "QA Tester / Automation Engineer",
        duration: "14 Months",
        summary: 'Elder Scrolls Online is a MMORPG tasking players with rising as a hero of Tamriel, fighting off Daedra, Undead, and many more threats to the world. Players can engage in large scale PvP in Cyrodiil, challenging Dungeons and Trials, or master trades collecting and crafting items and equipment.',

        releaseMonth: "April",
        releaseYear: "2014",
        studio: "Zenimax Online Studios",
        genre: "MMORPG",
        platforms: "PC, Max, Xbox, & PlayStation",
        website: "https://www.elderscrollsonline.com/en-us/home",

        toolTags: ["Custom Engine", "Lua", "Ruby", "Confluence", "JIRA", "HTML"],
        skillTags: ["QA", "Automation", "Live Ops",],

        highlights: [
            {
                title: "Dungeon & Trial Team",
                toolTags: ["Custom Engine", "Lua", "Confluence", "JIRA"],
                skillTags: ["QA", "Combat Balance", "Content", "Scripting", "Tools"],
                
                description: 'While working in QA I took a particular interest in combat for the game, and in particular built several "add-ons" in lua that I used myself and gave to others that tracked stats like damage, sources, modifiers, and as a result, often highlighted underlying issues that were easy to miss (and that players would eventually discover making their own add-ons for live).\n\nAs a result I was invited to join the Dungeon & Trial team, a specialized group focused on playtesting the highest level existing and future content. The team ran content during overtime to provide feedback to the design team and help them balance the difficulty in relation to the most competitive end game players, content such as Hel-Ra citadel, The Atherium Archive, and early versions of Craglorn.',
                highlightImages: [],
                subImages: [],
            },
            {
                title: "Live QA",
                toolTags: ["Custom Engine", "Lua", "Confluence", "JIRA"],
                skillTags: ["QA", "Live Ops", "Events", "Scripting"],
                
                description: 'While at Zenimax I was a part of the QA team and found my specialization in Live QA. I scoured confluence to familiarize myself with the custom engines scripting and configs enabling me to follow a user report or live issue and reproduce it easily by understanding and investigating possible causes. I had a breadth of familiarity with the game and followed the forums and other public user discussions to identify emergent issues before they became widespread and regressed them across multiple environments to ensure they were fixed for the next release.',
                highlightImages: [],
                subImages: [],
            },
            {
                title: "QA Automation",
                toolTags: ["Ruby", "HTML"],
                skillTags: ["QA", "Automation", "Web"],
                
                description: 'After working at Alchemy Learning I returned to Zenimax on the QA Automation team, working specifically with the web and payment platforms to create automated test cases around them. I worked primarily with Ruby on Rails to create scripts that would cover purchase flows, special cases, and report any issues in its results automatically.',
                highlightImages: [],
                subImages: [],
            },
        ],

        /* assets */
        splashImage: ESO_Splash,
        splashPosition: "",
        highlightImage: ESO_Highlights,

        overlayImage: ESO_Splash,
    },
    {
        id: "amazon", /* :( */
        name: "Amazon Experience",
        role: "Game Developer",
        duration: "8 Months",
        summary: 'The Amazon Experience is a Virtual Reality educational game that tasks students with taking photos of wildlife while on a river in the Amazon. Players are given oppourtunities along their journey to take photos that are then scored to unlock facts about the animals.',

        releaseMonth: "July",
        releaseYear: "2014",
        studio: "Alchemy Learning",
        genre: "Educational VR Experience",
        platforms: "PC",
        website: "https://alchemylearning.com/",

        toolTags: ["Unity", "C#", "Oculus VR", "Blender", "Photoshop"],
        skillTags: ["VR", "Education", "Level Design", "Cameras"],

        highlights: [
            {
                title: "Scripted Boat Ride",
                toolTags: ["Unity", "C#", "Oculus VR"],
                skillTags: ["VR", "Level Design"],
                
                description: 'For the Amazon Experience I handled all of the scripted sequences and logic for integrating with Oculus VR and Cameras within Unity. I set up a "track" for the players boat that automatically moved them along the river, along the way they would trigger animals to appear as you passed them including 3D audio callouts. The ending sequence which took the player on a careening trip down a waterfall before splashing down home and recieving their scores and facts about the animals they had "discovered".',
                highlightImages: [],
                subImages: [],
            },
            {
                title: "Camera Renders & Scoring",
                toolTags: ["Unity", "C#", "Oculus VR"],
                skillTags: ["VR", "Cameras"],
                
                description: 'An important part of the Amazon experience was using virtual reality as the “camera” the player uses to take pictures. Using ray casts and a little bit of math positions, distance, and visibility was relatively easy to figure out and a score could be formulated. Using a separate camera that was inactive render textures of the screen were saved locally and kept for the journal at the end of the levels. The UI was built using Unity’s 4.6 UI system using sprites and text elements to fill information based on the animal captured.',
                highlightImages: [],
                subImages: [],
            },
        ],
        /* assets */
        splashImage: Amazon_Splash,
        splashPosition: "",
        highlightImage: Amazon_Highlights,

        overlayImage: Amazon_Splash,
    },
    {
        id: "workforce", /* :( */
        name: "Workforce Development",
        role: "Game Developer",
        duration: "6 Months",
        summary: 'A Virtual Reality tool with modules for public speaking, interview training, and board room presentation within virtual reality. Players recieve scoring and notes based on their performance calling out things like filler word usage, pacing issues, and improve enounciation and eye contact.',

        releaseMonth: "December",
        releaseYear: "2014",
        studio: "Alchemy Learning",
        genre: "Workforce VR Experience",
        platforms: "Android, iOS, GearVR",
        website: "https://alchemylearning.com/",

        toolTags: ["Unity", "C#", "Oculus VR", "GearVR", "Blender", "Photoshop", "CMUSphinx", "IBMWatson"],
        skillTags: ["VR", "Education", "SQL", "Level Design", "Cameras", "Analytics"],

        highlights: [
            {
                title: "Voice Recognition and Eye Contact",
                toolTags: ["Unity", "C#", "GearVR"],
                skillTags: ["VR", "CMUSphinx", "IBMWatson"],
                
                description: 'One of the important parts of the app was to give feedback on the users speaking style and eye contact so that they would know what to work on. Eye contact was relatively easy to set up and uses ray casting for a specific set of colliers attached to the animated avatars. For voice recognition it was necessary to use some third party tools. In the offline version the app runs using CMUSphinx which had to be loaded and connected before Unity in android studio. In the online version IBM Watson speech to text, text to speech, and tone analyzer are used to get the necessary metrics for feedback. Regular Expressions were used to filter out filler words and to count syllables for pace reporting. With all of this information stored and computed it was saved to and SQLite database and populated in the custom built UI including graphs at the end of the presentation/speech/interview.',
                highlightImages: [],
                subImages: [],
            },
            {
                title: "User Content",
                toolTags: ["Unity", "C#", "GearVR"],
                skillTags: ["VR", "Analytics", "SQL"],
                
                description: 'Since users needed to be able to create their own practice environments and use their own materials we needed a way for them to submit their speech/presentation and load it into the tool. Using a simple email system presentations could be uploaded to our back end and then downloaded when the appropriate module was selected. In addition using text to speech questions could be added for after presentations/speeches/interviews which tracked the same metrics.',
                highlightImages: [],
                subImages: [],
            },
        ],

        /* assets */
        splashImage: Workforce_Splash,
        splashPosition: "",
        highlightImage: Workforce_Highlights,

        overlayImage: Workforce_Splash,
    }
];
