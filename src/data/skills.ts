import { Tag, type Skill } from '@/types'
import type { SkillSection } from '@/types'

export const frameworks: Skill[] = [
    { name: "Angular", tags: [Tag.Frontend], value: 90 },
    { name: ".Net", tags: [Tag.Backend], value: 80 },
    { name: "React", tags: [Tag.Frontend, Tag.Library], value: 71 },
    { name: "FastAPI", tags: [Tag.Backend], value: 70 },
    { name: "Vue.js", tags: [Tag.Frontend], value: 70 },
    { name: "Android Studio", tags: [Tag.Mobile, Tag.Frontend], value: 66 },
    { name: "Flask", tags: [Tag.Backend], value: 65 },
    { name: "Next", tags: [Tag.Frontend], value: 61 },
    { name: "Express", tags: [Tag.Backend], value: 60 },
    { name: "Spring Boot", tags: [Tag.Backend], value: 59 }
]

export const languages: Skill[] = [
    { name: "Javascript / Typescript", tags: [Tag.Frontend, Tag.Backend], value: 96 },
    { name: "HTML", tags: [Tag.Frontend], value: 95 },
    { name: "SQL", tags: [Tag.Data], value: 90 },
    { name: "C#", tags: [Tag.Backend, Tag.GameDev, Tag.Scripting], value: 86 },
    { name: "YAML", tags: [Tag.Devops], value: 85 },
    { name: "C++", tags: [Tag.Backend, Tag.Scripting, Tag.GameDev], value: 81 },
    { name: "CSS", tags: [Tag.Frontend], value: 80 },
    { name: "Python", tags: [Tag.Backend, Tag.Scripting], value: 78 },
    { name: "Bash", tags: [Tag.Scripting], value: 75 },
    { name: "Java", tags: [Tag.Backend], value: 70 },
    { name: "PHP", tags: [Tag.Backend], value: 69 },
    { name: "PowerShell", tags: [Tag.Scripting], value: 68 },
    { name: "GraphQL", tags: [Tag.Data], value: 60 }
]

export const libraries: Skill[] = [
    { name: "Tailwind", tags: [Tag.Frontend], value: 85 },
    { name: "Module/Native Federation Federation", tags: [Tag.BuildTool], value: 83 },
    { name: "Kendo UI", tags: [Tag.Frontend], value: 80 },
    { name: "PrimeNg", tags: [Tag.Frontend], value: 75 },
    { name: "Angular Material UI", tags: [Tag.Frontend], value: 70 },
    { name: "TensorFlow", tags: [Tag.AIML], value: 69 },
    { name: "PyTorch", tags: [Tag.AIML], value: 65 },
    { name: "Shadcn", tags: [Tag.Frontend], value: 64 },
    { name: "NumPy", tags: [Tag.AIML], value: 55 },
    { name: "Pandas", tags: [Tag.AIML], value: 54 }
]

export const environments: Skill[] = [
    { name: "VS Code", tags: [Tag.IDE], value: 97 },
    { name: "Unity", tags: [Tag.GameDev], value: 85 },
    { name: "Jupyter Notebook", tags: [Tag.AIML], value: 80 },
    { name: "Azure", tags: [Tag.Cloud, Tag.Platform], value: 75 },
    { name: "Visual Studio", tags: [Tag.IDE], value: 74 },
    { name: "Node.js", tags: [Tag.Backend], value: 70 },
    { name: "IntelliJ IDEA", tags: [Tag.Backend], value: 66 },
    { name: "Google Cloud Platform (GCP)", tags: [Tag.Cloud], value: 60 },
    { name: "UnrealEngine", tags: [Tag.GameDev], value: 60 },
    { name: "Amazon Web Services (AWS)", tags: [Tag.Cloud], value: 55 },
    { name: "Hugging Face", tags: [Tag.AIML], value: 50 }
]

export const databases: Skill[] = [
    { name: "SQL Server Management Studio (SSMS)", tags: [Tag.Data], value: 90 },
    { name: "MySQL", tags: [Tag.Data], value: 80 },
    { name: "SQLite", tags: [Tag.Data], value: 75 },
    { name: "PostgreSQL", tags: [Tag.Data], value: 65 }
]

export const tools: Skill[] = [
    { name: "Git / Github", tags: [Tag.Communication, Tag.Devops, Tag.VersionControl], value: 91 },
    { name: "Microsoft Teams", tags: [Tag.Communication], value: 90 },
    { name: "Postman", tags: [Tag.Backend, Tag.API], value: 85 },
    { name: "BitBucket", tags: [Tag.Communication], value: 81 },
    { name: "Jira", tags: [Tag.Communication, Tag.ProjectManagement], value: 80 },
    { name: "Cypress", tags: [Tag.Testing], value: 71 },
    { name: "Docker", tags: [Tag.Devops], value: 70 },
    { name: "GitHub Actions", tags: [Tag.Devops], value: 69 },
    { name: "Vite", tags: [Tag.BuildTool], value: 68 },
    { name: "Webpack", tags: [Tag.BuildTool], value: 67 },
    { name: "Figma", tags: [Tag.Frontend], value: 66 },
    { name: "Puppetteer", tags: [Tag.Testing], value: 65 },
    { name: "Jasmine", tags: [Tag.Testing], value: 60 },
    { name: "Blender", tags: [Tag.GameDev], value: 55 },
    { name: "Jenkins", tags: [Tag.Devops], value: 50 }
]

export const concepts: Skill[] = [
    { name: "Component-Based Architecture", tags: [Tag.Architecture], value: 90 },
    { name: "JSON Web Tokens (JWT)", tags: [Tag.Data], value: 85 },
    { name: "OAuth 2.0", tags: [Tag.Data], value: 84 },
    { name: "Microservices", tags: [Tag.Architecture], value: 80 },
    { name: "Model View Controller (MVC)", tags: [Tag.Architecture], value: 79 },
    { name: "Monolith Architecture", tags: [Tag.Architecture], value: 75 },
    { name: "Domain Driven Design (DDD)", tags: [Tag.Architecture], value: 65 },
    { name: "WebSockets", tags: [Tag.Backend], value: 64 }
]

export const skills: SkillSection[] = [
    { name: "Framework", list: frameworks },
    { name: "Languages", list: languages },
    { name: "Libraries", list: libraries },
    { name: "Environments", list: environments },
    { name: "Database Management Systems", list: databases },
    { name: "Tools", list: tools },
    { name: "Concepts", list: concepts }
]
