<script setup lang="ts"></script>

<template>
  <header>
    <img alt="Avatar" class="avatar" src="./assets/avatar.jpg" width="125" height="125" />
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
