<template>
    <section class="bg-dim_l_gray2 py-[42px] sm:pt-20 sm:pb-[100px]">
        <div class="container px-3 sm:px-[30px] md:px-0 mx-auto text-center">
            <h2 class="georgia mb-[42px] sm:mb-[60px] text-4xl text-dim_dark leading-tight text-center wow fadeInUp">
                Our friends who <br>
                are looking for a house
            </h2>
            <div class="relative sm:px-[64px] md:px-[105px] mb-5 sm:mb-[60px]" v-if="pets.length">
                <button class="absolute top-1/2 prev left-0 hidden" :class="sliderBtn">
                    <img src="@/assets/img/prev.svg" alt="">
                </button>
                <button class="absolute top-1/2 next right-0 hidden" :class="sliderBtn">
                    <img src="@/assets/img/next.svg" alt="">
                </button>
                <swiper
                    :loop="true"
                    :modules="modules"
                    :breakpoints="breakpoints"
                    class="mySwiper"
                    :navigation="{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }">
                        <swiper-slide v-for="(item, i) in pets" :key="i">
                            <PetCard :pet="item" />
                        </swiper-slide>
                    </swiper>
            </div>
            <div class="flex sm:hidden justify-center gap-20 mb-5">
                <button class=" prev flex" :class="sliderBtn">
                    <img src="@/assets/img/prev.svg" alt="">
                </button>
                <button class="next flex" :class="sliderBtn">
                    <img src="@/assets/img/next.svg" alt="">
                </button>
            </div>
            <router-link tag="a" to="/pets">
                <button class="bg-primary px-[45px] py-[15px] rounded-full hover:bg-primary_hover georgia text-dim_super_dark text-[17px]">
                    Get to know the rest
                </button>
            </router-link>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import PetCard from '@/components/ui/PetCard.vue'
import { Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
        PetCard
    },
    props: {
        pets: {
            type: Array,
            required: true
        }
    },
    data(){
        return{
            sliderBtn: 'z-10 h-[52px] w-[52px] rounded-full border-2 sm:flex justify-center items-center border-primary hover:bg-primary text-dim_dark',
            modules: [Navigation],
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                // when window width is >= 480px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                // when window width is >= 640px
                1060: {
                    slidesPerView: 3,
                    spaceBetween: 90
                }
            }
        }
    }
}
</script>