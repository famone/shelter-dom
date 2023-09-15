<template>
    <div class="bg-dim_l_gray rounded-[9px] overflow-hidden hover:bg-white transition-colors ">
        <div class="h-[24em] sm:h-[270px] bg-center bg-cover bg-no-repeat bg-[url('@/assets/img/cat.png')]"
        :style="`background-image: url('${pet.img}');`"></div>
        <div class="py-[30px] px-6 text-center">
            <h3 class="georgia text-xl mb-[30px] text-dim_dark">{{pet.name}}</h3>
        
            <button class="bg-transparent px-[45px] py-[15px] rounded-full georgia text-dim_super_dark text-[17px] border-2 border-primary hover:bg-primary_hover hover:border-primary_hover" @click="setPet(pet)">
                Learn more
            </button>
        </div>
    </div>
</template>

<script>
import { usePetsStore } from '@/stores/pets'

export default {
    props: {
        pet: {
            required: true,
            type: Object
        }
    },
    methods: {
        setPet(pet){
            usePetsStore().SET_SINGLE_PET(pet)
        }
    }
}
</script>