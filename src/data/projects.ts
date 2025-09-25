import type { Project } from '@/types'

export const projects: Project[] = [
    {
        image: "/images/apptor.png",
        title: "Apptor",
        summary: "Low code Web Application",
        description: "From UI to Data management to Deployment, Apptor streamlines this process making it easier to develop applications. Components can easily be customized by dragging and dropping them onto the canvas. Events can be created and catched to add customizible actions. Everything is converted into JSON which will then be parsed by the framework",
        techs: 'Angular, Spring Boot, DBeaver, Azure',
        meta: 'Expeed, software engineer'
    },
    {
        image: "/images/zeigo.png",
        title: "Zeigo Activate",
        summary: "Reduce their environmental impact and lead global decarbonization.",
        description: "I have developed countless features for Schneider. Here I learned to work in a large team with the classic fetures/bugs experience through Jira, paired with daily standup following the Agile methodology. I have also Architected a event-driven micro-frontend solution using Native Federation and a custom event bus - compared to the previous web-components approach, it loads libraries with matching version only once, decreasing loading times dramatically. For Zeigo Activate I was particulary involved in customizing Kendo UI, or implementing custom components when none of the existing ones provided the needed look or functionality.",
        techs: 'Angular, .Net, SSMS, Azure',
        meta: 'Schneider - Expeed client, software engineer'
    },
    {
        image: "/images/unity-tools.jpg",
        title: "XR Ambisonics",
        summary: "Unity Tools to create music-reactive visualizations",
        description: "Tools to generate various shapes that react to music. Visualizations can be viewed in augmented reality through your phone at specific locations in the world. I have developed QoL scripts and custom Unity Tools to streamline my customer's workflow. I have also guided him in deploying the app in the App Store.",
        techs: 'Unity3D, XR, C#, Blender, App Store',
        meta: 'Viz Lab, developer'
    },
    {
        image: "/images/weekly-bucket.jpg",
        title: "Weekly Bucket",
        summary: "Weekly planner with intuitive user interface",
        description: "Enter or selected a suggested task and the desired amount you wish to reach each week. Simply tap on a task to get closer to your goal. Track your history and modify tasks at any time",
        techs: "React Native, Javascript",
        meta: 'College Project, front-end'
    },
    {
        image: "/images/skeleton-rush.png",
        title: "Skeleton Rush",
        summary: "A 2.5D shooter video game. Defeat enemies and avoid obstacles as fast as you can",
        description: "A 2.5D shooter video game. 2.5D refers to games developed in a 3D environment but with movements constrained in 2 axis. You can compete on a global leaderboard optimizing your speed, enemies defeated, and damage taken",
        techs: "Unity3D, C#, Javascript, HTML, CSS, Bootstrap, SQL, PHP",
        meta: 'Personal Project, developer'
    },
    {
        image: "/images/fearless-run.jpg",
        title: "Fearless Run",
        summary: "A mobile arcade video game. Dodge enemies and get the highest score",
        description: "A simple 2D arcade games where you must survive as long as possible by dodging incoming enemies. The game contains 3 stages and different gamemodes, with different art and enemy abilities",
        techs: "Unity3D, C#, Play Store",
        meta: 'Personal Project, developer'
    },
]
