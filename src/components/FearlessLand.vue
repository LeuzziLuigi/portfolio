<script setup lang="ts">
import { ArrowLeft, Download, Gamepad2, Layers3, Timer, Trophy } from 'lucide-vue-next'

const technologies = ['Unity3D', 'C#', 'Mobile game development']
</script>

<template>
  <main class="fearless-land">
    <div class="backdrop" aria-hidden="true"></div>
    <a class="back-link" href="/" aria-label="Back to portfolio"><ArrowLeft :size="18" /><span>Portfolio</span></a>

    <section class="project-copy" aria-labelledby="project-title">
      <div class="eyebrow"><Gamepad2 :size="16" /> Personal project · developer</div>
      <h1 id="project-title">Fearless<br /><span>Run</span></h1>
      <p class="intro">A colourful 2D arcade game about reading the chaos, dodging incoming enemies, and staying in the run as long as possible.</p>
      <div class="game-details" aria-label="Game highlights">
        <div><Layers3 :size="19" /><span><strong>3 stages</strong><small>Distinct art &amp; enemy abilities</small></span></div>
        <div><Timer :size="19" /><span><strong>Survive longer</strong><small>Every second counts</small></span></div>
        <div><Trophy :size="19" /><span><strong>Score multiplier</strong><small>Built from every stage</small></span></div>
      </div>
      <div class="tech-list" aria-label="Technologies used"><span v-for="technology in technologies" :key="technology">{{ technology }}</span></div>
      <a class="download-button" href="/fearlessRun/FearlessRun.apk" download>
        <Download :size="18" />
        <span>Download for Android</span>
        <small>APK · 37 MB</small>
      </a>
    </section>

    <section class="showcase" aria-label="Fearless Run gameplay recording">
      <div class="video-shell"><video controls preload="metadata" poster="/images/fearless-run.jpg"><source src="/fearlessRun/Recording_FearlessLand.mp4" type="video/mp4" />Your browser does not support embedded video.</video></div>
      <p class="video-caption">Gameplay recording</p>
      <img class="sprite sprite-right" src="/fearlessRun/player_facing_right.png" alt="" />
    </section>
  </main>
</template>

<style scoped>
:global(html), :global(body), :global(#app) { min-height: 100%; }
:global(html) { overflow: hidden; }
.fearless-land { --violet: #8d57db; position: relative; isolation: isolate; min-height: 100dvh; overflow: hidden; display: grid; grid-template-columns: minmax(300px, .92fr) minmax(360px, .8fr); align-items: center; gap: clamp(2rem, 5vw, 7rem); padding: clamp(2rem, 5vw, 5rem) clamp(2rem, 9vw, 11rem); color: #fff; background: #050526; }
.backdrop { position: absolute; z-index: -2; inset: 0; background: linear-gradient(100deg, rgba(3,3,31,.98) 10%, rgba(16,7,67,.91) 56%, rgba(10,6,48,.76)), url('/fearlessRun/background1.png') center / cover; }
.backdrop::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 68% 39%, rgba(244,101,232,.28), transparent 26%); }
.back-link { position: absolute; top: clamp(1.5rem, 3vw, 3rem); left: clamp(1.5rem, 4vw, 5rem); display: inline-flex; align-items: center; gap: .55rem; color: rgba(255,255,255,.78); font-size: .9rem; font-weight: 700; text-decoration: none; transition: color 180ms ease, transform 180ms ease; }
.back-link:hover { color: #fff; transform: translateX(-3px); }
.project-copy { max-width: 42rem; }
.eyebrow { display: flex; align-items: center; gap: .5rem; color: #e7b8f5; font-size: clamp(.7rem, .85vw, .9rem); font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
h1 { margin: clamp(.7rem, 1.8vw, 1.5rem) 0 1rem; color: #fff; font-size: clamp(3.8rem, 6.6vw, 7rem); font-weight: 900; letter-spacing: -.09em; line-height: .78; text-decoration: none; }
h1 span { color: #e98be9; }
.intro { max-width: 34rem; margin: 0; color: rgba(255,255,255,.84); font-size: clamp(.9rem, 1.1vw, 1.12rem); line-height: 1.65; }
.game-details { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .6rem; margin-top: clamp(1.2rem, 3vw, 2.4rem); }
.game-details > div { display: flex; align-items: flex-start; gap: .55rem; min-width: 0; padding: .75rem .55rem .75rem 0; color: #f2b2f0; border-top: 1px solid rgba(255,255,255,.25); }
.game-details span { display: grid; gap: .18rem; }.game-details strong { color: #fff; font-size: clamp(.75rem,.9vw,.95rem); line-height: 1.15; }.game-details small { color: rgba(255,255,255,.6); font-size: clamp(.62rem,.72vw,.76rem); line-height: 1.25; }
.tech-list { display: flex; flex-wrap: wrap; gap: .55rem; margin-top: clamp(.4rem, 1vw, 1rem); }.tech-list span { padding: .38rem .68rem; border: 1px solid rgba(242,178,240,.45); border-radius: 999px; color: #f7d8f7; font-size: .74rem; font-weight: 700; }
.download-button { display: inline-flex; align-items: center; gap: .55rem; margin-top: clamp(1rem, 2vw, 1.6rem); padding: .72rem .9rem; border: 1px solid rgba(255,255,255,.45); border-radius: .8rem; background: rgba(255,255,255,.12); color: #fff; font-size: .82rem; font-weight: 800; text-decoration: none; transition: background 180ms ease, border-color 180ms ease, transform 180ms ease; }.download-button small { margin-left: .2rem; color: rgba(255,255,255,.64); font-size: .65rem; font-weight: 700; }.download-button:hover { border-color: #f5b4f3; background: rgba(235,138,233,.24); transform: translateY(-2px); }
.showcase { position: relative; display: grid; justify-items: center; }.video-shell { width: min(100%, 22rem); padding: .4rem; border-radius: 1.35rem; background: linear-gradient(145deg, rgba(255,255,255,.58), rgba(224,111,235,.14)); box-shadow: 0 1.5rem 5rem rgba(0,0,0,.42); }.video-shell video { display: block; width: 100%; max-height: calc(100dvh - 9rem); border-radius: 1.05rem; background: #050526; }.video-caption { margin: .7rem 0 0; color: rgba(255,255,255,.58); font-size: .75rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
.sprite { position: absolute; pointer-events: none; user-select: none; }.sprite-right { width: clamp(4.5rem,7vw,7.5rem); top: -2.5rem; right: -3.5rem; transform: rotate(8deg); }
@media (max-width: 760px) { :global(html) { overflow-y: auto; }.fearless-land { min-height: 100dvh; overflow: visible; grid-template-columns: 1fr; gap: 2.25rem; padding: 5.2rem 1.5rem 2.5rem; }.project-copy { max-width: none; }h1 { font-size: clamp(3.8rem,18vw,5.5rem); }.game-details { grid-template-columns: 1fr; gap: 0; }.game-details > div { padding-block: .68rem; }.video-shell { width: min(100%,21rem); }.video-shell video { max-height: none; }.sprite-right { right: -1rem; top: -2.6rem; } }
</style>
