<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Info } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'

// Data imports
import { personalInfo, aboutText } from '@/data/personal'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'

import AppSidebar from '@/components/AppSidebar.vue'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'


// Initialize dark mode
document.documentElement.classList.add('dark')

// Handle active section (click)
const scrollToSection = (sectionId: string) => {
  console.log(sectionId)
  sectionId = sectionId.toLowerCase();
  const element = document.getElementById(sectionId)

  if (!element) return

  element.scrollIntoView({ behavior: "smooth" });
}

// Handle active section (scroll)
const activeSection = ref('about')

const options = {
  rootMargin: "0px",
  scrollMargin: "-200px",
};

function onAboutIntersection([e]: any) {
  if (e.isIntersecting) activeSection.value = "about";
  else if (activeSection.value == 'about') activeSection.value = "projects";
}

function onSkillsIntersection([e]: any) {
  if (e.isIntersecting) activeSection.value = "skills";
  else if (activeSection.value == 'skills') activeSection.value = "projects";
}

const aboutObserver = new IntersectionObserver(onAboutIntersection, options);
const skillsObserver = new IntersectionObserver(onSkillsIntersection, options);

onMounted(() => {
  const aboutRef = document.getElementById("about")!;
  aboutObserver.observe(aboutRef);

  const skillsRef = document.getElementById("skills")!;
  skillsObserver.observe(skillsRef);
});

onUnmounted(() => {
  aboutObserver.disconnect();
  skillsObserver.disconnect();
});


import { cn } from "@/lib/utils";
import { computed } from "vue";

interface FlipCardProps {
  rotate?: "x" | "y";
  class?: string;
}

const props = withDefaults(defineProps<FlipCardProps>(), {
  rotate: "y",
});
const rotationClass = {
  x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
  y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
};

const rotation = computed(() => rotationClass[props.rotate]);

</script>

<template>
  <!-- Header Section -->
  <SidebarProvider>
    <AppSidebar :active-section="activeSection" @section-selected="scrollToSection" />
    <!-- Main Section -->
    <ScrollArea class="h-screen w-screen flex center">
      <header class="sticky top-0 bg-background p-2 z-1 md:hidden">
        <SidebarTrigger />
        <span class="float-right">{{ personalInfo.name }} portfolio</span>
      </header>
      <div class="h-40 sm:h-60 md:h-70 lg:h-80">
        <img src="./assets/banner.jpg" class="object-cover w-full h-full">
      </div>
      <main class="pt-5">
        <!-- About Section -->
        <section id="about" class="section">
          <h1 class="mb-4 text-5xl">
            About</h1>
          <p>{{ aboutText }}</p>
        </section>
        <Separator class="section-separator" />
        <!-- Projects Section -->
        <section id="projects" class="section">
          <div class="flex">
            <h1 class="mb-4">Projects</h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info class="h-4 w-4 ml-2 mb-3 text-muted-foreground hover:text-chart-2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click on a Project for more information</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div class="flex justify-center pt-2 pb-2">
            <div class="relative w-full">
              <article v-for="(project, index) in projects" :key="project.title">
                <div class="block sm:flex">
                  <!-- Mobile title -->
                  <div class="sm:hidden">
                    <h3>{{ project.title }}</h3>
                    <p class="pt-1 pb-3 text-sm text-muted-foreground">
                      {{ project.summary }}
                    </p>
                  </div>
                  <!-- Project image -->
                  <!-- <img class="sm:w-[50%] object-scale-down" :src="project.image" :alt="project.title" /> -->

                  <div :class="cn('group w-56 [perspective:1000px]', props.class)" style="aspect-ratio: 3/2;"
                    class="sm:w-[50%]">
                    <div :class="cn(
                      'relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]',
                      rotation[0],
                    )
                      ">
                      <!-- Front -->
                      <div class="absolute size-full overflow-hidden rounded-2xl border [backface-visibility:hidden]">
                        <img class="w-full h-full " :src="project.image" :alt="project.title" />
                      </div>

                      <!-- Back -->
                      <div :class="cn(
                        'absolute w-full h-full flex justify-between flex-col overflow-hidden rounded-2xl border bg-card text-sm p-4 text-slate-200 [backface-visibility:hidden]',
                        rotation[1],
                      )
                        ">
                        <div>
                          {{ project.description }}
                        </div>
                        <div class="flex flex-wrap gap-2">
                          <span v-for="tech in project.techs" :key="project.title" class="pr-2">
                            <Badge>{{ tech }}</Badge>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <!-- Desktop title -->
                  <div class="hidden sm:inline sm:w-[50%] content-center pl-4">
                    <h3>{{ project.title }}</h3>
                    <p class="pt-1 text-sm text-muted-foreground">
                      {{ project.summary }}
                    </p>
                  </div>
                </div>



                <Separator v-if="index < projects.length - 1" />
              </article>
            </div>
          </div>
        </section>
        <Separator class="section-separator" />
        <!-- Skills Section -->
        <section id="skills" class="section">
          <div class="flex">
            <h1 class="mb-4">Skills</h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info class="h-4 w-4 ml-2 mb-3 text-muted-foreground hover:text-chart-2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>All skills are sorted by proficiency</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div v-for="(section, index) in skills" :key="section.name">
            <h3>{{ section.name }}</h3>
            <span v-for="skill in section.list" :key="skill.name" class="pr-2">
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
        </section>
      </main>

    </ScrollArea>
  </SidebarProvider>
</template>

<style scoped>
.section {
  padding: 1em 0;
  margin: 0 auto;
  max-width: calc(100% - 4em);
}

.section-separator {
  height: 5px;
  width: 100%;
}

@media (min-width: 640px) {
  .section {
    padding: 2em 0;
  }
}

@media (min-width: 768px) {
  .section {
    padding: 3em 0;
  }
}

@media (min-width: 1024px) {
  .section {
    width: calc(100% - 8em);
    max-width: 1000px;
  }
}
</style>