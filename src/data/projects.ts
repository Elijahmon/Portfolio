
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

export const projects = [
    {
        id: "mythwalker",
        name: "Mythwalker",
        role: "Senior Game Designer / Live Design Lead",

        released: "November 2024",
        studio: "NantGames",
        genre: "Geolocation MMORPG",
        platforms: "Android & iOS",

        /* assets */
        splashImage: MW_Splash,
        splashPosition: "100% 50%",

        highlightImage: MW_Highlights,
    },
    {
        id: "fufa", /* :( */
        name: "Unrealeased Project",
        role: "Systems & Technical Game Designer",

        released: "",
        studio: "Big Huge Games",
        genre: "Strategy (PvP)",
        platforms: "Android, iOS & Steam",

        /* assets */
        splashImage: UNR_Splash,
        splashPosition: "",
        highlightImage: UNR_Highlights,
    },
    {
        id: "arcane",
        name: "Arcane Showdown",
        role: "Systems & Technical Game Designer",

        released: "September 2020",
        studio: "Big Huge Games",
        genre: "Card / Strategy (PvP)",
        platforms: "Android, iOS & Steam",

        /* assets */
        splashImage: AS_Splash,
        splashPosition: "",
        highlightImage: AS_Highlights,
    },
    {
        id: "dominations",
        name: "DomiNations",
        role: "Live Game Designer",

        released: "April 2015",
        studio: "Big Huge Games",
        genre: "Strategy Base Builder (PvP)",
        platforms: "Android, iOS & Steam",

        /* assets */
        splashImage: DOM_Splash,
        splashPosition: "",
        highlightImage: DOM_Highlights,
    },
    {
        id: "eso",
        name: "Elder Scrolls Online",
        role: "QA Tester / Automation Engineer",

        released: "April 2014",
        studio: "Zenimax Online Studios",
        genre: "MMORPG",
        platforms: "PC, Max, Xbox, & PlayStation",

        /* assets */
        splashImage: ESO_Splash,
        splashPosition: "",
        highlightImage: ESO_Highlights,
    },
    {
        id: "amazon", /* :( */
        name: "Amazon Experience",
        role: "Game Developer",

        released: "August 2015",
        studio: "Alchemy Learning",
        genre: "Educational VR Experience",
        platforms: "PC",

        /* assets */
        splashImage: Amazon_Splash,
        splashPosition: "",
        highlightImage: Amazon_Highlights,
    },
    {
        id: "workforce", /* :( */
        name: "Workforce Development",
        role: "Game Developer",

        released: "December 2015",
        studio: "Alchemy Learning",
        genre: "Workforce VR Experience",
        platforms: "Android, iOS, GearVR",

        /* assets */
        splashImage: Workforce_Splash,
        splashPosition: "",
        highlightImage: Workforce_Highlights,
    }
];
