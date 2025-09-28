<script setup lang="ts">
defineProps(['activeSection'])
defineEmits(['sectionSelected'])
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'

import { personalInfo, aboutText } from '@/data/personal'

import { Github, Linkedin } from 'lucide-vue-next'


const sections = [
  {
    name: "About",
    url: "#",
    icon: "icon"
  },
  {
    name: "Projects",
    url: "#",
    icon: "icon"
  },
  {
    name: "Skills",
    url: "#",
    icon: "icon"
  },
];

</script>

<template>
  <Sidebar>
    <SidebarHeader class="p-10 flex flex-col place-items-center">
      <img :alt="`${personalInfo.name} Avatar`" class="rounded-[50%] w-40" :src="personalInfo.avatar" />
      <h1 class="mt-4 mb-2">{{ personalInfo.name }}</h1>
      <h3 class="text-muted-foreground"><i>{{ personalInfo.title }}</i></h3>
    </SidebarHeader>
    <SidebarContent>
      <div v-for="section in sections" class="m-1">
        <button @click="$emit('sectionSelected', section.name)" class="w-full p-2 cursor-pointer"
          :class="activeSection === section.name.toLowerCase() ? 'bg-background' : ''">
          {{ section.name }}
        </button>
      </div>
    </SidebarContent>
    <SidebarFooter class="p-5 flex place-items-center">
      <div class="flex gap-4 mt-2 pl-1.5">
        <a :href="personalInfo.github" target="_blank" rel="noopener noreferrer">
          <Github class="h-6 w-6 text-muted-foreground hover:text-chart-2" />
        </a>
        <a :href="personalInfo.linkedin" target="_blank" rel="noopener noreferrer">
          <Linkedin class="h-6 w-6 text-muted-foreground hover:text-chart-2" />
        </a>
      </div>
    </SidebarFooter>
  </Sidebar>
</template>
<style scoped></style>