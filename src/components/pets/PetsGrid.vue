<template>
    <section class="bg-dim_l_gray2 pt-20 pb-[100px]" id="topside">
        <div class="container px-4 sm:px-[30px] md:px-0 mx-auto text-center">
            <h2 class="georgia mb-[60px] text-4xl text-dim_dark leading-tight text-center">
                Our friends who <br>
                are looking for a house
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-[60px] sm:px-16 md:px-0" v-if="pets.length">
                <div class="col-span-1" v-for="(item, i) in pets.slice(getFirstItemPage, (this.per_one_page * active_page))" :key="i">
                    <PetCard :pet="item" />
                </div>
            </div>
            
            <!-- pagination -->

            <Pagination @changePage="changePage" :pages="getPages" :active_page="active_page" 
            @goFirst="goFirst" @goLast="goLast" />


        </div>
    </section>
</template>

<script>
import PetCard from '@/components/ui/PetCard.vue'
import Pagination from '@/components/ui/Pagination.vue'

export default {
    
    components: {
        PetCard,
        Pagination
    },
    props: {
        pets: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            // pages: 0,
            per_one_page: 8,
            active_page: 1
        }
    },
    computed: {
        getPages(){
            return Math.ceil(this.pets.length / this.per_one_page)
        },
        getFirstItemPage(){
            return this.per_one_page * (this.active_page - 1)
        }
    },
    watch: {
        active_page(){
            this.$nextTick(() => {
                document.querySelector('#topside').scrollIntoView({
                    behavior: 'smooth'
                });
            })
        }
    },
    methods: {
        changePage(i){
            if(i < 0 && this.active_page === 1){
                return
            }
            if(i > 0 && this.active_page === this.getPages){
                return
            }
            this.active_page += i
        },
        goFirst(){
            this.active_page = 1
        },
        goLast(){
            this.active_page = this.getPages
        }
    }
    
}
</script>