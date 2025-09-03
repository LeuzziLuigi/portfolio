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

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import emblaCarouselVue from 'embla-carousel-vue'
emblaCarouselVue.globalOptions = { loop: true }

document.documentElement.classList.add('dark')

const projects = [
  {
    image: "/images/apptor.png",
    title: "Apptor",
    description: "Low code application - internal Expeed project"
  },
  {
    image: "/images/schneider-electric.jpg",
    title: "Schneider Electric",
    description: "Worked on multiple tickets (features/bugs) - Schneider client"
  },
  {
    image: "/images/unity-tools.jpg",
    title: "Unity Tools",
    description: "Worked on custom unity tools - Viz Lab"
  },
  {
    image: "/images/weekly-bucket.jpg",
    title: "Weekly Bucket",
    description: "Todo App with a twist - College project, front-end"
  },
  {
    image: "/images/skeleton-rush.png",
    title: "Skeleton Rush",
    description: "2.5D Run and Shoot game - Personal, Highschool"
  },
  {
    image: "/images/fearless-run.jpg",
    title: "Fearless Run",
    description: "2D Dodge game - Personal, college"
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
    <p> clean and intuitive user interfaces | scalable and performant systems</p>
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
      <Carousel loop="true" class="relative w-full max-w-xs md:max-w-lg" :plugins="[Autoplay({
        delay: 2500,
      })]">
        <CarouselContent>
          <CarouselItem v-for="project in projects" class="md:basis-1/3 lg:basis-1/3">
            <div class="p-1">
              <Card>


                <Dialog>
                  <DialogTrigger as-child>


                    <CardContent class="flex aspect-video items-center justify-center p-1">
                      <img :src=project.image :alt=project.title></img>
                    </CardContent>

                  </DialogTrigger>
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


              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>

    <h2>Skills</h2>
    <div v-for="skill in skills">
      <h4>{{ skill.name }}</h4>
      <Progress :model-value=skill.value />
    </div>



  </main>
</template>

<style scoped>
h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h1,
h2 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.5rem;
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
}

header {
  display: flex;
  flex-direction: column;
  place-items: center;
}

.avatar {
  border-radius: 50%;
}
</style>
