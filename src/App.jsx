import { useEffect, useState, useRef } from "react";
import Helicopter from "./Helicopter";
import { FaGithub } from "react-icons/fa";
import { FaGamepad, FaCubes } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import { FaLinkedinIn, FaDiscord, FaGooglePlay, FaGlobe } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import clickSound from "/click.mp3";
import "./style.css";

export default function App() {
    const [heliActive, setHeliActive] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const [activeImage, setActiveImage] = useState(null);
    const heliSectionRef = useRef(null);
    const isMobile = window.innerWidth < 768;

    /* ================= CLICK SOUND ================= */
    useEffect(() => {
        const audio = new Audio(clickSound);
        audio.volume = 0.4;

        const play = () => {
            audio.currentTime = 0;
            audio.play().catch(() => { });
        };

        document
            .querySelectorAll("button, .icon-btn, .skill-btn, .project-xr-card")
            .forEach((el) => el.addEventListener("click", play));

        return () =>
            document
                .querySelectorAll("button, .icon-btn, .skill-btn, .project-xr-card")
                .forEach((el) => el.removeEventListener("click", play));
    }, []);

    /* ================= HELI ALWAYS ACTIVE ================= */
    useEffect(() => {
        setHeliActive(true);
    }, []);


    /* ================= SCROLL LOCK ================= */
    useEffect(() => {
        document.body.style.overflow = activeProject ? "hidden" : "auto";
    }, [activeProject]);

    const achievements = [
        {
            icon: "🎮",
            title: "50+ Games Developed at Kazar Games",
            desc: "Designed and delivered 50+ hyper-casual, arcade, and simulation games across multiple platforms.",
        },
        {
            icon: "🏆",
            title: "Somnia Mini Games Hackathon – 1st Place",
            desc: "Won 1st position by building high-performance mini-games under tight deadlines.",
            link: "https://dorahacks.io/buidl/30981",
        },
        {
            icon: "🧬",
            title: "Custom Web3 SDK for Unity",
            desc: "Developed a seamless Unity SDK integrating NFTs & Tokens across SEI, SOMNIA, and all EVM-compatible chains. You can experience this SDK live in the game linked below — featuring wallet connect and real-time token claiming on Push Chain. Web3 integration time reduced to just 5–10 minutes.",
            link: "https://helixjump-pushchain.netlify.app/",
        },
        {
            icon: "🎃",
            title: "Halloween Gaming Event – 1st Place",
            desc: "Top-ranked game in a themed competitive gaming event.",
            image: "/achievements/halloween.jpg",
            link: "https://somnia.network",
        },
        {
            icon: "🎄",
            title: "Christmas Gaming Event – 1st Place",
            desc: "Award-winning festive game with high audience engagement.",
            image: "/achievements/christmas.jpg",
            link: "https://somnia.network",
        },
        {
            icon: "✈️",
            title: "Indian Air Force – Fighter Jet VR Maintenance",
            desc: "Led a 20–25 member team to build a VR maintenance training system. Project secured 1st place.",
            
        },
        {
            icon: "🚁",
            title: "Cheetal Simulator – Indian Army",
            desc: "Successfully delivered a military-grade simulator for training purposes.",
            image: "/achievements/army-cheetal.jpeg",
        },
        {
            icon: "🎓",
            title: "NITI Aayog Educational Game",
            desc: "Developed a fun, gamified learning application for students under a government initiative.",
            image: "/achievements/niti-educational.jpeg",
        },
        {
            icon: "🚁",
            title: "Cheetah / Chetak Helicopter Simulator",
            desc: "Team Lead for flight dynamics, motion controls & system simulation. Successfully delivered.",
        },
        {
            icon: "🌍",
            title: "Global Client Projects",
            desc: "Built games and applications for multiple international clients across gaming, education & simulation.",
        },
        {
            icon: "🔥",
            title: "Gameloop Event – Funtico",
            desc: "Winning game with massive audience participation and playtime.",
            link: "https://gameloop.funtico.com/gl-best-throw",
            videoLink: "https://youtu.be/YA_iR2TvpNo?si=wGCRFXc02AFXgL6k",
        },
    ];


    /* ================= PROJECT DATA ================= */
    const projects = [

        {

        title: "Cheetal Simulator",
        brief: "Military vehicle simulator for training purposes.",
        screenshots: [
            "/Projects/Cheetal Simulator/screenshots/1.jpeg",
            "/Projects/Cheetal Simulator/screenshots/2.png"
        ],
        video: "/Projects/Cheetal Simulator/video/CheetalSim.mp4",
        showVideo: false,
        videoText: "This military vehicle simulator is developed exclusively for training and evaluation purposes. Public video preview is restricted.",
        platform: ["PC"],
        tech: "Unity · Simulation",
        playStore: "coming-soon",
        website: null,
        },

{
    title: "Cheetah / Chetak Helicopter Simulator",
        brief: "Realistic helicopter flight and system simulation.",
            screenshots: [
                "/Projects/Cheetah  Chetak Helicopter Simulator/screenshots/1.png"

            ],
                video: "/Projects/Cheetah  Chetak Helicopter Simulator/video/ChetakSim.mp4",
                    showVideo: false,
                        videoText: "A high-fidelity helicopter flight and systems simulator designed for pilot familiarization and procedural training.",
                            platform: ["PC", "VR"],
                                tech: "Unity · Flight Physics",
                                    playStore: "coming-soon",
                                        website: null,
        },

{
    title: "Mirage Fighter Jet Simulator",
        brief: "High-fidelity fighter jet training simulator.",
            screenshots: [
                "/Projects/Mirage Fighter Jet Simulator/screenshots/1.png"
            ],
                video: "/Projects/Mirage Fighter Jet Simulator/video/MirageSim.mp4",
                    showVideo: false,
                        videoText: "Advanced fighter jet simulator built for professional training, system understanding, and mission rehearsal.",
                            platform: ["PC", "VR"],
                                tech: "Unity · Aerospace · VR",
                                    playStore: "coming-soon",
                                        website: null,
        },
     
        {
            title: "Snake Game",
            brief: "Classic snake game with smooth controls and increasing difficulty.",
            screenshots: [
                "/Projects/Snake Game/screenshots/1.png",
                "/Projects/Snake Game/screenshots/2.png",
                "/Projects/Snake Game/screenshots/3.png"
            ],
            video: "/Projects/Snake Game/video/snake-game.mp4",
            platform: ["Android", "Web"],
            tech: "Unity · 2D",
            playStore: "coming-soon",
            website: "https://raj9919.itch.io/snakegamenew",
        },
        {
            title: "Geometry Dash",
            brief: "Fast-paced rhythm platformer with obstacle timing mechanics.",
            screenshots: [
                "/Projects/Geometry Dash/screenshots/1.png",
                "/Projects/Geometry Dash/screenshots/2.png",
                "/Projects/Geometry Dash/screenshots/3.png"
            ],
            video: "/Projects/Geometry Dash/video/GeometryDash.mp4",
            platform: ["Web"],
            tech: "Unity · 2D",
            playStore: "coming-soon",
            website: "https://raj9919.itch.io/geometrygame",
        },
        {
            title: "2 Player Mini Games",
            brief: "A fun local multiplayer game pack featuring multiple casual mini-games.",
            screenshots: [
                "/Projects/2 Player Mini Games/screenshots/1.png",
                "/Projects/2 Player Mini Games/screenshots/2.png",
                "/Projects/2 Player Mini Games/screenshots/3.png",
                "/Projects/2 Player Mini Games/screenshots/4.png",
                "/Projects/2 Player Mini Games/screenshots/5.png"
            ],
            video: "/Projects/2 Player Mini Games/video/2PlayerMiniGames.mp4",
            platform: ["Web"],
            tech: "Unity · 2D · Local Multiplayer",
            playStore: "coming-soon",
            website: "https://raj9919.itch.io/2playergame"
        },
        {
            title: "Magic Dot",
            brief: "A neon-style rhythm arcade game where players time their taps to music beats.",
            screenshots: [
                "/Projects/Magic Dot/screenshots/1.png",
                "/Projects/Magic Dot/screenshots/2.png",
                "/Projects/Magic Dot/screenshots/3.png"
            ],
            video: "/Projects/Magic Dot/video/MagicDot.mp4",
            platform: ["Web", "Mobile"],
            tech: "Unity · 2D · Rhythm Mechanics",
            playStore: "coming-soon",
            website: "https://raj9919.itch.io/musicgame"
        },
        {
            title: "Attack URP",
            brief: "High-quality action game built using Unity URP pipeline.",
            screenshots: [
                "/Projects/Attack URP/screenshots/1.png",
                "/Projects/Attack URP/screenshots/2.png",
                "/Projects/Attack URP/screenshots/3.png",
                "/Projects/Attack URP/screenshots/4.png",
                "/Projects/Attack URP/screenshots/5.png",
                "/Projects/Attack URP/screenshots/6.png"
            ],
            video: "/Projects/Attack URP/video/AttackURP.mp4",
            platform: ["Web", "Android"],
            tech: "Unity · URP",
            playStore: "coming-soon",
            website: "https://attack-urp-firebase.vercel.app/",
        },
        {
            title: "Slap Kingdom",
            brief: "Physics-based slap combat casual game.",
            screenshots: [
                "/Projects/Slap Kingdom/screenshots/1.png",
                "/Projects/Slap Kingdom/screenshots/2.png",
                "/Projects/Slap Kingdom/screenshots/3.png",
                "/Projects/Slap Kingdom/screenshots/4.png"
            ],
            video: "/Projects/Slap Kingdom/video/SlapKingdom.mp4",
            platform: ["Web"],
            tech: "Unity · Physics",
            playStore: "coming-soon",
            website: "https://raj9919.itch.io/slapgamenew",
        },
        {
            title: "Blackhole",
            brief: "Consume-everything style black hole growth game.",
            screenshots: [
                "/Projects/Blackhole/screenshots/1.png",
                "/Projects/Blackhole/screenshots/2.png",
                "/Projects/Blackhole/screenshots/3.png"
            ],
            video: "/Projects/Blackhole/video/Blackhole.mp4",
            platform: ["Android"],
            tech: "Unity · Physics",
            playStore: "coming-soon",
            website: "https://raj9919.itch.io/blackholegame",
        },
        {
            title: "RPS",
            brief: "Rock Paper Scissors game with AI opponent logic.",
            screenshots: [
                "/Projects/RPS/screenshots/1.png",
                "/Projects/RPS/screenshots/2.png",
                "/Projects/RPS/screenshots/3.png",
                "/Projects/RPS/screenshots/4.png"
            ],
            video: "/Projects/RPS/video/RPS.mp4",
            platform: ["Android"],
            tech: "Unity · Game Logic",
            playStore: "coming-soon",
            website: "https://somniastreamstreasure.netlify.app/",
        },
        {
            title: "Santa Run",
            brief: "Christmas themed endless runner game.",
            screenshots: [
                "/Projects/Santa Run/screenshots/1.png",
                "/Projects/Santa Run/screenshots/2.png",
                "/Projects/Santa Run/screenshots/3.png"
            ],
            video: "/Projects/Santa Run/video/SantaRun.mp4",
            platform: ["Android"],
            tech: "Unity · 3D",
            playStore: "coming-soon",
            website: "https://santaclauserun.vercel.app/",
        },
        {
            title: "Santa Candies",
            brief: "Festive candy collection casual game.",
            screenshots: [
                "/Projects/Santa Candies/screenshots/1.png",
                "/Projects/Santa Candies/screenshots/2.png",
                "/Projects/Santa Candies/screenshots/3.png"
            ],
            video: "/Projects/Santa Candies/video/SantaCandies.mp4",
            platform: ["Android"],
            tech: "Unity · 2D",
            playStore: "coming-soon",
            website: "https://santa-candies.vercel.app/",
        },
        {
            title: "Santa Christmas Clash",
            brief: "Action-based Christmas themed mini-game.",
            screenshots: [
                "/Projects/Santa Christmas Clash/screenshots/1.png",
                "/Projects/Santa Christmas Clash/screenshots/2.png",
                "/Projects/Santa Christmas Clash/screenshots/3.png"
            ],
            video: "/Projects/Santa Christmas Clash/video/SantaChristmasClash.mp4",
            platform: ["Android"],
            tech: "Unity · 3D",
            playStore: "coming-soon",
            website: "https://somniachristmasclash.vercel.app/",
        },
        {
            title: "Nightmare Halloween",
            brief: "Halloween themed arcade horror game.",
            screenshots: [
                "/Projects/Nightmare Halloween/screenshots/1.png",
                "/Projects/Nightmare Halloween/screenshots/2.png",
                "/Projects/Nightmare Halloween/screenshots/3.png"
            ],
            video: "/Projects/Nightmare Halloween/video/NightmareHalloween.mp4",
            platform: ["Android"],
            tech: "Unity · 3D",
            playStore: "coming-soon",
            website: "https://nightmare-onchain.netlify.app/",
        },
        {
            title: "Helix Jump 3D",
            brief: "3D helix drop ball physics-based game.",
            screenshots: [
                "/Projects/Helix Jump 3D/screenshots/1.png",
                "/Projects/Helix Jump 3D/screenshots/2.png",
                "/Projects/Helix Jump 3D/screenshots/3.png"
            ],
            video: "/Projects/Helix Jump 3D/video/HelixJump3D.mp4",
            platform: ["Android"],
            tech: "Unity · 3D",
            playStore: "coming-soon",
            website: "https://helixjumpgame.netlify.app/",
        },
        {
            title: "Ball to Ring",
            brief: "Precision-based ball navigation game.",
            screenshots: [
                "/Projects/Ball to Ring/screenshots/1.png",
                "/Projects/Ball to Ring/screenshots/2.png",
                "/Projects/Ball to Ring/screenshots/3.png"
            ],
            video: "/Projects/Ball to Ring/video/BallToRing.mp4",
            platform: ["Android"],
            tech: "Unity · Physics",
            playStore: "coming-soon",
            website: "https://ball-to-ting.netlify.app/",
        },
        {
            title: "Best Throw",
            brief: "Target-based throwing mechanics casual game.",
            screenshots: [
                "/Projects/Best Throw/screenshots/1.png",
                "/Projects/Best Throw/screenshots/2.png",
                "/Projects/Best Throw/screenshots/3.png"
            ],
            video: "/Projects/Best Throw/video/BestThrow.mp4",
            platform: ["Android"],
            tech: "Unity · Physics",
            playStore: "coming-soon",
            website: "https://bestthrow-game.netlify.app/",
        },
        {
            title: "Adventurous Hail",
            brief: "Adventure-driven casual gameplay experience.",
            screenshots: [
                "/Projects/Adventurous Hail/screenshots/1.png",
                "/Projects/Adventurous Hail/screenshots/2.png",
                "/Projects/Adventurous Hail/screenshots/3.png"
            ],
            video: "/Projects/Adventurous Hail/video/AdventurousHail.mp4",
            platform: ["Android"],
            tech: "Unity · Adventure",
            playStore: "coming-soon",
            website: "https://haligame.netlify.app/",
        },
        {
            title: "Somnia NFT Platform",
            brief: "NFT platform with wallet integration and asset management.",
            screenshots: [
                "/Projects/Somnia NFT Platform/screenshots/1.png",
                "/Projects/Somnia NFT Platform/screenshots/2.png",
                "/Projects/Somnia NFT Platform/screenshots/3.png"
            ],
            video: "/Projects/Somnia NFT Platform/video/SomniaNFT.mp4",
            platform: ["Web"],
            tech: "Unity · Web3 · NFT",
            playStore: "coming-soon",
            website: "https://nft-musuem.netlify.app/",
        },
        {
            title: "Yield Platform",
            brief: "Blockchain-based yield and staking platform.",
            screenshots: [
                "/Projects/Yield Platform/screenshots/1.png",
                "/Projects/Yield Platform/screenshots/2.png",
                "/Projects/Yield Platform/screenshots/3.png"
            ],
            video: "/Projects/Yield Platform/video/YieldPlatform.mp4",
            platform: ["Web"],
            tech: "Web3 · Blockchain",
            playStore: "coming-soon",
            website: "https://inquisitive-chimera-4cab77.netlify.app/",
        },
        {
            title: "Yandere GF",
            brief: "Story-driven AI-based simulation game.",
            screenshots: [
                "/Projects/Yandere GF/screenshots/1.png",
                "/Projects/Yandere GF/screenshots/2.png",
                "/Projects/Yandere GF/screenshots/3.png",
                "/Projects/Yandere GF/screenshots/4.png",
                "/Projects/Yandere GF/screenshots/5.png",
                "/Projects/Yandere GF/screenshots/6.png",
                "/Projects/Yandere GF/screenshots/7.png"
            ],
            video: "/Projects/Yandere GF/video/YandereGF.mp4",
            platform: ["PC"],
            tech: "Unity · AI · Simulation",
            playStore: "coming-soon",
            website: null,
        },
        {
            title: "Super Alien",
            brief: "Arcade-style alien combat game.",
            screenshots: [
                "/Projects/Super Alien/screenshots/1.png",
                "/Projects/Super Alien/screenshots/2.png",
                "/Projects/Super Alien/screenshots/3.png",
                "/Projects/Super Alien/screenshots/4.png",
                "/Projects/Super Alien/screenshots/5.png"
            ],
            video: "/Projects/Super Alien/video/SuperAlien.mp4",
            platform: ["Android"],
            tech: "Unity · 2D",
            playStore: "coming-soon",
            website: null,
        },
        {
            title: "Tap 2 Richest",
            brief: "Idle tap-based progression game.",
            screenshots: [
                "/Projects/Tap 2 Richest/screenshots/1.png",
                "/Projects/Tap 2 Richest/screenshots/2.png",
                "/Projects/Tap 2 Richest/screenshots/3.png",
                "/Projects/Tap 2 Richest/screenshots/4.png",
                "/Projects/Tap 2 Richest/screenshots/5.png",
                "/Projects/Tap 2 Richest/screenshots/6.png"
            ],
            video: "/Projects/Tap 2 Richest/video/Tap2Richest.mp4",
            platform: ["Android"],
            tech: "Unity · Idle Systems",
            playStore: "coming-soon",
            website: null,
        },
        {
            title: "Salvage Pixel Game",
            brief: "Retro pixel-art resource management game.",
            screenshots: [
                "/Projects/Salvage Pixel Game/screenshots/1.png",
                "/Projects/Salvage Pixel Game/screenshots/2.png",
                "/Projects/Salvage Pixel Game/screenshots/3.png",
                "/Projects/Salvage Pixel Game/screenshots/4.png",
                "/Projects/Salvage Pixel Game/screenshots/5.png",
                "/Projects/Salvage Pixel Game/screenshots/6.png",
            ],
            video: "/Projects/Salvage Pixel Game/video/SalvagePixel.mp4",
            platform: ["PC", "Android"],
            tech: "Unity · Pixel Art",
            playStore: "coming-soon",
            website: null,
        },
        {
            title: "NITI Aayog Education Game",
            brief: "Government-focused educational serious game.",
            screenshots: [
                "/Projects/NITI Aayog Education Game/screenshots/1.jpeg",
                "/Projects/NITI Aayog Education Game/screenshots/2.jpeg"
            ],
            video: "/Projects/NITI Aayog Education Game/video/NITIAayog.mp4",
            showVideo: false,
            videoText: "This application is developed exclusively for training and evaluation purposes. Public video preview is restricted.",
            platform: ["PC"],
            tech: "Unity · Serious Games",
            playStore: "coming-soon",
            website: null,
        },
        {
        
            title: "Learning Application",
            brief: "Interactive learning app with structured modules.",
            screenshots: [
                "/Projects/Learning Application/screenshots/1.png",
                "/Projects/Learning Application/screenshots/2.png",
                "/Projects/Learning Application/screenshots/3.png",
                "/Projects/Learning Application/screenshots/4.png"
            ],
            video: "/Projects/Learning Application/video/LearningApp.mp4",
            platform: ["Android"],
            tech: "Unity · App Development",
            playStore: "coming-soon",
            website: null,
        },
        {
            title: "Digital Classroom",
            brief: "Virtual classroom platform with interactive content.",
            screenshots: [
                "/Projects/Digital Classroom/screenshots/1.png",
                "/Projects/Digital Classroom/screenshots/2.png",
                "/Projects/Digital Classroom/screenshots/3.png"
            ],
            video: "/Projects/Digital Classroom/video/DigitalClassroom.mp4",
            platform: ["PC"],
            tech: "Unity · EdTech",
            playStore: "coming-soon",
            website: null,
        },
        {
            title: "AR",
            brief: "AR-based system with 3D visualization.",
            screenshots: [
                "/Projects/Book2AR/screenshots/1.png",
                "/Projects/Book2AR/screenshots/2.png",
                "/Projects/Book2AR/screenshots/3.png"
            ],
            video: "/Projects/Book2AR/video/Book2AR.mp4",
            platform: ["Android"],
            tech: "Unity · AR",
            playStore: "coming-soon",
            website: null,
        },
        {
            title: "Multiplayer VR Shooting Game (iOS Camera Feed)",
            brief: "Multiplayer VR shooter with live iOS camera feed integration.",
            screenshots: [
                "/Projects/Multiplayer VR Shooting Game (iOS Camera Feed)/screenshots/1.png",
                "/Projects/Multiplayer VR Shooting Game (iOS Camera Feed)/screenshots/2.png",
                "/Projects/Multiplayer VR Shooting Game (iOS Camera Feed)/screenshots/3.png",
                "/Projects/Multiplayer VR Shooting Game (iOS Camera Feed)/screenshots/4.png",
                "/Projects/Multiplayer VR Shooting Game (iOS Camera Feed)/screenshots/5.png",
                "/Projects/Multiplayer VR Shooting Game (iOS Camera Feed)/screenshots/6.png",
            ],
            video: "/Projects/Multiplayer VR Shooting Game (iOS Camera Feed)/video/VRShooter.mp4",
            platform: ["VR", "iOS"],
            tech: "Unity · VR · Multiplayer",
            playStore: "coming-soon",
            website: null,
        },
    ];


    return (
        <>
            {/* ========== RAIN (PC ONLY) ========== */}
            {!isMobile && (
                <div className="global-rain">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <span key={i} className="drop" />
                    ))}
                </div>
            )}

            {/* ================= HERO ================= */}
            <section className="hero">
                {!isMobile && (
                    <video className="hero-video" src="/hero-video.mp4" autoPlay loop muted />
                )}
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>
                            Hi, I’m{" "}
                            <span className="glitch typing" data-text="Raj Agrahari">
                                Raj Agrahari
                            </span>
                        </h1>
                        <h3>Game & XR Developer</h3>
                        <p>
                            I build immersive AR/VR and XR training systems, make games, and ship Web3-powered gameplay experiences.
                        </p>
                    </div>
                </div>
                <div className="scroll-indicator"><span /></div>
            </section>

            {/* ================= ABOUT ================= */}
            <section className="about-xr">
                <div className="about-xr-card glass-panel">
                    <h2>About Me</h2>
                    <p>XR-focused Unity developer for simulations & serious games.</p>
                    <div className="why-me">
                        <div>🛩 Defense-grade XR Sims</div>
                        <div>⏱ Real-time Performance Tracking</div>
                        <div>🧩 Modular XR Systems</div>
                    </div>
                </div>
            </section>

            {/* ================= HELICOPTER ================= */}
            <div className="split">
                {!isMobile && <div className="holo-beam" />}

                <div className="split-right">
                    <div className="glass-panel workspace-panel">
                        <h2 className="workspace-title">
                            <FaCubes className="ws-icon" />
                            Simulation & Game Studio
                        </h2>

                        <p>
                            A multidisciplinary workspace where simulations, games, and
                            interactive technologies are built from the ground up.
                        </p>

                        {/* ICON HIGHLIGHTS */}
                        <div className="workspace-highlights">
                            <div><MdOutlineScience /> Simulations & Training</div>
                            <div><FaGamepad /> Games & Interactive Systems</div>
                            <div><FaCubes /> XR & Emerging Tech</div>
                        </div>
                    </div>
                </div>

                <div ref={heliSectionRef} className="split-left holo-target">
                    <Helicopter active={heliActive} />
                </div>
            </div>

            {/* ================= SKILLS (TOOLTIP RESTORED) ================= */}
            <section className="skills-section">
                <h2 className="skills-title">Core Skills</h2>

                {/* Core Development */}
                <h3 className="skills-subtitle">Core Development</h3>
                <div className="skills-grid">
                    {[
                        { name: "Unity 3D", level: "Advanced · 6+ Projects" },
                        { name: "C#", level: "Advanced" },
                        { name: "WebGL", level: "Advanced" },
                        { name: "Multiplayer Systems", level: "FishNet · Netcode · Photon " },
                    ].map((s) => (
                        <div key={s.name} className="skill-btn">
                            {s.name}
                            <span className="skill-tip">{s.level}</span>
                        </div>
                    ))}
                </div>

                {/* AR / VR / XR */}
                <h3 className="skills-subtitle">AR / VR / XR</h3>
                <div className="skills-grid">
                    {[
                        { name: "AR / VR / MR", level: "5+ Years Experience" },
                        { name: "XR Simulations", level: "Defense & Training Systems" },
                        { name: "Oculus Quest / Meta XR", level: "Hands-on Deployment" },
                        { name: "Mixed Reality", level: "Spatial Interaction & UI" },
                    ].map((s) => (
                        <div key={s.name} className="skill-btn">
                            {s.name}
                            <span className="skill-tip">{s.level}</span>
                        </div>
                    ))}
                </div>

                {/* Game Development */}
                <h3 className="skills-subtitle">Game Development</h3>
                <div className="skills-grid">
                    {[
                        { name: "2D / 3D Games", level: "Browser & Mobile Games" },
                        { name: "Rhythm Games", level: "Beat-synced Mechanics" },
                        { name: "Local Multiplayer", level: "Quick Match Multiplayer" },
                        { name: "Physics Gameplay", level: "Real-time Interaction" },
                    ].map((s) => (
                        <div key={s.name} className="skill-btn">
                            {s.name}
                            <span className="skill-tip">{s.level}</span>
                        </div>
                    ))}
                </div>

                {/* Web3 & Blockchain */}
                <h3 className="skills-subtitle">Web3 & Blockchain</h3>
                <div className="skills-grid">
                    {[
                        { name: "Solidity", level: "Smart Contracts" },
                        { name: "Web3 Integration", level: "On-chain Assets & Game Logic" },
                        { name: "ThirdWeb SDK", level: "Unity & Web Integration" },
                        { name: "Reown SDK", level: "Web3 Migration & Auth" },
                    ].map((s) => (
                        <div key={s.name} className="skill-btn">
                            {s.name}
                            <span className="skill-tip">{s.level}</span>
                        </div>
                    ))}
                </div>

                {/* Tools & Platforms */}
                <h3 className="skills-subtitle">Tools & Platforms</h3>
                <div className="skills-grid">
                    {[
                        { name: "Unity Engine", level: "Production Use" },
                        { name: "Git / GitHub", level: "Version Control" },
                        { name: "Firebase", level: "Auth · Database · Analytics" },
                        { name: "React JS", level: "Web3 Frontend" },
                    ].map((s) => (
                        <div key={s.name} className="skill-btn">
                            {s.name}
                            <span className="skill-tip">{s.level}</span>
                        </div>
                    ))}
                </div>
            </section>


            {/* ================= ACHIEVEMENTS ================= */}
            <section className="achievements-section">
                <h2 className="achievements-title">Achievements</h2>

                <div className="achievements-scroll">
                    {achievements.map((a, i) => (
                        <div key={i} className="achievement-card glass-panel">
                            <div className="ach-icon">{a.icon}</div>

                            <h3>{a.title}</h3>
                            <p>{a.desc}</p>

                            <div className="ach-actions">
                                {/* VIEW LINK */}
                                {a.link && (
                                    <a
                                        href={a.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="ach-btn"
                                    >
                                        🔗 View Link
                                    </a>
                                )}

                                {/* VIEW IMAGE */}
                                {a.image && (
                                    <button
                                        className="ach-btn outline"
                                        onClick={() => setActiveImage(a.image)}
                                    >
                                        🖼 View Image
                                    </button>
                                )}

                                {/* VIEW VIDEO */}
                                {a.videoLink && (
                                    <a
                                        href={a.videoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="ach-btn outline"
                                    >
                                        ▶ View Video
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= ACHIEVEMENT IMAGE MODAL ================= */}
            {activeImage && (
                <div className="image-modal" onClick={() => setActiveImage(null)}>
                    <div
                        className="image-modal-content glass-panel"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-btn" onClick={() => setActiveImage(null)}>
                            ✕
                        </button>

                        <img src={activeImage} alt="Achievement Proof" />
                    </div>
                </div>
            )}

            {/* ================= PROJECTS ================= */}
            <section className="projects-xr">
                <h2 className="projects-xr-title">Selected Projects</h2>

                <div className="projects-scroll">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="project-xr-card glass-panel"
                            onClick={() => setActiveProject(p)}
                        >
                            <h3>{p.title}</h3>
                            <p>{p.brief}</p>

                            {/* Read More */}
                            <div className="read-more">
                                <span>Read more</span>
                                <span className="arrow">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CONTACT ================= */}
            <section className="contact-section">
                <h2>Let’s Build Something Immersive</h2>
                <p>Open for freelance, contracts and XR collaborations.</p>

                <div className="contact-actions">
                    {/* EMAIL */}
                    <a
                        href="mailto:rajagrahari9919@gmail.com?subject=XR%20Project%20Inquiry&body=Hi%20Raj,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20really%20liked%20your%20XR%20and%20Unity%20work.%0D%0A%0D%0ALet%E2%80%99s%20connect%20and%20discuss%20a%20possible%20collaboration.%0D%0A%0D%0AThanks!"
                        className="icon-btn email"
                    >
                        <HiOutlineMail className="icon" />
                        <span>Email Me</span>
                    </a>

                    {/* LINKEDIN */}
                    <a
                        href="https://www.linkedin.com/in/raj-agrahari-72450621b/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn linkedin"
                    >
                        <FaLinkedinIn className="icon" />
                        <span>LinkedIn</span>
                    </a>

                    {/* DISCORD */}
                    <a
                        href="https://discord.gg/cheMEzxA"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn discord"
                    >
                        <FaDiscord className="icon" />
                        <span>Discord</span>
                    </a>
                    {/* Github */}
                    <a
                        href="https://github.com/raj99195"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-btn github"
                    >
                        <FaGithub className="icon" />
                        <span>GitHub</span>
                    </a>

                </div>
            </section>

            {/* ================= PROJECT MODAL ================= */}
            {activeProject && (
                <div className="project-modal">
                    <div className="project-modal-content glass-panel project-layout">
                        <button className="close-btn" onClick={() => setActiveProject(null)}>✕</button>

                        <h2>{activeProject.title}</h2>

                        <div className="project-body">
                            <div className="project-left">
                                {activeProject.screenshots.map((img, i) => (
                                    <img key={i} src={img} />
                                ))}
                            </div>

                            <div className="project-right">
                                {activeProject.showVideo === false ? (
                                    <div className="video-placeholder">
                                        <h3>🔒 Preview Restricted</h3>
                                        <p>{activeProject.videoText}</p>
                                    </div>
                                ) : (
                                    <video src={activeProject.video} controls muted />
                                )}

                                <p>{activeProject.brief}</p>
                                <span>🖥 {activeProject.platform.join(", ")}</span>
                                <span>⚙ {activeProject.tech}</span>
                           


                                <div className="links">
                                    {activeProject.playStore ? (
                                        activeProject.playStore === "coming-soon" ? (
                                            <div className="coming-soon-wrapper">
                                                <button className="link-btn play disabled" disabled>
                                                    <FaGooglePlay /> Coming Soon
                                                </button>
                                               
                                            </div>
                                        ) : (
                                            <a
                                                className="link-btn play"
                                                href={activeProject.playStore}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaGooglePlay /> Play Store
                                            </a>
                                        )
                                    ) : null}

                                    {activeProject.website && (
                                        <a
                                            className="link-btn web"
                                            href={activeProject.website}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaGlobe /> Website
                                        </a>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
