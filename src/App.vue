<script setup lang="ts">
import { Progress } from "@/components/ui/progress"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import emblaCarouselVue from 'embla-carousel-vue'
emblaCarouselVue.globalOptions = { loop: true }

document.documentElement.classList.add('dark')

const projects = [
  {
    image: "/images/apptor.png",
    title: "Apptor",
    description: "Low code Web Application",
    meta: 'Expeed, software engineer'
  },
  {
    image: "/images/schneider-electric.jpg",
    title: "Schneider Electric",
    description: "Multiple Client's projects",
    meta: 'Expeed, software engineer'
  },
  {
    image: "/images/unity-tools.jpg",
    title: "XR Ambisonics",
    description: "Unity Tools to create music-reactive visualizations",
    meta: 'Viz Lab, developer'
  },
  {
    image: "/images/weekly-bucket.jpg",
    title: "Weekly Bucket",
    description: "Weekly planner with intuitive user interface",
    meta: 'College Project, front-end'
  },
  {
    image: "/images/skeleton-rush.png",
    title: "Skeleton Rush",
    description: "A 2.5D shooter video game. Defeat enemies and avoid obstacles as fast as you can",
    meta: 'Personal Project, developer'
  },
  {
    image: "/images/fearless-run.jpg",
    title: "Fearless Run",
    description: "A mobile arcade video game. Dodge enemies and get the highest score",
    meta: 'Personal Project, developer'
  },
]

const skills = [
  {
    name: 'Angular',
    value: 90,
  },
  {
    name: '.Net',
    value: 80,
  },
  {
    name: 'Unity',
    value: 85,
  },
  {
    name: 'Azure',
    value: 65,
  },
  {
    name: 'Android Studio',
    value: 65,
  },
  {
    name: 'HTML',
    value: 95,
  },
  {
    name: 'CSS',
    value: 80,
  },
  {
    name: 'Javascript / Typescript',
    value: 96,
  },
  {
    name: 'Python',
    value: 80,
  },
  {
    name: 'PHP',
    value: 70,
  },
  {
    name: 'C#',
    value: 85,
  },
  {
    name: 'C++',
    value: 80,
  },
  {
    name: 'Java',
    value: 70,
  },
  {
    name: 'SQL',
    value: 90,
  },
  {
    name: 'GraphQL',
    value: 60,
  },
  {
    name: 'Cypress',
    value: 70
  },
  {
    name: 'Git / Github',
    value: 90,
  },
  {
    name: 'Jira',
    value: 80,
  },
];

</script>

<template>
  <header>
    <img alt="Avatar" class="avatar" src="/images/avatar.jpg" width="125" height="125" />
    <h1 class="green">Hi, I am Luigi Leuzzi</h1>
    <h3>Full-stack Developer</h3>
    <span class="hidden sm:inline">clean and intuitive user interfaces | scalable and performant systems</span>
    <span class="sm:hidden">clean and intuitive UIs | scalable architectures</span>
  </header>
  <main>
    <h2>About</h2>
    <p>
      From an early age, I excelled in competitive video games, paired with my curiosity for
      technologies I naturally gravitated towards coding my own. What began as a hobby quickly
      grew into a lasting passion for software development. This interest led me to study in the
      United States, where I fell in love with the Software Development Life Cycle. As a Software
      Engineer, I had the privilege of working alongside talented mentors, learning to design
      large-scale systems and deliver production-ready applications. These experiences not only
      deepened my technical expertise but also fueled my drive to keep growing and contributing to
      impactful software solutions.
    </p>
    <h2>Projects</h2>
    <div class="flex justify-center">
      <div loop="true" class="relative w-full">
        <article v-for="(project, index) in projects">

          <Dialog>
            <div class="flex">

              <DialogTrigger as-child>
                <img class="w-72 object-scale-down cursor-pointer" :src=project.image :alt=project.title></img>
              </DialogTrigger>

              <div class="content-center pl-4">
                <h3>{{ project.title }}</h3>
                <p class="pt-1 text-sm">{{ project.description }}</p>
              </div>
            </div>


            <DialogContent class="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{{ project.title }}</DialogTitle>
                <DialogDescription>
                  {{ project.description }}
                </DialogDescription>
              </DialogHeader>
              <div class="grid gap-4 py-4">
                <img :src=project.image :alt=project.title></img>

              </div>
            </DialogContent>
          </Dialog>
          <Separator style="margin-top:1rem; margin-bottom: 1rem;" v-if="index < projects.length - 1" />
        </article>
      </div>
    </div>

    <h2>Skills</h2>
    <div v-for="skill in skills">
      <h4>{{ skill.name }}</h4>
      <Progress :model-value=skill.value />
    </div>

    <h2>
      Contact
    </h2>
    <p>leuzzi.luigi98@gmail.com</p>

  </main>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  place-items: center;
}

.avatar {
  border-radius: 50%;
}
</style>
