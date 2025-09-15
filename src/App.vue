<script setup lang="ts">

import {
  Dialog,
  DialogContent,
  DialogDescription, DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"

import { Badge } from '@/components/ui/badge'

import { Separator } from '@/components/ui/separator'

import { ScrollArea } from '@/components/ui/scroll-area'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import { Github, Linkedin, Info } from 'lucide-vue-next'

interface Skill {
  name: string;
  tags: string[];
  value: number;
}

document.documentElement.classList.add('dark')

const projects = [
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

enum Tag {
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

const sectionFrameworks: Skill[] = [
  {
    "name": "Angular",
    "tags": [Tag.Frontend],
    "value": 90
  },
  {
    "name": ".Net",
    "tags": [Tag.Backend],
    "value": 80
  },
  {
    "name": "React",
    "tags": [Tag.Frontend, Tag.Library],
    "value": 71
  },
  {
    "name": "FastAPI",
    "tags": [Tag.Backend],
    "value": 70
  },
  {
    "name": "Vue.js",
    "tags": [Tag.Frontend],
    "value": 70
  },
  {
    "name": "Android Studio",
    "tags": [Tag.Mobile, Tag.Frontend],
    "value": 66
  },
  {
    "name": "Flask",
    "tags": [Tag.Backend],
    "value": 65
  },
  {
    "name": "Next",
    "tags": [Tag.Frontend],
    "value": 61
  },
  {
    "name": "Express",
    "tags": [Tag.Backend],
    "value": 60
  },
  {
    "name": "Spring Boot",
    "tags": [Tag.Backend],
    "value": 59
  }
];

const sectionLanguages: Skill[] = [
  {
    "name": "Javascript / Typescript",
    "tags": [Tag.Frontend, Tag.Backend],
    "value": 96
  },
  {
    "name": "HTML",
    "tags": [Tag.Frontend],
    "value": 95
  },
  {
    "name": "SQL",
    "tags": [Tag.Data],
    "value": 90
  },
  {
    "name": "C#",
    "tags": [Tag.Backend, Tag.GameDev, Tag.Scripting],
    "value": 86
  },
  {
    "name": "YAML",
    "tags": [Tag.Devops],
    "value": 85
  },
  {
    "name": "C++",
    "tags": [Tag.Backend, Tag.Scripting, Tag.GameDev],
    "value": 81
  },
  {
    "name": "CSS",
    "tags": [Tag.Frontend],
    "value": 80
  },
  {
    "name": "Python",
    "tags": [Tag.Backend, Tag.Scripting],
    "value": 78
  },
  {
    "name": "Bash",
    "tags": [Tag.Scripting],
    "value": 75
  },
  {
    "name": "Java",
    "tags": [Tag.Backend],
    "value": 70
  },
  {
    "name": "PHP",
    "tags": [Tag.Backend],
    "value": 69
  },
  {
    "name": "PowerShell",
    "tags": [Tag.Scripting],
    "value": 68
  },
  {
    "name": "GraphQL",
    "tags": [Tag.Data],
    "value": 60
  }
];

const sectionEnvironments: Skill[] = [
  {
    "name": "VS Code",
    "tags": [Tag.IDE],
    "value": 97
  },
  {
    "name": "Unity",
    "tags": [Tag.GameDev],
    "value": 85
  },
  {
    "name": "Jupyter Notebook",
    "tags": [Tag.AIML],
    "value": 80
  },
  {
    "name": "Azure",
    "tags": [Tag.Cloud, Tag.Platform],
    "value": 75
  },
  {
    "name": "Visual Studio",
    "tags": [Tag.IDE],
    "value": 74
  },
  {
    "name": "Node.js",
    "tags": [Tag.Backend],
    "value": 70
  },
  {
    "name": "IntelliJ IDEA",
    "tags": [Tag.Backend],
    "value": 66
  },
  {
    "name": "Google Cloud Platform (GCP)",
    "tags": [Tag.Cloud],
    "value": 60
  },
  {
    "name": "UnrealEngine",
    "tags": [Tag.GameDev],
    "value": 60
  },
  {
    "name": "Amazon Web Services (AWS)",
    "tags": [Tag.Cloud],
    "value": 55
  },
  {
    "name": "Hugging Face",
    "tags": [Tag.AIML],
    "value": 50
  }
];

const sectionConcepts: Skill[] = [
  {
    "name": "Component-Based Architecture",
    "tags": [Tag.Architecture],
    "value": 90
  },
  {
    "name": "JSON Web Tokens (JWT)",
    "tags": [Tag.Data],
    "value": 85
  },
  {
    "name": "OAuth 2.0",
    "tags": [Tag.Data],
    "value": 84
  },
  {
    "name": "Microservices",
    "tags": [Tag.Architecture],
    "value": 80
  },
  {
    "name": "Model View Controller (MVC)",
    "tags": [Tag.Architecture],
    "value": 79
  },
  {
    "name": "Monolith Architecture",
    "tags": [Tag.Architecture],
    "value": 75
  },
  {
    "name": "Domain Driven Design (DDD)",
    "tags": [Tag.Architecture],
    "value": 65
  },
  {
    "name": "WebSockets",
    "tags": [Tag.Backend],
    "value": 64
  }
];

const sectionDBMSs: Skill[] = [
  {
    "name": "SQL Server Management Studio (SSMS)",
    "tags": [Tag.Data],
    "value": 90
  },
  {
    "name": "MySQL",
    "tags": [Tag.Data],
    "value": 80
  },
  {
    "name": "SQLite",
    "tags": [Tag.Data],
    "value": 75
  },
  {
    "name": "PostgreSQL",
    "tags": [Tag.Data],
    "value": 65
  }
];

const sectionLibraries: Skill[] = [
  {
    "name": "Tailwind",
    "tags": [Tag.Frontend],
    "value": 85
  },
  {
    "name": "Kendo UI",
    "tags": [Tag.Frontend],
    "value": 80
  },
  {
    "name": "Module/Native Federation Federation",
    "tags": [Tag.BuildTool],
    "value": 83
  },
  {
    "name": "PrimeNg",
    "tags": [Tag.Frontend],
    "value": 75
  },
  {
    "name": "Angular Material UI",
    "tags": [Tag.Frontend],
    "value": 70
  },
  {
    "name": "TensorFlow",
    "tags": [Tag.AIML],
    "value": 69
  },
  {
    "name": "PyTorch",
    "tags": [Tag.AIML],
    "value": 65
  },
  {
    "name": "Shadcn",
    "tags": [Tag.Frontend],
    "value": 64
  },
  {
    "name": "NumPy",
    "tags": [Tag.AIML],
    "value": 55
  },
  {
    "name": "Pandas",
    "tags": [Tag.AIML],
    "value": 54
  }
];

const sectionTools: Skill[] = [
  {
    "name": "Git / Github",
    "tags": [Tag.Communication, Tag.Devops, Tag.VersionControl],
    "value": 91
  },
  {
    "name": "Microsoft Teams",
    "tags": [Tag.Communication],
    "value": 90
  },
  {
    "name": "Postman",
    "tags": [Tag.Backend, Tag.API],
    "value": 85
  },
  {
    "name": "BitBucket",
    "tags": [Tag.Communication],
    "value": 81
  },
  {
    "name": "Jira",
    "tags": [Tag.Communication, Tag.ProjectManagement],
    "value": 80
  },
  {
    "name": "Cypress",
    "tags": [Tag.Testing],
    "value": 71
  },
  {
    "name": "Docker",
    "tags": [Tag.Devops],
    "value": 70
  },
  {
    "name": "GitHub Actions",
    "tags": [Tag.Devops],
    "value": 69
  },
  {
    "name": "Vite",
    "tags": [Tag.BuildTool],
    "value": 68
  },
  {
    "name": "Webpack",
    "tags": [Tag.BuildTool],
    "value": 67
  },
  {
    "name": "Figma",
    "tags": [Tag.Frontend],
    "value": 66
  },
  {
    "name": "Puppetteer",
    "tags": [Tag.Testing],
    "value": 65
  },
  {
    "name": "Jasmine",
    "tags": [Tag.Testing],
    "value": 60
  },
  {
    "name": "Blender",
    "tags": [Tag.GameDev],
    "value": 55
  },
  {
    "name": "Jenkins",
    "tags": [Tag.Devops],
    "value": 50
  }
];

const skills = [
  {
    name: "Framework",
    list: sectionFrameworks
  },
  {
    name: "Languages",
    list: sectionLanguages
  },
  {
    name: "Libraries",
    list: sectionLibraries
  },
  {
    name: "Environments",
    list: sectionEnvironments
  },
  {
    name: "Database Management Systems",
    list: sectionDBMSs
  },
  {
    name: "Tools",
    list: sectionTools
  },
  {
    name: "Concepts",
    list: sectionConcepts
  },
]
</script>

<template>
  <ScrollArea class="h-screen w-screen rounded-md border flex center">
    <div class="p-4 pt-8 pb-10 max-w-lg sm:max-w-2xl place-self-center">
      <header class="flex flex-col place-items-center">
        <img alt="Avatar" class="rounded-[50%] w-40" src="/images/avatar.jpg" />
        <h1 class="green mt-4 mb-2">Hi, I am Luigi Leuzzi</h1>
        <h3>Full-stack Developer</h3>
        <span class="hidden sm:inline">clean and intuitive user interfaces | scalable and performant systems</span>
        <span class="sm:hidden">clean and intuitive UIs | scalable architectures</span>
        <div class="flex gap-4 mt-2 pl-1.5">
          <a href="https://github.com/LeuzziLuigi" target="_blank">
            <Github class="h-6 w-6 text-muted-foreground hover:text-chart-2" />
          </a>
          <a href="https://www.linkedin.com/in/luigileuzzi/" target="_blank">
            <Linkedin class="h-6 w-6 text-muted-foreground hover:text-chart-2" />
          </a>
        </div>
      </header>
      <main>
        <div class="section">
          <h2>About</h2>
          <p>
            I always loved videogames, paired with my growing curiosity for technologies I naturally gravitated towards
            developing my own.
            This led me to find my passion for coding early on and when I was presented with the opportunity to study
            Software Engineering in the United States I took it.
            There I fell in love with the Software Development Life Cycle as well as refining soft-skills greatly
            thanks to a part-time job I had at the campus tech center.
            After graduation, as a Software Engineer, I had the privilege of working alongside talented mentors,
            learning to design large-scale systems and deliver production-ready applications.
            These experiences not only deepened my technical expertise but also fueled my drive to keep growing and
            contributing to impactful software solutions.
          </p>
        </div>

        <div class="section">
          <div class="flex">
            <h2>Projects</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info class="h-4 w-4 ml-1 text-muted-foreground hover:text-chart-2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click on a Project for more information</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div class="flex justify-center pt-2 pb-2">
            <div class="relative w-full">
              <article v-for="(project, index) in projects">

                <Dialog>
                  <div class="block sm:flex">

                    <div class="sm:hidden">
                      <h3>{{ project.title }}</h3>
                      <p class="pt-1 pb-3 text-sm text-muted-foreground">{{ project.summary }}</p>
                    </div>

                    <DialogTrigger as-child>
                      <img class="w-full sm:w-96 object-scale-down cursor-pointer" :src=project.image
                        :alt=project.title></img>
                    </DialogTrigger>

                    <div class="hidden sm:inline content-center pl-4">
                      <h3>{{ project.title }}</h3>
                      <p class="pt-1 text-sm text-muted-foreground">{{ project.summary }}</p>
                    </div>
                  </div>


                  <DialogContent class="sm:max-w-[500px]">
                    <DialogHeader class="gap-0">
                      <DialogTitle>{{ project.title }}</DialogTitle>
                      <DialogDescription>{{ project.meta }}</DialogDescription>
                    </DialogHeader>
                    {{ project.description }}
                    <p>Techs: {{ project.techs }}</p>
                    <div class="grid gap-4 py-4">
                      <img :src=project.image :alt=project.title></img>

                    </div>
                  </DialogContent>
                </Dialog>
                <Separator v-if="index < projects.length - 1" />
              </article>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="flex">
            <h2>Skills</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info class="h-4 w-4 ml-1 text-muted-foreground hover:text-chart-2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>All skills are sorted by proficiency</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div v-for="(section, index) in skills">
            <h3>{{ section.name }}</h3>
            <span class="pr-2" v-for="skill in section.list">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge>{{ skill.name }}</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{{ skill.value }}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
            <Separator v-if="index < skills.length - 1" />
          </div>
        </div>
      </main>
    </div>
  </ScrollArea>
</template>

<style scoped>
.section {
  margin-top: 2rem;
}
</style>
