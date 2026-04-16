module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/data/siteContent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteContent",
    ()=>siteContent
]);
const siteContent = {
    name: "Zach Yanez",
    landingDelayMs: 5000,
    title: "Zach Yanez ✌🏽",
    titleBlur: "How are you today?",
    roles: [
        "Developer",
        "Musician",
        "Model",
        "Teacher",
        "Author"
    ],
    heroSummary: "React Native and full-stack mobile developer building polished consumer products, AI-powered workflows, and modern mobile experiences.",
    heroImage: "/assets/Lean.jpg",
    professionalSummary: "React Native and full-stack mobile developer with 5+ years of experience building and shipping production consumer and enterprise applications. Strong in React Native, TypeScript, frontend architecture, backend integrations, secure data workflows, and end-to-end product delivery.",
    bio: [
        "Zachary Yanez is a musician, model, web developer, teacher, and published author. Graduating from DePaul University School of Music in 2015, Zach has spent the last several years in Austin, Texas pursuing an exciting music career and picking up as many skills as he can along the way.",
        "In late 2017 he signed on to The Brown Agency where he continues to work as a commercial model and actor. He has appeared in ads for companies such as Amazon, Apple, Dell, LegalZoom, Bayer, H-E-B, Kevita, Ascension, and ConocoPhilips among others.",
        "Zach began working with students of all ages and abilities as soon as he returned to Austin from DePaul. He currently teaches piano lessons to students ages 6-12 for Westlake Lessons, and has worked for the non-profits All Rhythms and Beyond The Grade teaching percussion and piano classes to underserved communities in the Austin area.",
        "Most recently Zach graduated the coding boot camp at The University of Texas at Austin with a certificate in Full-Stack Web Development."
    ],
    skills: [
        "HTML",
        "CSS",
        "Javascript",
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Webpack",
        "MySQL",
        "VScode",
        "JQuery",
        "Ajax",
        "NPM",
        "Git",
        "Bash/Unix",
        "IndexedDB"
    ],
    resumeLinks: [
        {
            label: "View Resume",
            href: "https://docs.google.com/document/d/1G01xAHsiJRkWq-Ug-UA_B2KY-wJ0AABOxLXmicG0iYI/edit?tab=t.0",
            external: true
        },
        {
            label: "Download Resume PDF",
            href: "/zach-yanez-resume.pdf",
            external: false,
            download: true
        },
        {
            label: "Entertainment Resume",
            href: "https://drive.google.com/file/d/1UYyQI0CRbvNmUQnuC86onmz4mer0Jhsg/view?usp=sharing",
            external: true
        }
    ],
    socialLinks: [
        {
            label: "Email",
            href: "mailto:zachyanez@gmail.com",
            external: true
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/zachary-yanez/",
            external: true
        },
        {
            label: "GitHub",
            href: "https://github.com/ZachYanez",
            external: true
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/zach_on_drums/",
            external: true
        },
        {
            label: "X",
            href: "https://x.com/zachyanez",
            external: true
        },
        {
            label: "Brown Agency",
            href: "http://www.brownagency.co/commercial/men/1114-zach-yanez/",
            external: true
        },
        {
            label: "Westlake Lessons",
            href: "https://www.westlakelessons.com/zachary-yanez#:~:text=Zach%20Yanez%20is%20a%20highly,classical%20percussion%20and%20drum%20set.",
            external: true
        }
    ],
    sayHeySpotlight: {
        title: "SayHey!",
        eyebrow: "Translation & acquisition",
        image: "/assets/sayHeyLogo.png",
        appHref: "https://sayheyapp.link",
        acquirerName: "7T",
        acquirerHref: "https://7t.ai",
        paragraphs: [
            "SayHey! was a translation app built for travel’s return after COVID—when people were moving again but still wanted communication that felt human, not like a phrasebook. It centered expressive, personalized messaging across eighteen languages, with typography and color treated as part of what you were actually saying abroad.",
            "As the app found traction—including a strong run in Travel on the App Store—the naming rights and related IP were acquired, turning a lean, independently shipped product into a commercial asset with a clear ownership story.",
            "Later, 7T acquired the company behind SayHey!. That transition led directly to joining 7T—carrying the same craft in React Native, product polish, and end-to-end delivery from SayHey! into broader mobile and platform work."
        ]
    },
    featuredProjects: [
        {
            name: "DocTalk Medical",
            href: "https://doctalkhealth.com/",
            image: "/assets/DocTalkIcon.png",
            description: "AI medical assistant built around health-only chat, document understanding, and appointment-ready visit workflows.",
            highlight: "Launched internationally with a privacy-first architecture and 100+ worldwide downloads.",
            category: "Featured Product",
            features: [
                "Medical chat with citations, scope enforcement, and crisis safeguards.",
                "PDF and image analysis plus a searchable documents catalog for past medical context.",
                "Appointments workspace for audio, photos, notes, and shareable structured reports."
            ],
            engineering: [
                "Expo Router + MobX frontend with SecureStore auth and RevenueCat subscription handling.",
                "Node/Express backend with MongoDB Atlas, JWT auth, AES-256-GCM encryption, and Firebase-backed file flows.",
                "Perplexity Sonar, Vertex Gemini, and background synopsis jobs orchestrated behind plan-aware API limits."
            ],
            design: [
                "High-trust UX built around focused medical-only guidance instead of open-ended chat sprawl.",
                "Document-first flows keep chat, saved context, and report viewing clear on a small-screen mobile experience."
            ]
        },
        {
            name: "Recette",
            href: "https://therecetteapp.com/",
            image: "/assets/RecetteIcon.png",
            description: "AI-powered recipe and meal-planning product spanning capture, planning, shopping, and cooking in one mobile workflow.",
            highlight: "Built as a multimodal mobile system with offline-safe planning and server-side subscription enforcement.",
            category: "Featured Product",
            features: [
                "Capture recipes from manual entry, narrated audio, video, OCR scans, social links, webpages, and prompt-driven generation.",
                "Meal planning for personal and household scopes with four-week browsing, quick adds, and Plan My Week previews.",
                "Cooking mode with voice navigation, timers, text-to-speech, nutrition, and shopping-list generation."
            ],
            engineering: [
                "Expo Router + MobX mobile app backed by an Express TypeScript API and Supabase Postgres/Storage.",
                "OpenAI, Gemini, Cobalt, USDA, and RevenueCat integrations power enrichment, media handling, and monetization.",
                "Server-authoritative feature gating and offline mutation queues keep planner workflows resilient."
            ],
            design: [
                "Many capture paths are normalized into one recipe model so the product feels coherent instead of fragmented.",
                "Planner and cooking flows are tuned for in-kitchen use with preview, swap, and large-step interactions."
            ]
        },
        {
            name: "SayHey!",
            href: "https://sayheyapp.link",
            description: "Translation app centered on expressive communication rather than generic utility, with deep visual customization across 18 languages.",
            highlight: "Reached #32 in Travel and was later acquired after proving demand for a highly personalized translation experience.",
            category: "Featured Product",
            image: "/assets/sayHeyLogo.png",
            features: [
                "Translation support across 18 widely spoken languages.",
                "Unlimited saved translations for quick reuse in repeat scenarios.",
                "Hundreds of font and color combinations for highly personalized message presentation."
            ],
            engineering: [
                "Built with Expo and React Native using Google translation integrations and persistent local state.",
                "A broad typography system was powered by numerous Expo Google Fonts packages and dynamic style rendering.",
                "The mobile app balanced translation output, saved history, and real-time personalization in one interface."
            ],
            design: [
                "Typography and color were treated as part of the communication itself, not just decorative theming.",
                "The UI was designed to feel expressive and personal so translated phrases could match tone and intent."
            ]
        },
        {
            name: "FrizzCheck",
            href: "http://www.frizzcheck.com",
            description: "Weather-aware hair forecast utility that turns raw conditions into fast, personal decisions.",
            highlight: "Designed as a focused consumer utility: quick, visual, and easier to read than a generic weather app.",
            category: "Featured Product",
            image: "/assets/FrizzCheckLogo.png",
            features: [
                "Location-aware weather lookup with humidity-focused forecasts and seven-day outlooks.",
                "Hair profile personalization using type, texture, porosity, and density.",
                "Charts, daily summaries, and instant good-hair-day predictions."
            ],
            engineering: [
                "Built with Expo and React Native using React Navigation, React Native Paper, Axios, and OpenWeather.",
                "Persistent local settings and profile data keep the utility fast between sessions.",
                "Weather, location, and hair-profile inputs are combined into a lightweight prediction flow."
            ],
            design: [
                "Gradient UI, dynamic hair iconography, and at-a-glance summaries keep the utility playful but efficient.",
                "The home, forecast, and settings flow was shaped for fast daily use instead of deep weather analysis."
            ]
        }
    ],
    publishedWorks: [
        {
            title: '"Pocket Change: The Official Transcription Book"',
            description: 'In the summer of 2018 Zach had the opportunity to work with world renown musician, and drummer Nate Smith. He transcribed all 11 solos from Nate\'s album "Pocket Change" to create a collection of highly detailed, extremely advanced drum solos. It has sold all over the world in paperback, ebook, and pdf.',
            cover: "/assets/PocketChangeCover.jpg",
            links: [
                {
                    label: "Shop",
                    href: "https://merch.ambientinks.com/collections/natesmith/products/pocket-change-the-official-transcription-book"
                },
                {
                    label: "Preview the Book",
                    href: "https://www.blurb.com/ebooks/reader.html?e=683763#/spread/7"
                },
                {
                    label: "Nate Smith",
                    href: "https://www.youtube.com/results?search_query=nate+smith+drummer"
                }
            ]
        },
        {
            title: '"Pocket Change 2: Mad Currency — The Official Transcription Book"',
            description: 'The follow-up to the original, transcribing the solos from Nate Smith\'s "Pocket Change 2: Mad Currency." Another set of highly detailed, extremely advanced drum transcriptions published through Waterbaby Music.',
            cover: "/assets/PocketChange2Cover.png",
            links: [
                {
                    label: "Shop",
                    href: "https://merch.ambientinks.com/collections/natesmith/products/pocket-change-2-mad-currency-the-official-transcription-book"
                },
                {
                    label: "Nate Smith Drums",
                    href: "https://www.natesmithdrums.com/products/nate-smith-pocket-change-2-mad-currency-the-official-transcription-book"
                }
            ]
        }
    ],
    gallerySeries: [
        {
            title: "Smile Series",
            credit: "Ruben Caballero 2020",
            images: [
                "/assets/Smile.jpg",
                "/assets/Smile2.jpg",
                "/assets/Smile3.jpg",
                "/assets/Smile4.jpg",
                "/assets/Smile5.jpg"
            ]
        },
        {
            title: "Fashion Series",
            credit: "Ruben Caballero 2020",
            images: [
                "/assets/Fashion1.jpg",
                "/assets/Fashion2.jpg",
                "/assets/Fashion3.jpg",
                "/assets/Fashion4.jpg"
            ]
        },
        {
            title: "AnF Series",
            credit: "Marshall Tidrick Photo",
            images: [
                "/assets/AnF6.jpg",
                "/assets/AnF26.jpg",
                "/assets/AnF37.jpg",
                "/assets/AnF54.jpg",
                "/assets/AnF100.jpg",
                "/assets/AnF104.jpg"
            ]
        },
        {
            title: "CDW Series",
            credit: "Britton Orrange",
            images: [
                "/assets/CDW1.jpg",
                "/assets/CDW13.jpg",
                "/assets/CDWcar1.jpg",
                "/assets/CDWsitting7.jpg",
                "/assets/CDWstanding5.jpg",
                "/assets/CDWsweater1.jpg"
            ]
        },
        {
            title: "Jacket Series",
            credit: "Ruben Caballero 2020",
            images: [
                "/assets/Jacket1.jpg",
                "/assets/Jacket2.jpg",
                "/assets/Jacket3.jpg",
                "/assets/Jacket4.jpg",
                "/assets/Jacket5.jpg"
            ]
        }
    ],
    videos: [
        "vpcKbjoV-i8",
        "AfkGA5B7QHc",
        "o3Q9ETf6Hk4",
        "dfpg4Qo5_mc",
        "pV1FpihAMgo",
        "HUUFUiCuwUI",
        "K7kkN48DWXA",
        "0Wnf3P-caBw",
        "Rt9VbJWyDTI"
    ]
};
}),
"[project]/components/TitleEffects.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TitleEffects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/siteContent.js [app-ssr] (ecmascript)");
"use client";
;
;
function TitleEffects() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleFocus = ()=>{
            document.title = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteContent"].title;
        };
        const handleBlur = ()=>{
            document.title = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$siteContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteContent"].titleBlur;
        };
        window.addEventListener("focus", handleFocus);
        window.addEventListener("blur", handleBlur);
        return ()=>{
            window.removeEventListener("focus", handleFocus);
            window.removeEventListener("blur", handleBlur);
        };
    }, []);
    return null;
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1038y6w._.js.map