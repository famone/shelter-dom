<template>
    <div class="home">
        <PetsGrid :pets="petsStore.pets" />
    </div>
</template>

<script>
import { usePetsStore } from '@/stores/pets'
import PetsGrid from '@/components/pets/PetsGrid.vue'

export default {
    components: {
        PetsGrid
    },
    data(){
        return {
            petsStore: usePetsStore()
        }
    }
}
</script>