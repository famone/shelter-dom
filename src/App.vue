<template>
  <Header />
  <PetModal :pet="petsStore.single_pet" />
  <router-view/>
  <Footer />
</template>

<script>
import { usePetsStore } from './stores/pets'
import Header from '@/components/ui/Header.vue'
import Footer from '@/components/ui/Footer.vue'
import PetModal from '@/components/ui/PetModal.vue'

export default {
  components: {
    Header,
    Footer,
    PetModal
  },
  data(){
    return {
      petsStore: usePetsStore()
    }
  },
  created(){
    usePetsStore().LOAD_PETS()
  }
}
</script>



