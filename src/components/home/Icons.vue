<template>
    <section class="bg-white pt-[42px] pb-[12px] sm:pt-20 sm:pb-[100px]">
        <div class="container px-3 sm:px-[30px] md:px-0 mx-auto">
            <h2 class="georgia mb-[42px] sm:mb-[60px] text-4xl text-dim_dark leading-tight text-center wow fadeInUp">
                How you can help <br>our shelter
            </h2>
            <div class="flex flex-row flex-wrap sm:justify-center">
                <div class="w-1/2 sm:w-1/3 md:w-[20%] text-center" v-for="(item, i) in icons" :key="i">
                    <img :src="item.img" class="w-[60px] mx-auto mb-[30px]">
                    <h3 class="georgia text-xl mb-[55px] text-dim_dark">
                        {{item.name}}
                    </h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            icons: [
                {
                    name: 'Pet food',
                    img: require('../../assets/img/icons/icon-pet-food.svg')
                },
                {
                    name: 'Transportation',
                    img: require('../../assets/img/icons/icon-transportation.svg')
                },
                {
                    name: 'Toys',
                    img: require('../../assets/img/icons/icon-toys.svg')
                },
                {
                    name: 'Bowls and cups',
                    img: require('../../assets/img/icons/icon-bowls-and-cups.svg')
                },
                {
                    name: 'Shampoos',
                    img: require('../../assets/img/icons/icon-shampoos.svg')
                },
                {
                    name: 'Vitamins',
                    img: require('../../assets/img/icons/icon-vitamins.svg')
                },
                {
                    name: 'Medicines',
                    img: require('../../assets/img/icons/icon-medicines.svg')
                },
                {
                    name: 'Collars / leashes',
                    img: require('../../assets/img/icons/icon-collars-leashes.svg')
                },
                {
                    name: 'Sleeping areas',
                    img: require('../../assets/img/icons/icon-sleeping-area.svg')
                }
            ]
        }
    }
}
</script>