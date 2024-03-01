const projects_ar = [
    {
        id: "portfolio",
        name: "محفظتي",
        desc: "موقع الويب الذي تتصفحه حاليًا.",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and الريح الخلفيةCSS",
        image: "https://cdn.aayus.me/thumbs/1.png",
        link: "/about",
        tags: ["التالي ١٣", "الريح الخلفية", "تايب سكريبت"],
        isClient: false,
        isFeatured: true,
        isDeprecated: false,
        linkLabel: "يزور",
    },
    {
        id: 'controlcenter',
        name: "عيوش.مي مركز التحكم",
        desc: "نظام إدارة مركزي لكل ما يتعلق بنطاقي القصير عيوش.مي",
        image: 'https://cdn.aayus.me/aayus.me%20control%20center.png',
        link: '#',
        tags: ["التالي ١٣", "تاوري", "الصدأ"],
        isClient: false,
        isFeatured: true,
        isDeprecated: false,
        linkLabel: "يزور",
    },
    {
        id: 'susdev',
        name: "سوسديف",
        desc: "موقع الأمم المتحدة للتنمية المستدامة، مصمم لموعد ٢٠٢٣",
        image: 'https://cdn.aayus.me/uploads/firefox_5fnuLtjAMO.png',
        link: 'https://susdev.aayus.me',
        tags: ["التالي ١٣", "الريح الخلفية", "مسابقة"],
        isClient: false,
        isFeatured: true,
        isDeprecated: false,
        linkLabel: "يزور",
    },
    {
        id: "blog",
        name: "My Blog",
        desc: "The website you're not currently on.",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and الريح الخلفيةCSS",
        image: "https://cdn.aayus.me/thumbs/2.png",
        link: "https://aayushrajagopalan.gq",
        tags: ["Hugo", "MD"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "يزور",
    },
    {
        id: 'sage',
        name: "سيج - منصة للتجارة الإلكترونية",
        desc: "منصة مخصصة للتجارة الإلكترونية تم إنشاؤها باستخدام التالي ١٣ بريزما وشريط",
        image: 'https://cdn.aayus.me/uploads/firefox_oRCILZMhM1.png',
        link: 'https://admin.aayush.store',
        tags: ["التالي ١٣", "بريزما", "شريط"],
        isClient: false,
        isFeatured: true,
        isDeprecated: false,
        linkLabel: "يزور",
    },
    {
        id: "store",
        name: "My Store",
        desc: "The website you're also not currently on.",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and الري لخلفيةCSS This is a work in progress.",
        image: "https://cdn.aayus.me/thumbs/5.png",
        link: "https://aayush.store",
        tags: ["Next.js", "الريح الخلفية", "Stripe"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "يزور",
    },
    {
        id: "cdn",
        name: "My CDN",
        desc: "My CDN, Hosted in AWS S3 and CloudFront",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and الريح الخلفيةCSS",
        image: "https://cdn.aayus.me/screenshots/2023/04/5.png",
        link: "https://aayushrajagopalan.gq/posts/cdn",
        tags: ["Blog", "S3", "AWS"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Blog Post",
    },
    {
        id: "via",
        name: "The Via Service",
        desc: "Worked on the Server and Client hosting, Docs and DevOps for the Via Service",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and الريح الخلفيةCSS",
        image: "https://cdn.aayus.me/screenshots/2023/03/firefox_Rsd7yWddbh.png",
        link: "https://via.baari.me/",
        tags: ["DevOps", "Linux", "Hosting", "Docs"],
        isClient: true,
        isFeatured: false,
        isDeprecated: true,
        linkLabel: "Visit",
    },
    {
        id: "donut",
        name: "Space Donut",
        desc: "3 Space Donuts spinning in space",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and الريح الخلفيةCSS",
        image: "https://cdn.aayus.me/screenshots/2023/04/firefox_GxIwa9wcsx.png",
        link: "https://donut.aayushrajagopalan.com/",
        tags: ["Vite", "Three JS", "webgl", "donut"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: "paypalcalc",
        name: "Paypal Fee Calculator",
        desc: "A simple calculator to calculate transaction fees for Paypal",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and الريح الخلفيةCSS",
        image: "https://cdn.aayus.me/screenshots/2023/04/ppfc.png",
        link: "https://aayus.me/projects/paypal-fee/",
        tags: ["Paypal", "next.js"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: "flipbooks",
        name: "Flipbooks",
        desc: "A microsoft teams app made for DPS Modern Indian School",
        image: "https://cdn.aayus.me/screenshots/2023/04/Flipbooks.png",
        link: "https://cdn.aayus.me/screenshots/2023/04/Teams_U0cWvolybX.png",
        tags: ["Microsoft Teams", "React", "Typescript"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Preview",
    },
    {
        id: "doorlight",
        name: "Door Lights",
        desc: "Using an ESP-32, I made a door light that indicates if my video is on or not.",
        image: "https://cdn.aayus.me/screenshots/2023/04/4.png",
        link: "https://aayushrajagopalan.gq/posts/doorlight",
        tags: ["IOT", "ESP-32", "C++", "Arduino"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Blog Post",
    },
    {
        id: "limo",
        name: "Limo",
        desc: "Online store selling Dank Memer Goods",
        image: "https://cdn.aayus.me/screenshots/2023/03/chrome_9yATAPwAtt.png",
        link: "https://next.limo.lol",
        tags: ["Next.js", "الريح الخلفية", "Stripe"],
        isClient: true,
        isFeatured: false,
        isDeprecated: true,
        linkLabel: "Visit",
    },
];
const projects_fr = [
    {
        id: "portfolio",
        name: "My Portfolio",
        desc: "The website you're currently on.",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS",
        image: "https://cdn.aayus.me/thumbs/1.png",
        link: "/about",
        tags: ["Next.js 12", "Tailwind", "TypeScript"],
        isClient: false,
        isFeatured: true,
        isDeprecated: false,
        linkLabel: "Manifest",
    },
    {
        id: 'controlcenter',
        name: "aayus.me control center",
        desc: "A centralized management system for all things related to my short domain aayus.me",
        image: 'https://cdn.aayus.me/aayus.me%20control%20center.png',
        link: '#',
        tags: ["Next 13", "Tauri", "Rust"],
        isClient: false,
        isFeatured: true,
        isDeprecated: false,
        linkLabel: "Look",
    },
    {
        id: 'susdev',
        name: "Susdev",
        desc: "A UN Sustainable development Website, Made for Rendezvous 2023",
        image: 'https://cdn.aayus.me/uploads/firefox_5fnuLtjAMO.png',
        link: 'https://susdev.aayus.me',
        tags: ["Next 13", "Tailwind", "Competition"],
        isClient: false,
        isFeatured: true,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: "blog",
        name: "My Blog",
        desc: "The website you're not currently on.",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS",
        image: "https://cdn.aayus.me/thumbs/2.png",
        link: "https://aayushrajagopalan.gq",
        tags: ["Hugo", "MD"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: 'sage',
        name: "Sage - An E-commerce Platform",
        desc: "A custom e-commerce platform made with Next 13, Prisma and Stripe",
        image: 'https://cdn.aayus.me/uploads/firefox_oRCILZMhM1.png',
        link: 'https://admin.aayush.store',
        tags: ["Next 13", "Prisma", "Stripe"],
        isClient: false,
        isFeatured: true,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: "store",
        name: "My Store",
        desc: "The website you're also not currently on.",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS This is a work in progress.",
        image: "https://cdn.aayus.me/thumbs/5.png",
        link: "https://aayush.store",
        tags: ["Next.js", "Tailwind", "Stripe"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: "cdn",
        name: "My CDN",
        desc: "My CDN, Hosted in AWS S3 and CloudFront",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS",
        image: "https://cdn.aayus.me/screenshots/2023/04/5.png",
        link: "https://aayushrajagopalan.gq/posts/cdn",
        tags: ["Blog", "S3", "AWS"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Blog Post",
    },
    {
        id: "via",
        name: "The Via Service",
        desc: "Worked on the Server and Client hosting, Docs and DevOps for the Via Service",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS",
        image: "https://cdn.aayus.me/screenshots/2023/03/firefox_Rsd7yWddbh.png",
        link: "https://via.baari.me/",
        tags: ["DevOps", "Linux", "Hosting", "Docs"],
        isClient: true,
        isFeatured: true,
        isDeprecated: true,
        linkLabel: "Visit",
    },
    {
        id: "donut",
        name: "Space Donut",
        desc: "3 Space Donuts spinning in space",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS",
        image: "https://cdn.aayus.me/screenshots/2023/04/firefox_GxIwa9wcsx.png",
        link: "https://donut.aayushrajagopalan.com/",
        tags: ["Vite", "Three JS", "webgl", "donut"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: "paypalcalc",
        name: "Paypal Fee Calculator",
        desc: "A simple calculator to calculate transaction fees for Paypal",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS",
        image: "https://cdn.aayus.me/screenshots/2023/04/ppfc.png",
        link: "https://aayus.me/projects/paypal-fee/",
        tags: ["Paypal", "next.js"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: "flipbooks",
        name: "Flipbooks",
        desc: "A microsoft teams app made for DPS Modern Indian School",
        image: "https://cdn.aayus.me/screenshots/2023/04/Flipbooks.png",
        link: "https://cdn.aayus.me/screenshots/2023/04/Teams_U0cWvolybX.png",
        tags: ["Microsoft Teams", "React", "Typescript"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Preview",
    },
    {
        id: "doorlight",
        name: "Door Lights",
        desc: "Using an ESP-32, I made a door light that indicates if my video is on or not.",
        image: "https://cdn.aayus.me/screenshots/2023/04/4.png",
        link: "https://aayushrajagopalan.gq/posts/doorlight",
        tags: ["IOT", "ESP-32", "C++", "Arduino"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Blog Post",
    },
    {
        id: "limo",
        name: "Limo",
        desc: "Online store selling Dank Memer Goods",
        image: "https://cdn.aayus.me/screenshots/2023/03/chrome_9yATAPwAtt.png",
        link: "https://next.limo.lol",
        tags: ["Next.js", "Tailwind", "Stripe"],
        isClient: true,
        isFeatured: false,
        isDeprecated: true,
        linkLabel: "Visit",
    },
];
const projects_en = [
    {
        id: "portfolio",
        name: "My Portfolio",
        desc: "The website you're currently on.",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS",
        image: "https://cdn.aayus.me/thumbs/1.png",
        link: "/about",
        tags: ["Next.js 12", "Tailwind", "TypeScript"],
        isClient: false,
        isFeatured: true,
        isDeprecated: false,
        linkLabel: "Manifest",
    },
    {
        id: 'controlcenter',
        name: "aayus.me control center",
        desc: "A centralized management system for all things related to my short domain aayus.me",
        image: 'https://cdn.aayus.me/aayus.me%20control%20center.png',
        link: '#',
        tags: ["Next 13", "Tauri", "Rust"],
        isClient: false,
        isFeatured: true,
        isDeprecated: false,
        linkLabel: "Look",
    },
    {
        id: 'susdev',
        name: "Susdev",
        desc: "A UN Sustainable development Website, Made for Rendezvous 2023",
        image: 'https://cdn.aayus.me/uploads/firefox_5fnuLtjAMO.png',
        link: 'https://susdev.aayus.me',
        tags: ["Next 13", "Tailwind", "Competition"],
        isClient: false,
        isFeatured: true,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: "blog",
        name: "My Blog",
        desc: "The website you're not currently on.",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS",
        image: "https://cdn.aayus.me/thumbs/2.png",
        link: "https://aayushrajagopalan.gq",
        tags: ["Hugo", "MD"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: 'sage',
        name: "Sage - An E-commerce Platform",
        desc: "A custom e-commerce platform made with Next 13, Prisma and Stripe",
        image: 'https://cdn.aayus.me/uploads/firefox_oRCILZMhM1.png',
        link: 'https://admin.aayush.store',
        tags: ["Next 13", "Prisma", "Stripe"],
        isClient: false,
        isFeatured: true,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: "store",
        name: "My Store",
        desc: "The website you're also not currently on.",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS This is a work in progress.",
        image: "https://cdn.aayus.me/thumbs/5.png",
        link: "https://aayush.store",
        tags: ["Next.js", "Tailwind", "Stripe"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: "cdn",
        name: "My CDN",
        desc: "My CDN, Hosted in AWS S3 and CloudFront",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS",
        image: "https://cdn.aayus.me/screenshots/2023/04/5.png",
        link: "https://aayushrajagopalan.gq/posts/cdn",
        tags: ["Blog", "S3", "AWS"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Blog Post",
    },
    {
        id: "via",
        name: "The Via Service",
        desc: "Worked on the Server and Client hosting, Docs and DevOps for the Via Service",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS",
        image: "https://cdn.aayus.me/screenshots/2023/03/firefox_Rsd7yWddbh.png",
        link: "https://via.baari.me/",
        tags: ["DevOps", "Linux", "Hosting", "Docs"],
        isClient: true,
        isFeatured: true,
        isDeprecated: true,
        linkLabel: "Visit",
    },
    {
        id: "donut",
        name: "Space Donut",
        desc: "3 Space Donuts spinning in space",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS",
        image: "https://cdn.aayus.me/screenshots/2023/04/firefox_GxIwa9wcsx.png",
        link: "https://donut.aayushrajagopalan.com/",
        tags: ["Vite", "Three JS", "webgl", "donut"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: "paypalcalc",
        name: "Paypal Fee Calculator",
        desc: "A simple calculator to calculate transaction fees for Paypal",
        longdesc: "A simple calculator to calculate transaction fees for Paypal. Made using Next.js and TailwindCSS",
        image: "https://cdn.aayus.me/screenshots/2023/04/ppfc.png",
        link: "https://aayus.me/projects/paypal-fee/",
        tags: ["Paypal", "next.js"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Visit",
    },
    {
        id: "flipbooks",
        name: "Flipbooks",
        desc: "A microsoft teams app made for DPS Modern Indian School",
        image: "https://cdn.aayus.me/screenshots/2023/04/Flipbooks.png",
        link: "https://cdn.aayus.me/screenshots/2023/04/Teams_U0cWvolybX.png",
        tags: ["Microsoft Teams", "React", "Typescript"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Preview",
    },
    {
        id: "doorlight",
        name: "Door Lights",
        desc: "Using an ESP-32, I made a door light that indicates if my video is on or not.",
        image: "https://cdn.aayus.me/screenshots/2023/04/4.png",
        link: "https://aayushrajagopalan.gq/posts/doorlight",
        tags: ["IOT", "ESP-32", "C++", "Arduino"],
        isClient: false,
        isFeatured: false,
        isDeprecated: false,
        linkLabel: "Blog Post",
    },
    {
        id: "limo",
        name: "Limo",
        desc: "Online store selling Dank Memer Goods",
        image: "https://cdn.aayus.me/screenshots/2023/03/chrome_9yATAPwAtt.png",
        link: "https://next.limo.lol",
        tags: ["Next.js", "Tailwind", "Stripe"],
        isClient: true,
        isFeatured: false,
        isDeprecated: true,
        linkLabel: "Visit",
    },
];

export { projects_ar, projects_en, projects_fr };