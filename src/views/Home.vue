<template>
  <div class="home">
    <Hero />
    <About />
    <MainSlider :pets="petsStore.pets" />
    <Icons />
    <Donate />
  </div>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import About from '@/components/home/About.vue'
import MainSlider from '@/components/home/MainSlider.vue'
import Icons from '@/components/home/Icons.vue'
import Donate from '@/components/home/Donate.vue'
import { usePetsStore } from '@/stores/pets'

export default {
  components: {
    Hero,
    About,
    MainSlider,
    Icons,
    Donate
  },
  data(){
    return {
      petsStore: usePetsStore()
    }
  }
}
</script>
