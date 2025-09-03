<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'

const projects = [
  {
    image: "src/assets/images/apptor.png",
    description: "Low code application - internal Expeed project"
  },
  {
    image: "src/assets/images/schneider-electric.jpg",
    description: "Worked on multiple tickets (features/bugs) - Schneider client"
  },
  {
    image: "src/assets/images/unity-tools.jpg",
    description: "Worked on custom unity tools - Viz Lab"
  },
  {
    image: "src/assets/images/weekly-bucket.jpg",
    description: "Todo App with a twist - College project, front-end"
  },
  {
    image: "src/assets/images/skeleton-rush.png",
    description: "2.5D Run and Shoot game - Personal, Highschool"
  },
  {
    image: "src/assets/images/fearless-run.jpg",
    description: "2D Dodge game - Personal, college"
  },
]

</script>

<template>
  <header>
    <img alt="Avatar" class="avatar" src="./assets/images/avatar.jpg" width="125" height="125" />
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
      <Carousel class="relative w-full max-w-xs md:max-w-lg" :plugins="[Autoplay({
        delay: 2000,
      })]">
        <CarouselContent>
          <CarouselItem v-for="project in projects" class="md:basis-1/3 lg:basis-1/3">
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-video items-center justify-center p-1">
                  <img :src=project.image></img>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>

    <h2>Skills</h2>


  </main>
</template>

<style scoped>
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
