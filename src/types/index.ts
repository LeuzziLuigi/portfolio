export interface Project {
    image: string
    title: string
    summary: string
    description: string
    techs: string[]
    meta: string
    id: string
    link?: string
}

export interface Skill {
    name: string
    tags: string[]
    value: number
}

export interface SkillSection {
    name: string
    list: Skill[]
}

export interface PersonalInfo {
    name: string
    title: string
    tagline: {
        desktop: string
        mobile: string
    }
    avatar: string
    github: string
    linkedin: string
}

export enum Tag {
    Frontend = "Frontend",
    Backend = "Backend",
    WebDev = "Web Development",
    GameDev = "Game Development",
    Cloud = "Cloud",
    Mobile = "Mobile",
    Scripting = "Scripting",
    Data = "Data",
    Testing = "Testing",
    API = "Api",
    Architecture = "Architecture",
    AIML = "AI/ML",
    Communication = "Communication",
    Library = "Library",
    BuildTool = "Build tool",
    Devops = "Devops",
    IDE = "IDE",
    Platform = "Platform",
    ProjectManagement = "Project Management",
    VersionControl = "Version Control"
}

export interface Section {
    displayText: string,
    id: string
}