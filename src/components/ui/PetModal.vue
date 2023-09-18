<template>
    <Transition name="fade">
        <div class="fixed bg-[rgba(41,41,41,0.6)] h-screen w-screen top-0 left-0 z-40 flex justify-center items-center" @click="close" v-if="pet">
            <div class="w-[240px] sm:w-[630px] md:w-[900px] relative nested" @click.stop>
                <button :class="close_btn" @click="close">
                    <span class="mdi mdi-close"></span>
                </button>
                <div class="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-[9px] bg-white">
                    <div class="col-span-1 h-full hidden sm:block">
                        <div class="h-full w-full bg-center bg-cover bg-no-repeat bg-[url('@/assets/img/cat.png')]" :style="`background-image: url('${pet.img}');`"></div>
                    </div>
                    <div class="col-span-1 py-[10px] px-[10px] pb-8 md:py-[50px] md:px-[30px] georgia md:pb-20">
                        <!-- <pre>{{pet}}</pre> -->
                        <h2 class="mb-2.5 text-4xl text-dim_dark leading-tight text-center sm:text-left">{{pet.name}}</h2>
                        <h3 class="text-xl mb-5 md:mb-10 text-dim_dark text-center sm:text-left">Dog - Labrador</h3>
                        <p class="text-dim_dark2 text-md leading-[24px] mb-5 md:mb-10">{{pet.name}} is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.</p>
                        <ul class="pl-4 list-disc text-primary georgia space-y-2.5 tracking-wider" >
                            <li><span class="text-black"><strong>Age:</strong> 2 months</span></li>
                            <li><span class="text-black"><strong>Inoculations:</strong> none</span></li>
                            <li><span class="text-black"><strong>Diseases:</strong> none</span></li>
                            <li><span class="text-black"><strong>Parasites:</strong> none</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import { usePetsStore } from '@/stores/pets'

export default {
    props: {
        pet: {
            require: true,
            type: Object
        }
    },
    data(){
        return{
            close_btn: 'h-[52px] w-[52px] rounded-full border-2 flex justify-center items-center border-primary hover:bg-primary text-dim_super_dark text-2xl top-[-52px] right-[-52px] absolute'
        }
    },
    methods: {
        close(){
            usePetsStore().SET_SINGLE_PET(null)
        }
    },
    mounted(){
        document.body.addEventListener('keydown', (e) =>{
			if(e.keyCode == 27 ){
				this.close()
			}
		})
    }
}
</script>

<style scoped>
.fade-enter-active, 
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  /* transform: translateY(20px); */
  opacity: 0;
}

.fade-enter-active .nested{
  transition: all 0.3s ease-out;
}
.fade-leave-active .nested {
  transition: all 0.3s ease-out;
}

.fade-enter-from .nested{
  transform: translateY(40px);
  opacity: 0;
}
.fade-leave-to .nested {
  transform: translateY(40px);
  opacity: 0;
}
</style>