<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Info } from 'lucide-vue-next'

import { personalInfo, aboutText } from '@/data/personal'
import { professionalProjects, personalProjects } from '@/data/projects'
import { skills } from '@/data/skills'
import { sections } from '@/data/sections';

import AppSidebar from '@/components/AppSidebar.vue'
import AppProject from '@/components/AppProject.vue'


// Initialize dark mode
document.documentElement.classList.add('dark')

// Handle active section 
const activeSection = ref('about')
const stack: any[] = [];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)

  if (!element) return;

  while (stack.length) stack.pop();

  if (sections[sections.length - 1].id == sectionId) stack.push(sections[sections.length - 2].id);
  stack.push(sectionId) // add to stack

  element.scrollIntoView({ behavior: "smooth" });
}

const options = {
  rootMargin: "0px",
  scrollMargin: "-200px",
};

function onIntersection([e]: any) {
  if (e.isIntersecting) {  // add to stack
    if (!stack.includes(e.target.id)) stack.push(e.target.id)
  }
  if (!e.isIntersecting) {  // remove from stack
    const i = stack.indexOf(e.target.id);
    if (i != -1) stack.splice(i, 1);
  }
  activeSection.value = stack[stack.length - 1] // active section is always equalso to last item in stack
}

const intersectionObserver = new IntersectionObserver(onIntersection, options);
onMounted(() => {
  sections.forEach(section => {
    const ref = document.getElementById(section.id)
    if (ref) {
      intersectionObserver.observe(ref);
    }
  });
});

onUnmounted(() => {
  intersectionObserver.disconnect();
});
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
        <section :id="sections[0].id" class="section">
          <h1 class="mb-6 text-5xl">{{ sections[0].displayText }}</h1>
          <p class="text-justify mb-3">{{ aboutText[0] }}</p>
          <p class="text-justify mb-3">{{ aboutText[1] }}</p>
          <p class="text-justify">{{ aboutText[2] }}</p>
        </section>
        <Separator class="section-separator" />
        <!-- Professional Projects Section -->
        <section :id="sections[1].id" class="section">
          <div class="flex">
            <h1 class="mb-6">{{ sections[1].displayText }}</h1>
          </div>

          <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 justify-items-center pt-2 pb-2">

            <AppProject :project="project" v-for="project in professionalProjects" :key="project.title"></AppProject>
          </div>
        </section>
        <Separator class="section-separator" />
        <!-- Personal Projects Section -->
        <section :id="sections[2].id" class="section">
          <div class="flex">
            <h1 class="mb-6">{{ sections[2].displayText }}</h1>
          </div>

          <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 justify-items-center pt-2 pb-2">

            <AppProject :project="project" v-for="project in personalProjects" :key="project.title"></AppProject>
          </div>
        </section>
        <Separator class="section-separator" />
        <!-- Skills Section -->
        <section :id="sections[3].id" class="section">
          <div class="flex">
            <h1 class="mb-6">{{ sections[3].displayText }}</h1>
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

          <div v-for="(skillSection, index) in skills" :key="skillSection.name">
            <h3>{{ skillSection.name }}</h3>
            <span v-for="skill in skillSection.list" :key="skill.name" class="pr-2">
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
        <Separator class="section-separator" />
        <!-- Contact Section -->
        <section :id="sections[4].id" class="section">
          <h1 class="mb-6">{{ sections[4].displayText }}</h1>
          <div class="flex flex-col gap-2">
            <p>Email: leuzzi.luigi98@gmail.com</p>
            <p>Phone: +39 351 346 6298</p>
            <p>Linkedin: <a href="https://www.linkedin.com/in/luigileuzzi/"
                target="_blank">https://www.linkedin.com/in/luigileuzzi/</a></p>
            <p>Github: <a href="https://github.com/LeuzziLuigi" target="_blank">https://github.com/LeuzziLuigi</a></p>
          </div>
        </section>
      </main>

    </ScrollArea>
  </SidebarProvider>
</template>

<style scoped>
.section {
  padding: 3em 0.5em;
  margin: 0 auto;
  max-width: calc(100% - 2em);
}

.section-separator {
  height: 5px;
  width: 100%;
}

@media (min-width: 640px) {
  .section {
    padding: 3em 1em;
  }
}

@media (min-width: 768px) {
  .section {
    padding: 4em 2em;
  }
}

@media (min-width: 1024px) {
  .section {
    width: calc(100% - 4em);
    max-width: 1200px;
  }
}
</style>