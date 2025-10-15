<script setup lang="ts">
import type { Project } from "@/types";
import { SquareArrowOutUpRight } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'

defineProps<{
  project: Project
}>()

import { cn } from "@/lib/utils";
import { computed } from "vue";

const rotationClass = {
  x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
  y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
};

const rotation = computed(() => rotationClass['y']);

</script>

<template>
  <article class="border text-center rounded-[20px] bg-sidebar w-full">
    <div class="flex flex-col h-full justify-between ">
      <div>
        <div class="flex justify-center p-2">
          <h3>{{ project.title }}</h3>
          <a v-if="project.link" :href="project.link" target="_blank" class="self-center">
            <SquareArrowOutUpRight class="w-4 ml-2 text-muted-foreground hover:text-chart-2" />
          </a>
        </div>
      </div>
      <div :class="cn('group [perspective:1000px]')" style="aspect-ratio: 3/2;">
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
            'absolute w-full h-full flex flex-col justify-between p-4 rounded-2xl border bg-card text-slate-200 [backface-visibility:hidden] overflow-auto left-0',
            rotation[1],
          )
            ">
            <p>
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.techs" :key="project.title" class="pr-2">
                <Badge>{{ tech }}</Badge>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<style scoped></style>