import type { Project } from "@/types"

export const projects: Project[] = [
    {
        image: "/images/apptor.png",
        title: "Apptor",
        summary: "Low code Web Application. From UI to Data management to Deployment, Apptor streamlines this process",
        description: "From UI to Data management to Deployment, Apptor streamlines this process making it easier to develop applications. Components can easily be customized by dragging and dropping them onto the canvas. Events can be created and catched to add customizible actions. Everything is converted into JSON which will then be parsed by the framework. I have worked on multiple features gaining familiarity with the whole codebase.",
        techs: ["Angular", "Spring Boot", "DBeaver", "Azure"],
        meta: "Expeed, software engineer",
        id: "apptor"
    },
    {
        image: "/images/unity-tools.jpg",
        title: "XR Ambisonics",
        summary: "Unity Tools to create music-reactive visualizations",
        description: "Tools to generate various shapes that react to music. Visualizations can be viewed in Virtual Reality and through the mobile app there are guided experiences that allow you to see visualizations in augmented reality with your camera at specific locations in the world. I have developed Quality of Life scripts and custom Unity Tools to streamline my customer's workflow. I have also guided him in deploying the app in the App Store.",
        techs: ["Unity3D", "XR", "C#", "Blender", "App Store"],
        meta: "Viz Lab, developer",
        id: "xrAmbisonics"
    },
    {
        image: "/images/resource-advisor.jpg",
        title: "Resource Advisor",
        summary: "Hub for energy, ESG, and sustainability data with tailored visualization and reporting.",
        description: "I have architected the micro-frontend for the app. It uses Native Federation to optimize loading times through library caching and a custom Event Bus to promote decoupled communication within the framework. Afterwards I implemented infinite scrolling for better user experience and ensured that widgets render properly across pages for the secure printing functionality. Additioanlly I have converted CI/CD pipelines from github actions to azure.",
        techs: ["Angular", ".Net", "SSMS", "Azure"],
        meta: "Schneider - Expeed client, software engineer",
        id: "resourceAdvisor"
    },
    {
        image: "/images/zeigo-activate.png",
        title: "Zeigo Activate",
        summary: "Platform for small and medium-sized enterprises to reduce their environmental impact",
        description: "I developed a interactive tour and the front-end for a chatbot, integrating with the APIs to support multiple types of messages. Daily tasks include the classic fetures/bugs experience through Jira paired with daily standup following the Agile methodology. I have delivered pixel-perfect responsive UI in a high-paced enviroment working cross-functionally with the product and business teams.",
        techs: ["Angular", ".Net", "SSMS", "Azure"],
        meta: "Schneider - Expeed client, software engineer",
        id: "zeigoActivate"
    },
    {
        image: "/images/traffic-object-recognition.png",
        title: "Traffic Object Recognition",
        summary: "Machine learning models for vehicle detection, classification, and road condition analysis.",
        description: "Collaborated with real stakeholders to train models for tracking vehicles. It is possible to count and classify vehicles. It is also possible to detect the conditions of the road such as clear, snow, and rain. A Full-Stack Application was made to access the tools and settings more easily. A different app was also provided to enable customers to further train models",
        techs: ["Machine Learning", "Python", "Tensorflow", "Node.js", "Express.js", "JavaScript"],
        meta: "Research Project, Full-Stack Developer",
        id: "traffic-object-recognition",
        link: "https://github.com/jessearonsona/Traffic-Object-Recognition"
    },
    {
        image: "/images/weekly-bucket.jpg",
        title: "Weekly Bucket",
        summary: "Weekly planner with intuitive user interface",
        description: "Enter or selected a suggested task and the desired amount you wish to reach each week. Simply tap on a task to get closer to your goal. Track your history and modify tasks at any time.",
        techs: ["React Native", "Javascript"],
        meta: "College Project, front-end",
        id: "weeklyBucket",
        link: "https://github.com/LeuzziLuigi/TheWeeklyBucket"
    },
    {
        image: "/images/skeleton-rush.png",
        title: "Skeleton Rush",
        summary: "A 2.5D shooter video game. Defeat enemies and avoid obstacles as fast as you can",
        description: "A 2.5D shooter video game. 2.5D refers to games developed in a 3D environment but with movements constrained in 2 axis. You can compete on a global leaderboard optimizing your speed, enemies defeated, and damage taken.",
        techs: ["Unity3D", "C#", "Javascript", "HTML", "CSS", "Bootstrap", "SQL", "PHP"],
        meta: "Personal Project, developer",
        id: "skeletonRush",
        link: "http://skeletonrush.altervista.org/"
    },
    {
        image: "/images/fearless-run.jpg",
        title: "Fearless Run",
        summary: "A mobile arcade video game. Dodge enemies and get the highest score",
        description: "A simple 2D arcade games where you must survive as long as possible by dodging incoming enemies. The game contains 3 stages and different gamemodes, with different art and enemy abilities.",
        techs: ["Unity3D", "C#", "Play Store"],
        meta: "Personal Project, developer",
        id: "fearlessRun",
        link: "https://github.com/LeuzziLuigi/Fearless-Land"
    },
    {
        image: "/images/3dmaze.png",
        title: "3D Procedural Maze",
        summary: "A 3D procedurally generated maze video game. Collect gems, open doors with keys, and reach the exit",
        description: "This is a maze runner game that takes place in a square-grid maze generated procedurally with a random seed. The player starts in one corner and must find their way to the end of the maze in the other corner. The lockblock prevents the player from completing the maze. The lockblock can be removed from the finishing tile if the player finds the key. Gems can be gathered to increase the final score to compete on a leaderboard",
        techs: ["Unity3D", "C#", "ai-navigation", "nunit", "test-framework"],
        meta: "School Project, developer",
        id: "3dmaze",
        link: "https://github.com/LeuzziLuigi/3D-Generated-Maze"
    },
    {
        image: "/images/bouncing-heads.png",
        title: "Bouncing Heads",
        summary: "A physics-driven Unity game where head-shaped avatars bounce, collide, and compete in an arena",
        description: "Bouncing Heads is a Unity game focused on dynamic collisions between characters with large heads. Players fight in an enclosed arena, applying forces to knock opponents while collecting coins for a higher score. The core mechanics rely on Unity’s physics engine (rigidbodies, colliders) and UI elements.",
        techs: ["Unity", "C#"],
        meta: "Personal Project, developer",
        id: "bouncingheads",
        link: "https://github.com/LeuzziLuigi/BouncingHeads"
    },
    {
        image: "/images/meal-app.jpg",
        title: "Meal App",
        summary: "A mobile app for browsing, filtering, and favoriting meals by category.",
        description: "Meal App is a React Native application that lets users explore a collection of meals organized by categories. Each meal displays ingredients, preparation steps, and dietary information. Users can filter meals based on preferences such as vegan, gluten-free, or lactose-free, and mark their favorite recipes for quick access. The app uses React Navigation for screen transitions and static data for meals and categories.",
        techs: ["React Native", "Expo", "JavaScript", "React Navigation"],
        meta: "School Project, developer",
        id: "mealapp",
        link: "https://github.com/LeuzziLuigi/MealApp"
    },
    {
        image: "/images/nfc-medical.png",
        title: "NFC Medical",
        summary: "An Android app integrating NFC for medical data access or patient identification",
        description: "Designed and developed a mobile application which interfaces with a unique-per-person NFC tag, which allows first-responders such as EMTs to quickly access a patient’s relevant medical information to provide the best emergency care",
        techs: ["Android", "Java", "NFC", "Encryption", "REST API"],
        meta: "School Project, developer",
        id: "nfc-medical",
        link: "https://github.com/shearjac/NFC-Medical"
    },
    {
        image: "/images/survey-it.png",
        title: "SurveyIT",
        summary: "A full-stack web application for companies to create and manage surveys",
        description: "SurveyIT enables users to create, distribute, and analyze surveys. The application features a user-friendly interface for survey creation, supports various question types, and provides tools for analyzing responses. The project is structured with a dedicated server for backend operations, a shared module for common functionalities, and a web frontend for user interaction.",
        techs: ["Node.js", "Express", "MongoDB", "TypeScript", "HTML", "CSS", "GitHub Actions"],
        meta: "School Project, developer",
        id: "surveyit",
        link: "https://github.com/dmaahs2017/surveyIT"
    },
    {
        image: "/images/student-registration.jpg",
        title: "Student Registration System",
        summary: "A full-stack web application for managing student course registrations with email verification.",
        description: "Student Registration System is a Node.js and MySQL-based web application designed to manage academic course enrollment. Students can register with email verification, view available courses by academic year, and enroll in them. The system enforces validation rules such as matching courses to selected years and ensures data persistence through a MySQL database. The project includes both client and server code, along with a SQL dump for database setup.",
        techs: ["Node.js", "Express", "MySQL", "JavaScript", "HTML", "CSS"],
        meta: "School Project, developer",
        id: "studentregistration",
        link: "https://github.com/LeuzziLuigi/StudentRegistration"
    },
]
