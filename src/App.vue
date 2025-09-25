<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
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

// Data imports
import { personalInfo, aboutText } from '@/data/personal'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'

// Initialize dark mode
document.documentElement.classList.add('dark')
</script>

<template>
  <ScrollArea class="h-screen w-screen rounded-md flex center">
    <div class="p-4 pt-8 pb-10 max-w-lg sm:max-w-2xl place-self-center">

      <!-- Header Section -->
      <header class="flex flex-col place-items-center">
        <img :alt="`${personalInfo.name} Avatar`" class="rounded-[50%] w-40" :src="personalInfo.avatar" />
        <h1 class="mt-4 mb-2">Hi, I am {{ personalInfo.name }}</h1>
        <h3>{{ personalInfo.title }}</h3>

        <span class="hidden sm:inline">{{ personalInfo.tagline.desktop }}</span>
        <span class="sm:hidden">{{ personalInfo.tagline.mobile }}</span>

        <div class="flex gap-4 mt-2 pl-1.5">
          <a :href="personalInfo.github" target="_blank" rel="noopener noreferrer">
            <Github class="h-6 w-6 text-muted-foreground hover:text-chart-2" />
          </a>
          <a :href="personalInfo.linkedin" target="_blank" rel="noopener noreferrer">
            <Linkedin class="h-6 w-6 text-muted-foreground hover:text-chart-2" />
          </a>
        </div>
      </header>

      <main>
        <!-- About Section -->
        <section class="section">
          <h2>About</h2>
          <p>{{ aboutText }}</p>
        </section>

        <!-- Projects Section -->
        <section class="section">
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
              <article v-for="(project, index) in projects" :key="project.title">
                <Dialog>
                  <div class="block sm:flex">
                    <!-- Mobile title -->
                    <div class="sm:hidden">
                      <h3>{{ project.title }}</h3>
                      <p class="pt-1 pb-3 text-sm text-muted-foreground">
                        {{ project.summary }}
                      </p>
                    </div>

                    <!-- Project image -->
                    <DialogTrigger as-child>
                      <img class="w-full sm:w-96 object-scale-down cursor-pointer" :src="project.image"
                        :alt="project.title" />
                    </DialogTrigger>

                    <!-- Desktop title -->
                    <div class="hidden sm:inline content-center pl-4">
                      <h3>{{ project.title }}</h3>
                      <p class="pt-1 text-sm text-muted-foreground">
                        {{ project.summary }}
                      </p>
                    </div>
                  </div>

                  <!-- Project dialog -->
                  <DialogContent class="sm:max-w-[500px]">
                    <DialogHeader class="gap-0">
                      <DialogTitle>{{ project.title }}</DialogTitle>
                      <DialogDescription>{{ project.meta }}</DialogDescription>
                    </DialogHeader>
                    <p>{{ project.description }}</p>
                    <p><strong>Techs:</strong> {{ project.techs }}</p>
                    <div class="grid gap-4 py-4">
                      <img :src="project.image" :alt="project.title" />
                    </div>
                  </DialogContent>
                </Dialog>

                <Separator v-if="index < projects.length - 1" />
              </article>
            </div>
          </div>
        </section>

        <!-- Skills Section -->
        <section class="section">
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
    </div>
  </ScrollArea>
</template>

<style scoped>
.section {
  margin-top: 2rem;
}
</style>